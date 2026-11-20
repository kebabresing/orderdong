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
  const [activeTab, setActiveTab] = useState<'ios' | 'android'>(() =>
    location.deviceOs === 'ios' ? 'ios' : 'android'
  );

  const [detailModalOutlet, setDetailModalOutlet] = useState<Outlet | null>(null);
  const [selectedSuccessOutlet, setSelectedSuccessOutlet] = useState<Outlet | null>(null);
  const [liveOutlets, setLiveOutlets] = useState<Outlet[] | null>(null);
  const [isLoadingLive, setIsLoadingLive] = useState(false);

  useEffect(() => {
    if (location.deviceOs === 'ios') setActiveTab('ios');
    else if (location.deviceOs === 'android') setActiveTab('android');
  }, [location.deviceOs]);

  useEffect(() => {
    let active = true;

    async function loadLiveOutlets() {
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

  const displayOutlets = useMemo(() => {
    if (liveOutlets && liveOutlets.length > 0) {
      return liveOutlets;
    }

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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#18181b] text-white px-4 h-14 flex items-center justify-between">
        <button
          type="button"
          onClick={onBackToHome}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition cursor-pointer"
          aria-label="Kembali"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="text-[16px] font-extrabold">Pilih Outlet</h1>
        <div className="w-9" />
      </header>

      {/* Search + Geolocation Controls */}
      <div className="px-4 pt-4 pb-3 border-b border-[#f0f0f2] bg-white space-y-3">
        <div className="relative flex items-center">
          <input
            id="search-outlet"
            name="search-outlet"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama atau alamat outlet"
            className="w-full h-11 pl-4 pr-12 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] text-[13px] font-semibold text-[#18181b] placeholder-[#a1a1aa] focus:outline-none focus:border-[#ea580c] focus:bg-white transition"
          />
          <button
            type="button"
            aria-label="Cari outlet"
            className="absolute right-1.5 w-8 h-8 rounded-full bg-[#ea580c] hover:bg-[#c2410c] text-white flex items-center justify-center shadow-xs transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Soft Orange Pill: Gunakan lokasi saya */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <button
            type="button"
            disabled={location.status === 'requesting'}
            onClick={() => {
              setSelectedCityName(null);
              requestLocation(true);
            }}
            className="h-9 px-4 rounded-full border border-[#fed7aa] bg-[#fff7ed] hover:bg-[#ffedd5] text-[#c2410c] text-[12px] font-extrabold inline-flex items-center gap-1.5 active:scale-95 transition cursor-pointer disabled:opacity-60"
          >
            <svg
              className={`w-4 h-4 ${location.status === 'requesting' ? 'animate-spin' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>
              {location.status === 'requesting'
                ? 'Mendeteksi lokasi...'
                : location.status === 'granted' && !selectedCityName
                ? 'Perbarui lokasi saya'
                : 'Gunakan lokasi saya'}
            </span>
          </button>

          {location.status === 'granted' && (
            <div className="flex items-center gap-2 text-[11px] font-bold text-[#18181b]">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {selectedCityName ? selectedCityName : 'GPS Aktif'}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSelectedCityName(null);
                  clearLocation();
                }}
                className="text-[#71717a] hover:text-[#dc2626] underline cursor-pointer"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        {(location.status === 'insecure_context' ||
          location.status === 'denied' ||
          location.status === 'timeout' ||
          location.status === 'unavailable') && (
          <div className="rounded-xl bg-[#fff7ed] border border-[#fed7aa] p-3 text-[11px] text-[#9a3412] space-y-1.5">
            <p className="font-extrabold">
              {location.status === 'insecure_context'
                ? '⚠️ GPS HP memerlukan koneksi HTTPS'
                : 'Izin lokasi belum aktif'}
            </p>
            <p className="leading-relaxed">
              {location.errorMessage ||
                'Aktifkan izin lokasi di browser atau pilih kota terdekat di bawah.'}
            </p>
            {location.status !== 'insecure_context' && (
              <button
                type="button"
                onClick={() => setShowTroubleshootGuide((v) => !v)}
                className="font-extrabold text-[#ea580c] underline cursor-pointer"
              >
                {showTroubleshootGuide ? 'Tutup panduan' : 'Cara aktifkan GPS di iOS / Android'}
              </button>
            )}

            {showTroubleshootGuide && (
              <div className="mt-2 bg-white rounded-lg border border-[#fed7aa] p-2.5 text-[#18181b]">
                <div className="flex gap-3 border-b border-[#f0f0f2] pb-1.5 mb-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('ios')}
                    className={`text-[11px] font-extrabold cursor-pointer ${
                      activeTab === 'ios' ? 'text-[#ea580c]' : 'text-[#71717a]'
                    }`}
                  >
                    iPhone (Safari)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('android')}
                    className={`text-[11px] font-extrabold cursor-pointer ${
                      activeTab === 'android' ? 'text-[#ea580c]' : 'text-[#71717a]'
                    }`}
                  >
                    Android (Chrome)
                  </button>
                </div>
                {activeTab === 'ios' ? (
                  <ol className="list-decimal pl-4 space-y-1 text-[11px] text-[#52525b]">
                    <li>Pengaturan iPhone &gt; Privasi &amp; Keamanan &gt; Layanan Lokasi (ON).</li>
                    <li>Di Safari, ketuk <strong>aA</strong> &gt; Pengaturan Situs Web &gt; Lokasi &gt; Izinkan.</li>
                  </ol>
                ) : (
                  <ol className="list-decimal pl-4 space-y-1 text-[11px] text-[#52525b]">
                    <li>Aktifkan toggle Lokasi/GPS di panel atas HP.</li>
                    <li>Di Chrome, ketuk ikon kiri URL &gt; Izin &gt; Lokasi &gt; Izinkan.</li>
                  </ol>
                )}
              </div>
            )}
          </div>
        )}

        {/* Quick City Chips */}
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 no-scrollbar">
          {POPULAR_CITIES.map((city) => {
            const isActive = selectedCityName === city.name;
            return (
              <button
                key={city.name}
                type="button"
                onClick={() => handleSelectCityPreset(city)}
                className={`text-[11px] px-3 py-1 rounded-full whitespace-nowrap font-bold transition cursor-pointer ${
                  isActive
                    ? 'bg-[#18181b] text-white'
                    : 'bg-[#f4f4f5] text-[#52525b] border border-[#e4e4e7] hover:border-[#fed7aa] hover:text-[#ea580c]'
                }`}
              >
                {city.name}
              </button>
            );
          })}
        </div>
      </div>

      {isLoadingLive && (
        <div className="px-4 py-2.5 flex items-center justify-center gap-2 text-[12px] font-bold text-[#ea580c] bg-[#fff7ed]/70">
          <span className="w-3.5 h-3.5 border-2 border-[#ea580c] border-t-transparent rounded-full animate-spin" />
          <span>Mencari outlet terdekat...</span>
        </div>
      )}

      {/* Outlet Cards List */}
      <main className="p-4 space-y-3.5 flex-1 bg-white pb-12">
        {displayOutlets.length === 0 ? (
          <div className="text-center py-14">
            <p className="font-extrabold text-[15px] text-[#18181b]">Outlet tidak ditemukan</p>
            <p className="text-[12px] text-[#71717a] mt-1">Coba gunakan kata kunci pencarian lain.</p>
          </div>
        ) : (
          displayOutlets.map((outlet) => {
            const isSelected = currentOutlet?.id === outlet.id;
            return (
              <div
                key={`${outlet.id}-${outlet.name}`}
                onClick={() => handleSelectOutlet(outlet)}
                className={`rounded-xl border p-4 shadow-[0_4px_16px_rgba(24,24,27,0.08)] transition cursor-pointer ${
                  isSelected
                    ? 'bg-[#fff7ed]/60 border-[#ea580c]'
                    : 'bg-white border-[#ececef] hover:bg-[#fff7ed]/30 hover:border-[#fed7aa]'
                }`}
              >
                <div className="flex gap-3.5 items-start">
                  <div className="w-[72px] h-[72px] rounded-xl bg-[#f4f4f5] border border-[#ececef] shrink-0 overflow-hidden flex items-center justify-center">
                    <img
                      src="https://jasdorkopi.id/images/outlet-default.png"
                      alt={outlet.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      {outlet.distance && (
                        <span className="text-[11px] font-extrabold text-[#ea580c] uppercase tracking-tight">
                          {outlet.distance}
                        </span>
                      )}
                      <span
                        className={`text-[10px] font-extrabold leading-none px-2 py-1 rounded uppercase ${
                          outlet.is_open
                            ? 'text-[#059669] bg-[#ecfdf5] ring-1 ring-[#a7f3d0]'
                            : 'text-[#dc2626] bg-[#fef2f2] ring-1 ring-[#fecaca]'
                        }`}
                      >
                        {outlet.is_open ? 'OPEN NOW' : 'CLOSED'}
                      </span>
                      {outlet.is_drive_thru && (
                        <span className="text-[10px] font-extrabold text-[#18181b] bg-[#f4f4f5] px-1.5 py-0.5 rounded">
                          DRIVE THRU
                        </span>
                      )}
                    </div>

                    <h2 className="text-[15px] font-extrabold text-[#18181b] leading-snug">
                      {outlet.name}
                    </h2>

                    <p className="text-[12px] text-[#71717a] line-clamp-3 leading-snug mt-1">
                      {outlet.address}
                    </p>

                    <div className="mt-2.5 pt-2 border-t border-[#f4f4f5] flex items-center justify-between text-[11px]">
                      <span className="text-[#a1a1aa] font-semibold">
                        {outlet.hours || '07:00 - 23:00 WIB'}
                      </span>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setDetailModalOutlet(outlet);
                          }}
                          className="font-bold text-[#ea580c] hover:underline cursor-pointer"
                        >
                          Detail
                        </button>
                        {outlet.maps_url && (
                          <a
                            href={outlet.maps_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-bold text-[#71717a] hover:text-[#18181b]"
                          >
                            Maps ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </main>

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

      {selectedSuccessOutlet && (
        <LocationSuccessModal
          isOpen={Boolean(selectedSuccessOutlet)}
          outlet={selectedSuccessOutlet}
          onFinishRedirect={handleSuccessRedirectFinish}
        />
      )}
    </div>
  );
};
