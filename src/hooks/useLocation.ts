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

  const getPositionPromise = (
    highAccuracy: boolean,
    timeoutMs: number,
    maxAgeMs: number
  ): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        enableHighAccuracy: highAccuracy,
        timeout: timeoutMs,
        maximumAge: maxAgeMs
      });
    });
  };

  const requestLocation = useCallback(async (_isUserInitiated = false) => {
    const os = detectOS();

    if (typeof navigator === 'undefined' || !navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        status: 'unavailable',
        deviceOs: os,
        errorMessage: 'Browser kamu tidak mendukung deteksi lokasi Geolocation API.'
      }));
      return;
    }

    if (!isSecureEnvironment()) {
      const isMobile = os === 'ios' || os === 'android';
      const msg = isMobile
        ? 'Browser HP (Safari iOS / Chrome Android) mewajibkan koneksi HTTPS untuk mengaktifkan GPS. Gunakan pilihan kota di bawah atau buka lewat HTTPS.'
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
      let position: GeolocationPosition;
      try {
        position = await getPositionPromise(true, 7000, 60000);
      } catch (err: any) {
        if (err && err.code === 1) {
          throw err;
        }
        position = await getPositionPromise(false, 10000, 300000);
      }

      const { latitude, longitude, accuracy } = position.coords;
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
      let status: LocationState['status'] = 'denied';
      let msg = 'Izin lokasi diperlukan untuk mengurutkan outlet terdekat dari posisimu.';

      if (err && typeof err.code === 'number') {
        if (err.code === 1) {
          status = 'denied';
          if (os === 'ios') {
            msg = 'Akses lokasi ditolak di Safari. Buka Pengaturan iPhone > Privasi & Keamanan > Layanan Lokasi (ON), lalu di Safari ketuk "aA" > Pengaturan Situs Web > Lokasi > Izinkan.';
          } else if (os === 'android') {
            msg = 'Akses lokasi ditolak di Chrome. Pastikan GPS HP aktif, lalu ketuk ikon di kiri URL Chrome > Izin > Lokasi > Izinkan.';
          } else {
            msg = 'Akses lokasi ditolak. Klik ikon gembok di address bar browser, pilih Izinkan, lalu coba lagi.';
          }
        } else if (err.code === 2) {
          status = 'unavailable';
          msg = 'Informasi lokasi GPS tidak tersedia. Pastikan GPS / Wi-Fi di perangkat kamu aktif.';
        } else if (err.code === 3) {
          status = 'timeout';
          msg = 'Waktu permintaan lokasi habis. Coba klik "Gunakan lokasi saya" lagi atau pilih kota di bawah.';
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

  const setManualCoordinates = useCallback((lat: number, lng: number, _cityName?: string) => {
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
  }, []);

  useEffect(() => {
    if (location.status === 'idle') {
      if (isSecureEnvironment()) {
        requestLocation(false);
      } else {
        setLocation((prev) => ({
          ...prev,
          status: 'insecure_context',
          errorMessage: 'Browser HP mewajibkan koneksi HTTPS untuk mengaktifkan GPS. Pilih kota terdekat di bawah atau akses lewat HTTPS.'
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
