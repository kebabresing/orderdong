import { useState, useEffect, useCallback } from 'react';

export type DeviceOS = 'ios' | 'android' | 'desktop' | 'unknown';

export interface LocationState {
  lat: number | null;
  lng: number | null;
  accuracy: number | null;
  status: 'idle' | 'requesting' | 'granted' | 'denied' | 'unavailable' | 'timeout' | 'insecure_context';
  errorMessage: string | null;
  deviceOs: DeviceOS;
}

export function detectOS(): DeviceOS {
  if (typeof window === 'undefined') return 'unknown';
  const ua = navigator.userAgent || '';
  if (/iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }
  if (/Android/.test(ua)) {
    return 'android';
  }
  if (/Windows|Macintosh|Linux/.test(ua)) {
    return 'desktop';
  }
  return 'unknown';
}

export function isSecureEnvironment(): boolean {
  if (typeof window === 'undefined') return true;
  const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '[::1]'
  );
  if (typeof window.isSecureContext === 'boolean') {
    return window.isSecureContext || isLocalhost;
  }
  return window.location.protocol === 'https:' || isLocalhost;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>(() => {
    const os = detectOS();
    const storedLat = typeof localStorage !== 'undefined' ? localStorage.getItem('jasdor_user_lat') : null;
    const storedLng = typeof localStorage !== 'undefined' ? localStorage.getItem('jasdor_user_lng') : null;
    const storedAcc = typeof localStorage !== 'undefined' ? localStorage.getItem('jasdor_user_acc') : null;

    if (storedLat && storedLng) {
      return {
        lat: parseFloat(storedLat),
        lng: parseFloat(storedLng),
        accuracy: storedAcc ? parseFloat(storedAcc) : null,
        status: 'granted',
        errorMessage: null,
        deviceOs: os
      };
    }

    return {
      lat: null,
      lng: null,
      accuracy: null,
      status: 'idle',
      errorMessage: null,
      deviceOs: os
    };
  });

  const getPositionPromise = (highAccuracy: boolean, timeoutMs: number, maxAgeMs: number): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: highAccuracy,
        timeout: timeoutMs,
        maximumAge: maxAgeMs
      });
    });
  };

  const requestLocation = useCallback(async (isUserInitiated = false) => {
    const os = detectOS();

    // 1. Check if browser supports Geolocation API
    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        status: 'unavailable',
        deviceOs: os,
        errorMessage: 'Browser kamu tidak mendukung deteksi lokasi Geolocation API.'
      }));
      return;
    }

    // 2. Check Secure Context (HTTPS or localhost)
    // iOS Safari & Android Chrome strictly prohibit geolocation over unencrypted HTTP (except localhost)
    if (!isSecureEnvironment()) {
      const isMobile = os === 'ios' || os === 'android';
      const msg = isMobile
        ? 'Browser HP (Safari iOS / Chrome Android) mewajibkan koneksi HTTPS untuk mengaktifkan GPS. Jika mengakses lewat IP lokal (HTTP), sensor lokasi diblokir otomatis oleh keamanan sistem operasi.'
        : 'Fitur GPS memerlukan koneksi aman (HTTPS). Silakan akses melalui HTTPS atau gunakan pencarian manual outlet.';

      setLocation((prev) => ({
        ...prev,
        status: 'insecure_context',
        deviceOs: os,
        errorMessage: msg
      }));
      return;
    }

    setLocation((prev) => ({ ...prev, status: 'requesting', errorMessage: null, deviceOs: os }));

    try {
      // Step 1: Try High Accuracy GPS (hardware satellite fix)
      let position: GeolocationPosition;
      try {
        position = await getPositionPromise(true, 7000, 60000);
      } catch (err: any) {
        // If permission was explicitly denied, do not retry
        if (err && err.code === 1) {
          throw err;
        }
        // If timed out or unavailable (e.g. indoors / slow satellite), fallback to cell/Wi-Fi positioning
        console.warn('[GPS] High accuracy timed out/unavailable, falling back to network positioning...', err);
        position = await getPositionPromise(false, 10000, 300000);
      }

      const { latitude, longitude, accuracy } = position.coords;
      console.log(`[GPS] Location resolved: ${latitude}, ${longitude} (acc: ${accuracy}m)`);

      localStorage.setItem('jasdor_user_lat', latitude.toString());
      localStorage.setItem('jasdor_user_lng', longitude.toString());
      localStorage.setItem('jasdor_user_acc', accuracy.toString());

      setLocation({
        lat: latitude,
        lng: longitude,
        accuracy,
        status: 'granted',
        errorMessage: null,
        deviceOs: os
      });
    } catch (err: any) {
      console.warn('[GPS] Request failed:', err);
      let status: LocationState['status'] = 'denied';
      let msg = 'Izin lokasi diperlukan untuk mengurutkan outlet terdekat dari posisimu.';

      if (err && typeof err.code === 'number') {
        if (err.code === 1) { // PERMISSION_DENIED
          status = 'denied';
          if (os === 'ios') {
            msg = 'Akses lokasi ditolak pada Safari iOS. Buka Pengaturan iPhone > Privasi & Keamanan > Layanan Lokasi (ON). Di Safari, klik ikon "aA" di address bar > Pengaturan Situs Web > Lokasi > pilih Izinkan.';
          } else if (os === 'android') {
            msg = 'Akses lokasi ditolak pada browser Android. Pastikan toggle Lokasi / GPS aktif di panel atas, lalu klik ikon pengaturan/gembok di kiri address bar Chrome > Izin > Lokasi > Izinkan.';
          } else {
            msg = 'Akses lokasi ditolak. Silakan klik ikon gembok/izin di address bar browser Anda, pilih "Izinkan", lalu klik Perbarui.';
          }
        } else if (err.code === 2) { // POSITION_UNAVAILABLE
          status = 'unavailable';
          msg = 'Informasi lokasi GPS tidak tersedia. Pastikan sinyal GPS / Wi-Fi di perangkat Anda telah aktif.';
        } else if (err.code === 3) { // TIMEOUT
          status = 'timeout';
          msg = 'Waktu permintaan lokasi habis (sinyal GPS lemah). Silakan coba klik tombol Perbarui lagi atau pilih kota terdekat di bawah.';
        }
      }

      setLocation((prev) => ({
        ...prev,
        status,
        deviceOs: os,
        errorMessage: msg
      }));
    }
  }, []);

  const clearLocation = useCallback(() => {
    localStorage.removeItem('jasdor_user_lat');
    localStorage.removeItem('jasdor_user_lng');
    localStorage.removeItem('jasdor_user_acc');
    setLocation({
      lat: null,
      lng: null,
      accuracy: null,
      status: 'idle',
      errorMessage: null,
      deviceOs: detectOS()
    });
  }, []);

  // Set manual coordinates (e.g. when user selects a preset city)
  const setManualCoordinates = useCallback((lat: number, lng: number, cityName?: string) => {
    localStorage.setItem('jasdor_user_lat', lat.toString());
    localStorage.setItem('jasdor_user_lng', lng.toString());
    localStorage.setItem('jasdor_user_acc', '500');
    setLocation({
      lat,
      lng,
      accuracy: 500,
      status: 'granted',
      errorMessage: null,
      deviceOs: detectOS()
    });
    console.log(`[GPS] Preset location set to ${cityName || 'City'}: ${lat}, ${lng}`);
  }, []);

  // Auto request location on first mount only if secure context and idle
  useEffect(() => {
    if (location.status === 'idle') {
      if (isSecureEnvironment()) {
        requestLocation(false);
      } else {
        setLocation((prev) => ({
          ...prev,
          status: 'insecure_context',
          errorMessage: 'Browser HP mewajibkan koneksi HTTPS untuk mengaktifkan GPS. Silakan gunakan pencarian atau pilih kota terdekat di bawah.'
        }));
      }
    }
  }, [location.status, requestLocation]);

  return {
    location,
    requestLocation,
    clearLocation,
    setManualCoordinates
  };
}
