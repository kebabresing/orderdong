import React, { useState, useEffect } from 'react';
import { Outlet } from '../../types';
import { copyToClipboard } from '../../utils/formatters';

interface OutletDetailModalProps {
  outlet: Outlet | null;
  userLat?: number | null;
  userLng?: number | null;
  isOpen: boolean;
  onClose: () => void;
  onSelect: (outlet: Outlet) => void;
}

export const OutletDetailModal: React.FC<OutletDetailModalProps> = ({
  outlet,
  userLat,
  userLng,
  isOpen,
  onClose,
  onSelect
}) => {
  const [copied, setCopied] = useState(false);
  const [detailData, setDetailData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && outlet) {
      setLoading(true);
      const params = new URLSearchParams();
      if (userLat && userLng) {
        params.set('lat', userLat.toString());
        params.set('lng', userLng.toString());
      }

      fetch(`/api/outlet-detail/${outlet.id}?${params.toString()}`)
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data && data.success && data.outlet) {
            setDetailData(data.outlet);
          } else {
            setDetailData(null);
          }
          setLoading(false);
        })
        .catch(() => {
          setDetailData(null);
          setLoading(false);
        });
    }
  }, [isOpen, outlet, userLat, userLng]);

  if (!isOpen || !outlet) return null;

  const currentOutletData = detailData || outlet;

  const handleCopy = async () => {
    const success = await copyToClipboard(currentOutletData.address || outlet.address);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const daysOfWeek = [
    { name: 'Senin', hours: currentOutletData.hours || outlet.hours },
    { name: 'Selasa', hours: currentOutletData.hours || outlet.hours },
    { name: 'Rabu', hours: currentOutletData.hours || outlet.hours },
    { name: 'Kamis', hours: currentOutletData.hours || outlet.hours },
    { name: 'Jumat', hours: currentOutletData.hours || outlet.hours },
    { name: 'Sabtu', hours: currentOutletData.hours || outlet.hours },
    { name: 'Minggu', hours: currentOutletData.hours || outlet.hours }
  ];

  const currentDayIndex = new Date().getDay();
  const todayDayName = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'][currentDayIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#FAF6F0] rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 max-h-[88vh] border border-[#EADFC8]">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1 cursor-grab sm:hidden">
          <div className="w-10 h-1.5 bg-[#EADFC8] rounded-full" />
        </div>

        {/* Header */}
        <div className="px-5 py-3 border-b border-[#EADFC8] flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#EADFC8] flex items-center justify-center text-[#6B4423] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-base text-[#1A1614] truncate">Detail Outlet</h3>
              <p className="text-[11px] font-mono text-[#A08972] tracking-wider">
                {currentOutletData.code || outlet.code || `KOPKEN-${outlet.id}`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#8A7A6A] hover:text-[#1A1614] flex items-center justify-center transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-3.5 flex-1 text-left text-sm">
          {/* Main info card */}
          <div className="bg-white p-4 rounded-2xl border border-[#EADFC8] shadow-xs flex items-start gap-3.5">
            <div className="w-16 h-16 rounded-xl bg-[#FAF6F0] border border-[#EADFC8] shrink-0 overflow-hidden flex items-center justify-center p-2">
              <img
                src={currentOutletData.image_url || 'https://jasdorkopi.id/images/outlet-default.png'}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap mb-1">
                <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  {currentOutletData.status_label || 'Buka'}
                </span>
                <span className="text-[10px] font-bold text-[#6B4423] bg-[#F3E9DB] px-2 py-0.5 rounded-full border border-[#EADFC8] inline-flex items-center gap-1">
                  <svg className="w-2.5 h-2.5 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    />
                  </svg>
                  <span>{currentOutletData.distance_text || outlet.distance}</span>
                </span>
                <span className="text-[10px] font-semibold text-[#8A7A6A] bg-[#FAF6F0] px-2 py-0.5 rounded-md border border-[#EADFC8]">
                  {currentOutletData.time_zone ? 'WIB' : 'WIB'}
                </span>
                {(currentOutletData.is_drive_thru || outlet.is_drive_thru) && (
                  <span className="text-[10px] font-semibold text-[#6B4423] bg-[#EADFC8] px-2 py-0.5 rounded-md">
                    Drive Thru
                  </span>
                )}
              </div>
              <h4 className="font-bold text-[#1A1614] text-sm leading-snug">{currentOutletData.name || outlet.name}</h4>
              <p className="text-xs text-[#6B4423] font-medium mt-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#6B4423]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  {currentOutletData.open_time && currentOutletData.close_time
                    ? `${currentOutletData.open_time} - ${currentOutletData.close_time} WIB`
                    : currentOutletData.hours || outlet.hours}
                </span>
              </p>
            </div>
          </div>

          {/* Address card with actions */}
          <div className="bg-white p-4 rounded-2xl border border-[#EADFC8] shadow-xs space-y-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#A08972] mb-1">
                Alamat Lengkap
              </p>
              <p className="text-xs text-[#5C4A3A] leading-relaxed select-all">
                {currentOutletData.address || outlet.address}
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t border-[#FAF6F0]">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 py-2 px-3 bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#6B4423] text-xs font-semibold rounded-xl border border-[#EADFC8] transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>

              <a
                href={
                  currentOutletData.maps_url ||
                  outlet.maps_url ||
                  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(outlet.name)}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2 px-3 bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#6B4423] text-xs font-semibold rounded-xl border border-[#EADFC8] transition flex items-center justify-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5 text-[#E11D48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Buka di Maps</span>
              </a>
            </div>
          </div>

          {/* Phone card */}
          {(currentOutletData.phone || outlet.phone) && (
            <div className="bg-white p-3.5 rounded-2xl border border-[#EADFC8] shadow-xs flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-[#FAF6F0] border border-[#EADFC8] flex items-center justify-center text-[#6B4423] shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#A08972]">Nomor Telepon</p>
                  <p className="text-xs font-bold text-[#1A1614] font-mono tracking-wide truncate">
                    {currentOutletData.phone || outlet.phone}
                  </p>
                </div>
              </div>

              <a
                href={`tel:${currentOutletData.phone || outlet.phone}`}
                className="px-3 py-1.5 bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#6B4423] text-xs font-semibold rounded-xl border border-[#EADFC8] transition flex items-center gap-1.5 shrink-0"
              >
                <span>Hubungi</span>
              </a>
            </div>
          )}

          {/* Operating hours schedule list */}
          <div className="bg-white p-4 rounded-2xl border border-[#EADFC8] shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#A08972]">Jadwal Buka &amp; Tutup</p>
              <span className="text-[10px] text-[#A08972]">Waktu setempat</span>
            </div>
            <div className="divide-y divide-[#FAF6F0] text-xs">
              {daysOfWeek.map((day) => {
                const isToday = day.name === todayDayName;
                return (
                  <div key={day.name} className={`flex items-center justify-between py-2 ${isToday ? 'font-bold text-[#6B4423]' : 'text-[#5C4A3A]'}`}>
                    <span className="flex items-center gap-1.5">
                      {day.name}
                      {isToday && (
                        <span className="text-[10px] bg-[#6B4423]/10 text-[#6B4423] font-bold px-1.5 py-0.2 rounded-full">
                          Hari ini
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-[11px]">{day.hours}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer: Select Outlet Button */}
        <div className="p-4 border-t border-[#EADFC8] bg-white">
          <button
            type="button"
            onClick={() => {
              onSelect(currentOutletData || outlet);
              onClose();
            }}
            className="w-full py-3 rounded-xl bg-[#1A1614] hover:bg-[#2A221C] text-white text-sm font-bold shadow-md transition active:scale-[0.98] cursor-pointer"
          >
            Pilih Outlet Ini
          </button>
        </div>
      </div>
    </div>
  );
};
