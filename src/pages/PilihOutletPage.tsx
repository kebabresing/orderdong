import React, { useState, useEffect, useMemo } from 'react';
import { Outlet } from '../types';
import { OUTLETS_DATA } from '../data/outlets';
import { useLocation } from '../hooks/useLocation';
import { calculateDistanceKm, formatDistance } from '../utils/geo';
import { OutletDetailModal } from '../components/modals/OutletDetailModal';
import { LocationSuccessModal } from '../components/modals/LocationSuccessModal';

interface PilihOutletPageProps {
  currentOutlet: Outlet | null;
  onSelectOutlet: (outlet: Outlet) => void;
  onBackToHome: () => void;
}

const POPULAR_CITIES = [
  { name: 'Jaksel', fullName: 'Jakarta Selatan', lat: -6.2615, lng: 106.8106 },
  { name: 'Jakpus', fullName: 'Jakarta Pusat', lat: -6.1754, lng: 106.8272 },
  { name: 'Jakbar', fullName: 'Jakarta Barat', lat: -6.1674, lng: 106.7637 },
  { name: 'Jakut', fullName: 'Jakarta Utara', lat: -6.1384, lng: 106.8640 },
  { name: 'Jaktim', fullName: 'Jakarta Timur', lat: -6.2250, lng: 106.9004 },
  { name: 'Tangerang', fullName: 'Kota Tangerang', lat: -6.1783, lng: 106.6319 },
  { name: 'Tangsel / BSD', fullName: 'Tangerang Selatan', lat: -6.3016, lng: 106.6528 },
  { name: 'Bekasi', fullName: 'Bekasi', lat: -6.2383, lng: 106.9756 },
  { name: 'Depok', fullName: 'Depok', lat: -6.4025, lng: 106.7942 },
  { name: 'Bogor', fullName: 'Bogor', lat: -6.5971, lng: 106.8060 },
  { name: 'Bandung', fullName: 'Bandung', lat: -6.9175, lng: 107.6191 },
  { name: 'Surabaya', fullName: 'Surabaya', lat: -7.2575, lng: 112.7521 },
  { name: 'Semarang', fullName: 'Semarang', lat: -6.9667, lng: 110.4167 },
  { name: 'Yogyakarta', fullName: 'Yogyakarta', lat: -7.7956, lng: 110.3695 },
  { name: 'Medan', fullName: 'Medan', lat: 3.5952, lng: 98.6722 },
  { name: 'Bali', fullName: 'Denpasar / Bali', lat: -8.6705, lng: 115.2126 },
  { name: 'Makassar', fullName: 'Makassar', lat: -5.1477, lng: 119.4327 }
];

