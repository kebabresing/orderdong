import { useState, useEffect } from 'react';

export interface LocationState {
  lat: number | null;
  lng: number | null;
  status: 'idle' | 'requesting' | 'granted' | 'denied' | 'unavailable' | 'timeout';
  errorMessage: string | null;
}

export function useLocation() {
  const [location, setLocation] = useState<LocationState>(() => {
    const storedLat = localStorage.getItem('jasdor_user_lat');
    const storedLng = localStorage.getItem('jasdor_user_lng');
    if (storedLat && storedLng) {
      return {
        lat: parseFloat(storedLat),
        lng: parseFloat(storedLng),
        status: 'granted',
        errorMessage: null
      };
    }
    return {
      lat: null,
      lng: null,
      status: 'idle',
      errorMessage: null
    };
  });

  const requestLocation = (forcePrompt = false) => {
    if (!navigator.geolocation) {
      setLocation((prev) => ({
        ...prev,
        status: 'unavailable',
        errorMessage: 'Browser kamu tidak mendukung deteksi lokasi GPS. Silakan cari outlet melalui kolom pencarian di bawah.'
      }));
      return;
    }

    setLocation((prev) => ({ ...prev, status: 'requesting', errorMessage: null }));

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude, accuracy } = position.coords;
        console.log(`[GPS] Detected latitude: ${latitude}, longitude: ${longitude}, accuracy: ${accuracy}m`);
        localStorage.setItem('jasdor_user_lat', latitude.toString());
        localStorage.setItem('jasdor_user_lng', longitude.toString());
        setLocation({
          lat: latitude,
          lng: longitude,
          status: 'granted',
          errorMessage: null
        });
      },
      (error) => {
        let msg = 'Izin lokasi diperlukan untuk mengurutkan outlet terdekat dari posisimu.';
        let status: LocationState['status'] = 'denied';

        if (error.code === error.PERMISSION_DENIED) {
          status = 'denied';
          msg = 'Akses lokasi ditolak. Silakan klik ikon gembok / izin lokasi pada address bar browser Anda, pilih "Izinkan", lalu klik Perbarui.';
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          status = 'unavailable';
          msg = 'Informasi lokasi GPS tidak tersedia saat ini. Pastikan GPS di perangkat Anda telah aktif.';
        } else if (error.code === error.TIMEOUT) {
          status = 'timeout';
          msg = 'Waktu permintaan lokasi habis. Silakan coba klik tombol Perbarui kembali.';
        }

        setLocation((prev) => ({
          ...prev,
          status,
          errorMessage: msg
        }));
      },
      {
        enableHighAccuracy: true, // Request real hardware GPS
        timeout: 10000,
        maximumAge: 0 // Do not use stale cache
      }
    );
  };

  // Auto request location on first mount if not granted yet
  useEffect(() => {
    if (location.status === 'idle') {
      requestLocation();
    }
  }, []);

  return {
    location,
    requestLocation
  };
}
