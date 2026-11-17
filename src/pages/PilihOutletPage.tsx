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

export const PilihOutletPage: React.FC<PilihOutletPageProps> = ({
  currentOutlet,
  onSelectOutlet,
  onBackToHome
}) => {
  const { location, requestLocation } = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [detailModalOutlet, setDetailModalOutlet] = useState<Outlet | null>(null);
  const [selectedSuccessOutlet, setSelectedSuccessOutlet] = useState<Outlet | null>(null);
  const [liveOutlets, setLiveOutlets] = useState<Outlet[] | null>(null);
  const [isLoadingLive, setIsLoadingLive] = useState(false);

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
          if (res.ok) {
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

      {/* Location Active Bar (shown when location is granted) */}
      {location.status === 'granted' && (
        <div
          id="location-active-bar"
          className="mb-3 flex items-center justify-between bg-[#FAF6F0] border border-[#EADFC8] px-3.5 py-2.5 rounded-xl text-xs shadow-xs"
        >
          <div className="flex items-center gap-2 text-[#6B4423] font-medium truncate">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="truncate">
              {location.lat && location.lng
                ? `GPS Aktif (${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}) · Menampilkan outlet terdekat`
                : 'Lokasi aktif · Menampilkan outlet terdekat'}
            </span>
          </div>
          <button
            type="button"
            onClick={() => requestLocation(true)}
            className="text-[11px] font-bold text-[#6B4423] hover:text-[#1A1614] underline shrink-0 cursor-pointer ml-2"
          >
            Perbarui
          </button>
        </div>
      )}

      {/* Location Gate Card (shown when location is NOT yet granted or requesting) */}
      {location.status !== 'granted' && (
        <div
          id="location-gate-card"
          className="mb-4 bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] border-2 border-[#EADFC8] rounded-2xl p-5 text-center shadow-xs"
        >
          <div className="w-12 h-12 rounded-full bg-white border border-[#EADFC8] mx-auto flex items-center justify-center text-[#D97706] mb-3 shadow-xs">
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              style={{ animationDuration: '2s' }}
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
            {location.status === 'requesting' ? 'Mendeteksi Lokasi GPS...' : 'Izin Lokasi Diperlukan'}
          </h3>
          <p className="text-xs text-[#6B5A4B] mt-1 leading-relaxed max-w-sm mx-auto">
            {location.errorMessage ||
              'Izinkan akses lokasi di browsermu agar sistem dapat mengurutkan outlet terdekat beserta jarak akurat.'}
          </p>
          <div className="mt-3.5 flex justify-center gap-2">
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
              <span>{location.status === 'requesting' ? 'Sedang Memproses GPS...' : 'Izinkan Akses Lokasi'}</span>
            </button>
          </div>
        </div>
      )}

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
                  {/* Outlet thumbnail */}
                  <div className="w-14 h-14 rounded-xl bg-[#FAF6F0] shrink-0 overflow-hidden flex items-center justify-center p-2 border border-[#EADFC8]">
                    <img
                      src="https://jasdorkopi.id/images/outlet-default.png"
                      alt=""
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Outlet info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                          Buka
                        </span>
                        <span className="text-[10px] font-bold text-[#6B4423] bg-[#F3E9DB] px-1.5 py-0.5 rounded-md border border-[#EADFC8] inline-flex items-center gap-0.5">
                          <svg className="w-2.5 h-2.5 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              clipRule="evenodd"
                              fillRule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            />
                          </svg>
                          <span>{outlet.distance}</span>
                        </span>
                        {outlet.is_drive_thru && (
                          <span className="text-[9px] font-semibold text-[#6B4423] bg-[#EADFC8] px-1.5 py-0.5 rounded-md">
                            Drive Thru
                          </span>
                        )}
                      </div>

                      {/* Detail Modal Trigger Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setDetailModalOutlet(outlet);
                        }}
                        className="text-[11px] font-semibold text-[#6B4423] hover:text-[#1A1614] bg-[#FAF6F0] hover:bg-[#EADFC8] px-2 py-0.5 rounded-lg border border-[#EADFC8] transition shrink-0 cursor-pointer"
                      >
                        Detail
                      </button>
                    </div>

                    <h3 className="font-bold text-xs sm:text-sm text-[#1A1614] leading-snug line-clamp-1 group-hover:text-[#6B4423] transition-colors">
                      {outlet.name}
                    </h3>
                    <p className="text-[11px] text-[#A08972] line-clamp-1 mt-0.5">{outlet.address}</p>

                    <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-[#FAF6F0]">
                      <span className="text-[10px] text-[#8A7A6A] flex items-center gap-1 font-mono">
                        <svg className="w-3 h-3 text-[#A08972]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{outlet.hours}</span>
                      </span>

                      <span className="text-[11px] font-bold text-[#6B4423] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Pilih</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </label>
            );
          })
        )}
      </div>

      {/* Outlet Detail Modal */}
      <OutletDetailModal
        outlet={detailModalOutlet}
        userLat={location.lat}
        userLng={location.lng}
        isOpen={!!detailModalOutlet}
        onClose={() => setDetailModalOutlet(null)}
        onSelect={(o) => handleSelectOutlet(o)}
      />

      {/* Location Success Redirect Modal */}
      <LocationSuccessModal
        outlet={selectedSuccessOutlet}
        isOpen={!!selectedSuccessOutlet}
        onFinishRedirect={handleSuccessRedirectFinish}
      />
    </main>
  );
};