export const PilihOutletPage: React.FC<PilihOutletPageProps> = ({
  currentOutlet,
  onSelectOutlet,
  onBackToHome
}) => {
  const { location, requestLocation, clearLocation, setManualCoordinates } = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCityName, setSelectedCityName] = useState<string | null>(null);
  const [showTroubleshootGuide, setShowTroubleshootGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<'ios' | 'android'>(() => {
    return location.deviceOs === 'ios' ? 'ios' : 'android';
  });

  const [detailModalOutlet, setDetailModalOutlet] = useState<Outlet | null>(null);
  const [selectedSuccessOutlet, setSelectedSuccessOutlet] = useState<Outlet | null>(null);
  const [liveOutlets, setLiveOutlets] = useState<Outlet[] | null>(null);
  const [isLoadingLive, setIsLoadingLive] = useState(false);

  // Sync tab with detected OS if changes
  useEffect(() => {
    if (location.deviceOs === 'ios') setActiveTab('ios');
    else if (location.deviceOs === 'android') setActiveTab('android');
  }, [location.deviceOs]);

  // Fetch real-time outlets when GPS coordinates change or search query changes
  useEffect(() => {
    let active = true;

    async function loadLiveOutlets() {
      // If we have GPS coordinates or search query, query our live API
      if ((location.lat && location.lng) || searchQuery.trim().length > 1) {
        setIsLoadingLive(true);
        try {
          const params = new URLSearchParams();
          if (location.lat && location.lng) {
            params.set('lat', location.lat.toString());
            params.set('lng', location.lng.toString());
          }
          if (searchQuery.trim()) {
            params.set('q', searchQuery.trim());
          }

          const res = await fetch(`/api/outlets?${params.toString()}`);
          const contentType = res.headers.get('content-type') || '';
          if (res.ok && contentType.includes('application/json')) {
            const data = await res.json();
            if (active && data.success && Array.isArray(data.outlets) && data.outlets.length > 0) {
              setLiveOutlets(data.outlets);
              setIsLoadingLive(false);
              return;
            }
          }
        } catch (err) {
          console.warn('[PilihOutlet] Live fetch fallback to local data:', err);
        }
        if (active) {
          setIsLoadingLive(false);
        }
      } else {
        setLiveOutlets(null);
      }
    }

    const debounceTimer = setTimeout(() => {
      loadLiveOutlets();
    }, 250);

    return () => {
      active = false;
      clearTimeout(debounceTimer);
    };
  }, [location.lat, location.lng, searchQuery]);

  // Outlets display list (either live GPS-sorted or computed offline distance)
  const displayOutlets = useMemo(() => {
    // 1. If live outlets from GPS / Search API are available, prioritize them
    if (liveOutlets && liveOutlets.length > 0) {
      return liveOutlets;
    }

    // 2. Otherwise calculate distance from 733 offline outlets
    let list = [...OUTLETS_DATA];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (o) =>
          o.name.toLowerCase().includes(q) ||
          o.address.toLowerCase().includes(q) ||
          (o.city_hint && o.city_hint.toLowerCase().includes(q))
      );
    }

    // If user GPS is available, calculate Haversine distance and sort
    if (location.lat && location.lng) {
      const userLat = location.lat;
      const userLng = location.lng;

      const withDist = list.map((o) => {
        if (o.lat_hint && o.lng_hint) {
          const distKm = calculateDistanceKm(userLat, userLng, o.lat_hint, o.lng_hint);
          return {
            ...o,
            calculatedDistKm: distKm,
            distance: formatDistance(distKm)
          };
        }
        return {
          ...o,
          calculatedDistKm: 999999
        };
      });

      withDist.sort((a, b) => (a.calculatedDistKm || 0) - (b.calculatedDistKm || 0));
      return withDist.slice(0, 40);
    }

    return list.slice(0, 40);
  }, [liveOutlets, searchQuery, location.lat, location.lng]);

  const handleSelectOutlet = (outlet: Outlet) => {
    setSelectedSuccessOutlet(outlet);
  };

  const handleSuccessRedirectFinish = () => {
    if (selectedSuccessOutlet) {
      onSelectOutlet(selectedSuccessOutlet);
      setSelectedSuccessOutlet(null);
      onBackToHome();
    }
  };

  const handleSelectCityPreset = (city: typeof POPULAR_CITIES[0]) => {
    setSelectedCityName(city.name);
    setManualCoordinates(city.lat, city.lng, city.fullName);
  };

  return (
    <main className="shop-shell mx-auto px-4 py-5 pb-28">
      {/* Header Info */}
      <div className="mb-4">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-xl font-bold text-[#1A1614]">Pilih Outlet</h1>
          {currentOutlet && (
            <button
              onClick={onBackToHome}
              className="text-xs text-[#6B4423] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <span>Kembali</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
        <p className="text-[#A08972] text-sm mt-0.5">
          Outlet diurutkan otomatis dari jarak terdekat dari lokasimu
        </p>
        <p className="text-[11px] text-[#A08972] mt-1">
          Hanya outlet yang sedang buka. Pesanan aplikasi ditutup 30 menit sebelum jam tutup outlet.
        </p>
      </div>

      {/* 1. Location Active Bar (shown when location is granted) */}
      {location.status === 'granted' && (
        <div
          id="location-active-bar"
          className="mb-3.5 bg-[#FAF6F0] border border-[#EADFC8] px-3.5 py-3 rounded-xl text-xs shadow-xs"
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#6B4423] font-medium truncate">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="truncate">
                {selectedCityName ? (
                  <span>📍 Lokasi Terpilih: <strong>{selectedCityName}</strong></span>
                ) : location.lat && location.lng ? (
                  <span>
                    GPS Aktif ({location.lat.toFixed(4)}, {location.lng.toFixed(4)})
                    {location.accuracy ? ` · ±${Math.round(location.accuracy)}m` : ''}
                  </span>
                ) : (
                  'Lokasi aktif · Menampilkan outlet terdekat'
                )}
              </span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSelectedCityName(null);
                  requestLocation(true);
                }}
                className="text-[11px] font-bold text-[#6B4423] hover:text-[#1A1614] underline cursor-pointer"
              >
                Perbarui GPS
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedCityName(null);
                  clearLocation();
                }}
                className="text-[11px] text-[#A08972] hover:text-[#1A1614] cursor-pointer"
                title="Hapus lokasi"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Insecure Context Notice (when accessed over HTTP on mobile) */}
      {location.status === 'insecure_context' && (
        <div className="mb-4 bg-amber-50 border border-amber-300 rounded-2xl p-4 text-xs text-[#78350F] shadow-xs">
          <div className="flex items-start gap-2.5">
            <span className="text-base shrink-0">⚠️</span>
            <div className="flex-1">
              <p className="font-bold text-xs text-[#92400E]">
                GPS Memerlukan Koneksi HTTPS di HP
              </p>
              <p className="mt-1 text-[11px] text-[#78350F] leading-relaxed">
                Browser HP (Safari iOS & Chrome Android) secara ketat menonaktifkan sensor GPS jika website dibuka melalui alamat HTTP lokal (misal <code className="bg-amber-100 px-1 py-0.5 rounded font-mono">http://192.168.x.x</code>).
              </p>
              <p className="mt-1.5 text-[11px] text-[#78350F]">
                👉 <strong>Solusi:</strong> Silakan pilih kota terdekat di bawah (1 klik), cari nama outlet di kolom pencarian, atau deploy ke Vercel agar berjalan di <strong>HTTPS</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 3. Location Gate Card (shown when location is NOT yet granted or requesting) */}
      {location.status !== 'granted' && location.status !== 'insecure_context' && (
        <div
          id="location-gate-card"
          className="mb-4 bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] border-2 border-[#EADFC8] rounded-2xl p-4 text-center shadow-xs"
        >
          <div className="w-12 h-12 rounded-full bg-white border border-[#EADFC8] mx-auto flex items-center justify-center text-[#D97706] mb-2.5 shadow-xs">
            <svg
              className={`w-6 h-6 ${location.status === 'requesting' ? 'animate-spin text-[#6B4423]' : 'animate-bounce'}`}
              fill="none"
              stroke="currentColor"
              style={{ animationDuration: location.status === 'requesting' ? '1s' : '2s' }}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3 className="font-extrabold text-sm text-[#1A1614]">
            {location.status === 'requesting'
              ? 'Mendeteksi Lokasi GPS...'
              : location.status === 'denied'
              ? 'Izin Lokasi Belum Aktif'
              : location.status === 'timeout'
              ? 'Sinyal GPS Lemah (Timeout)'
              : 'Aktifkan GPS untuk Outlet Terdekat'}
          </h3>
          <p className="text-xs text-[#6B5A4B] mt-1 leading-relaxed max-w-sm mx-auto">
            {location.errorMessage ||
              'Izinkan akses lokasi di browsermu agar sistem dapat mengurutkan outlet terdekat beserta jarak akurat.'}
          </p>

          <div className="mt-3.5 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              disabled={location.status === 'requesting'}
              onClick={() => requestLocation(true)}
              className="bg-[#1A1614] hover:bg-[#2A221C] text-white font-bold text-xs py-2.5 px-5 rounded-xl transition active:scale-95 flex items-center gap-1.5 shadow-sm cursor-pointer disabled:opacity-50"
            >
              <svg className="w-3.5 h-3.5 text-[#F59E0B]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              <span>{location.status === 'requesting' ? 'Memproses GPS...' : 'Izinkan Akses Lokasi'}</span>
            </button>

            {(location.status === 'denied' || location.status === 'timeout' || location.status === 'unavailable') && (
              <button
                type="button"
                onClick={() => setShowTroubleshootGuide((prev) => !prev)}
                className="bg-white border border-[#EADFC8] text-[#6B4423] hover:text-[#1A1614] font-semibold text-xs py-2.5 px-3.5 rounded-xl transition cursor-pointer"
              >
                {showTroubleshootGuide ? 'Tutup Panduan' : '💡 Cara Aktifkan di HP'}
              </button>
            )}
          </div>

          {/* Troubleshoot Guide for iOS & Android */}
          {showTroubleshootGuide && (
            <div className="mt-4 text-left bg-white border border-[#EADFC8] rounded-xl p-3.5 text-xs animate-fadeIn">
              <div className="flex border-b border-[#EADFC8] mb-2.5">
                <button
                  type="button"
                  onClick={() => setActiveTab('ios')}
                  className={`pb-1.5 px-3 font-bold text-xs cursor-pointer border-b-2 transition ${
                    activeTab === 'ios'
                      ? 'border-[#6B4423] text-[#6B4423]'
                      : 'border-transparent text-[#A08972] hover:text-[#1A1614]'
                  }`}
                >
                  🍎 iPhone (Safari)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('android')}
                  className={`pb-1.5 px-3 font-bold text-xs cursor-pointer border-b-2 transition ${
                    activeTab === 'android'
                      ? 'border-[#6B4423] text-[#6B4423]'
                      : 'border-transparent text-[#A08972] hover:text-[#1A1614]'
                  }`}
                >
                  🤖 Android (Chrome)
                </button>
              </div>

              {activeTab === 'ios' ? (
                <ol className="list-decimal pl-4 space-y-1.5 text-[11px] text-[#6B5A4B] leading-relaxed">
                  <li>
                    Buka <strong>Pengaturan iPhone</strong> &gt; <strong>Privasi & Keamanan</strong> &gt; <strong>Layanan Lokasi</strong> (pastikan aktif / ON).
                  </li>
                  <li>
                    Scroll ke bawah di halaman yang sama &gt; pilih <strong>Situs Web Safari</strong> &gt; pilih <strong>Saat Menggunakan App</strong>.
                  </li>
                  <li>
                    Kembali ke Safari: Ketuk tombol <strong>aA</strong> di kiri address bar &gt; <strong>Pengaturan Situs Web</strong> &gt; <strong>Lokasi</strong> &gt; pilih <strong>Tanya</strong> atau <strong>Izinkan</strong>.
                  </li>
                  <li>
                    Pastikan web dibuka melalui protokol <strong>HTTPS</strong>.
                  </li>
                </ol>
              ) : (
                <ol className="list-decimal pl-4 space-y-1.5 text-[11px] text-[#6B5A4B] leading-relaxed">
                  <li>
                    Tarik panel notifikasi atas HP &gt; pastikan ikon <strong>Lokasi / GPS</strong> menyala.
                  </li>
                  <li>
                    Di Chrome: Ketuk ikon <strong>Izin / Gembok</strong> di sebelah kiri kolom URL &gt; <strong>Izin Situs</strong> &gt; <strong>Lokasi</strong> &gt; pilih <strong>Izinkan</strong>.
                  </li>
                  <li>
                    Jika opsi lokasi redup/mati, buka Pengaturan HP &gt; Aplikasi &gt; Chrome &gt; Izin &gt; Lokasi &gt; Izinkan saat aplikasi digunakan.
                  </li>
                  <li>
                    Pastikan web dibuka melalui protokol <strong>HTTPS</strong>.
                  </li>
                </ol>
              )}
            </div>
          )}
        </div>
      )}

      {/* Quick City Presets (1-tap selection for instant sorting) */}
      <div className="mb-3.5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-bold text-[#A08972] uppercase tracking-wider flex items-center gap-1">
            <svg className="w-3 h-3 text-[#6B4423]" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            Pilih Kota Terdekat (1 Klik):
          </span>
          {selectedCityName && (
            <button
              onClick={() => {
                setSelectedCityName(null);
                clearLocation();
              }}
              className="text-[10px] text-[#6B4423] hover:underline cursor-pointer"
            >
              Hapus Filter
            </button>
          )}
        </div>
        <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none no-scrollbar">
          {POPULAR_CITIES.map((city) => {
            const isSelected = selectedCityName === city.name;
            return (
              <button
                key={city.name}
                type="button"
                onClick={() => handleSelectCityPreset(city)}
                className={`text-[11px] px-2.5 py-1 rounded-full whitespace-nowrap transition cursor-pointer font-medium ${
                  isSelected
                    ? 'bg-[#6B4423] text-white shadow-xs'
                    : 'bg-white border border-[#EADFC8] text-[#6B4423] hover:bg-[#FAF6F0]'
                }`}
              >
                {city.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Outlet Search Bar */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama outlet, kota, atau jalan..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EADFC8] rounded-xl text-xs text-[#1A1614] placeholder-[#A08972] focus:outline-none focus:border-[#6B4423] focus:ring-2 focus:ring-[#6B4423]/20 shadow-xs transition"
          />
          <svg
            className="w-4 h-4 text-[#A08972] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A08972] hover:text-[#1A1614] p-1 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Loading indicator during live fetch */}
      {isLoadingLive && (
        <div className="text-center py-2 mb-2 flex items-center justify-center gap-2 text-xs text-[#6B4423]">
          <span className="w-3.5 h-3.5 border-2 border-[#6B4423] border-t-transparent rounded-full animate-spin" />
          <span>Menyelaraskan outlet terdekat dengan GPS...</span>
        </div>
      )}

      {/* Outlets List */}
      <div className="space-y-3" id="outlet-list">
        {displayOutlets.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#EADFC8] p-6">
            <p className="font-semibold text-sm text-[#1A1614]">Outlet tidak ditemukan</p>
            <p className="text-xs text-[#A08972] mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
          </div>
        ) : (
          displayOutlets.map((outlet) => {
            const isSelected = currentOutlet?.id === outlet.id;
            return (
              <label
                key={`${outlet.id}-${outlet.name}`}
                className="outlet-item block cursor-pointer group"
                onClick={() => handleSelectOutlet(outlet)}
              >
                <div
                  className={`bg-white rounded-2xl border-2 p-3.5 flex gap-3 transition shadow-xs hover:border-[#6B4423]/60 ${
                    isSelected
                      ? 'border-[#6B4423] bg-[#FAF6F0]/40 ring-1 ring-[#6B4423]/20'
                      : 'border-[#EADFC8]'
                  }`}
                >
                  {/* Radio selector icon */}
                  <div className="pt-0.5 shrink-0">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                        isSelected ? 'border-[#6B4423] bg-[#6B4423]' : 'border-[#D1C2A5] bg-white'
                      }`}
                    >
                      {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                  </div>

                  {/* Outlet Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-sm font-bold text-[#1A1614] leading-snug">
                          {outlet.name}
                        </span>
                        {outlet.is_drive_thru && (
                          <span className="text-[10px] bg-[#EBE3D5] text-[#6B4423] font-semibold px-1.5 py-0.5 rounded">
                            Drive Thru
                          </span>
                        )}
                      </div>
                      {outlet.distance && (
                        <span className="text-[11px] font-bold text-[#6B4423] shrink-0 bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#EADFC8]">
                          {outlet.distance}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-[#6B5A4B] mt-1 line-clamp-2 leading-relaxed">
                      {outlet.address}
                    </p>

                    <div className="mt-2.5 flex items-center gap-2 text-[11px] text-[#A08972] flex-wrap">
                      <span className="inline-flex items-center gap-1">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            outlet.is_open ? 'bg-emerald-500' : 'bg-red-400'
                          }`}
                        />
                        <span className={outlet.is_open ? 'text-emerald-700 font-medium' : 'text-red-500'}>
                          {outlet.is_open ? 'Buka' : 'Tutup'}
                        </span>
                      </span>
                      <span>·</span>
                      <span>{outlet.hours || '07:00 - 23:00 WIB'}</span>
                    </div>

                    {/* Action buttons on card */}
                    <div className="mt-3 pt-2.5 border-t border-[#F2ECE1] flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDetailModalOutlet(outlet);
                        }}
                        className="text-[#6B4423] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Detail & Alamat</span>
                      </button>

                      <div className="flex items-center gap-2">
                        {outlet.maps_url && (
                          <a
                            href={outlet.maps_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#A08972] hover:text-[#6B4423] flex items-center gap-1 cursor-pointer"
                            title="Buka di Google Maps"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                            <span>Maps</span>
                          </a>
                        )}
                        <span className="text-xs font-bold text-[#6B4423] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                          <span>Pilih</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            );
          })
        )}
      </div>

      {/* Outlet Detail Modal */}
      {detailModalOutlet && (
        <OutletDetailModal
          isOpen={Boolean(detailModalOutlet)}
          outlet={detailModalOutlet}
          userLat={location.lat}
          userLng={location.lng}
          onClose={() => setDetailModalOutlet(null)}
          onSelect={(outlet: Outlet) => {
            setDetailModalOutlet(null);
            handleSelectOutlet(outlet);
          }}
        />
      )}

      {/* Location Success Redirecting Modal */}
      {selectedSuccessOutlet && (
        <LocationSuccessModal
          isOpen={Boolean(selectedSuccessOutlet)}
          outlet={selectedSuccessOutlet}
          onFinishRedirect={handleSuccessRedirectFinish}
        />
      )}
    </main>
  );
};
