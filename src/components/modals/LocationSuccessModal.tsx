import React, { useEffect, useState } from 'react';
import { Outlet } from '../../types';

interface LocationSuccessModalProps {
  outlet: Outlet | null;
  isOpen: boolean;
  onFinishRedirect: () => void;
}

export const LocationSuccessModal: React.FC<LocationSuccessModalProps> = ({
  outlet,
  isOpen,
  onFinishRedirect
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isOpen && outlet) {
      setProgress(0);
      const startTime = Date.now();
      const duration = 1200; // 1.2s smooth animation

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const currentProgress = Math.min(100, (elapsed / duration) * 100);
        setProgress(currentProgress);

        if (elapsed >= duration) {
          clearInterval(interval);
          setTimeout(() => {
            onFinishRedirect();
          }, 150);
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [isOpen, outlet, onFinishRedirect]);

  if (!isOpen || !outlet) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300" />

      {/* Modal Sheet */}
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 text-center shadow-2xl relative z-10 border border-[#EADFC8] animate-in fade-in zoom-in-95 duration-200">
        <div className="relative w-24 h-24 mx-auto flex items-center justify-center mb-5 mt-2">
          {/* Radar Waves */}
          <span
            className="absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-20 animate-ping"
            style={{ animationDuration: '2s' }}
          />
          <span
            className="absolute inline-flex h-[135%] w-[135%] rounded-full bg-[#F59E0B] opacity-10 animate-ping"
            style={{ animationDuration: '2s', animationDelay: '0.5s' }}
          />

          {/* Center Circle with Glow */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#2a221c] to-[#1A1614] text-[#F59E0B] flex items-center justify-center shadow-[0_8px_24px_rgba(245,158,11,0.35)] relative z-10 border-2 border-[#3d322a]">
            {/* Bouncing Location Pin Icon */}
            <svg
              className="w-7 h-7 relative z-10 animate-bounce text-[#F59E0B]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ animationDuration: '1.5s' }}
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
        </div>

        <div>
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-extrabold text-[#D97706] bg-[#FEF3C7] px-3 py-1 rounded-full border border-[#FDE68A] shadow-xs">
            <svg className="w-3.5 h-3.5 shrink-0 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            <span>Outlet Berhasil Dipilih</span>
          </span>

          <h3 className="font-extrabold text-lg text-[#1A1614] mt-3">
            Outlet Terdekat Dipilih!
          </h3>
        </div>

        <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EADFC8] text-left space-y-1 shadow-xs my-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-bold text-sm text-[#1A1614] truncate">{outlet.name}</span>
            <span className="text-xs font-bold text-[#6B4423] bg-[#F3E9DB] px-2.5 py-0.5 rounded-full shrink-0 border border-[#EADFC8]">
              {outlet.distance}
            </span>
          </div>
          <p className="text-xs text-[#5C4A3A] line-clamp-2 leading-relaxed">{outlet.address}</p>
        </div>

        <div className="pt-1">
          <div className="w-full bg-[#EADFC8] h-1.5 rounded-full overflow-hidden mb-2">
            <div
              className="bg-[#6B4423] h-full transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[11px] text-[#A08972] font-medium animate-pulse">
            Mengarahkan ke halaman beranda...
          </p>
        </div>
      </div>
    </div>
  );
};

