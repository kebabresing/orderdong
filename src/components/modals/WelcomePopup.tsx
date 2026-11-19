import React, { useState, useEffect } from 'react';
import { APP_CONFIG } from '../../data/config';

interface WelcomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DISMISS_KEY = 'jasdor_welcome_dismiss_until';

export const WelcomePopup: React.FC<WelcomePopupProps> = ({ isOpen, onClose }) => {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Dynamic greetings and quotes per day
  const DAILY_CONFIG: Record<number, { dayEn: string; dayId: string; quote: string }> = {
    0: { dayEn: 'Sunday', dayId: 'Minggu', quote: 'Minggu santai, recharge energi dan kopi masih jadi pilihan paling aman. ☕️✨' },
    1: { dayEn: 'Monday', dayId: 'Senin', quote: 'Senin lagi, hidup masih jalan dan kopi masih jadi pilihan yang aman. 💪☕️' },
    2: { dayEn: 'Tuesday', dayId: 'Selasa', quote: 'Selasa lagi, hidup masih jalan dan kopi masih jadi pilihan yang aman. 😭☕️' },
    3: { dayEn: 'Wednesday', dayId: 'Rabu', quote: 'Rabu lagi, setengah jalan menuju weekend dan kopi siap nemenin. ⚡️☕️' },
    4: { dayEn: 'Thursday', dayId: 'Kamis', quote: 'Kamis lagi, hidup masih jalan dan kopi masih jadi pilihan yang aman. 😭☕️' },
    5: { dayEn: 'Friday', dayId: 'Jumat', quote: 'Jumat lagi, selangkah menuju weekend dan kopi siap nemenin santai. 🎉☕️' },
    6: { dayEn: 'Saturday', dayId: 'Sabtu', quote: 'Sabtu seru! Waktunya me-time atau nongkrong santai sambil ngopi. 🛋️☕️' },
  };

  const today = new Date();
  const dayIndex = today.getDay();
  const currentDay = DAILY_CONFIG[dayIndex] || DAILY_CONFIG[4];

  const handleClose = () => {
    if (dontShowAgain) {
      // 12 hours from now
      const expiry = Date.now() + 12 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_KEY, expiry.toString());
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="bg-white w-full max-w-sm overflow-hidden shadow-2xl relative transform transition-all duration-300 z-10 rounded-[24px] max-h-[90vh] flex flex-col">
        {/* Animated Banner Header */}
        <div className="welcome-popup-header relative pt-6 pb-5 px-6 flex flex-col items-center overflow-hidden">
          <div aria-hidden="true" className="welcome-popup-header-bg" />
          <div aria-hidden="true" className="welcome-popup-shine" />
          <div aria-hidden="true" className="welcome-popup-orb welcome-popup-orb-1" />
          <div aria-hidden="true" className="welcome-popup-orb welcome-popup-orb-2" />
          <div aria-hidden="true" className="welcome-popup-orb welcome-popup-orb-3" />
          <div className="welcome-popup-icon relative z-10 w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
            <svg
              aria-hidden="true"
              className="w-7 h-7 text-[#6B4423]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5 overflow-y-auto">
          <h3 className="text-[17px] font-extrabold text-[#1A1614] text-center leading-snug mb-4">
            ☀️ Happy {currentDay.dayEn}!
          </h3>
          <div className="welcome-popup-content text-[13px] text-[#5C4A3A] leading-[1.65] text-center space-y-2">
            <p>{currentDay.quote}</p>
            <p>
              Jasdor <strong>OPEN</strong> hari ini 🤎
              <br />
              <strong>KopKen diskon 50% tanpa minimal belanja</strong> masih tersedia.
            </p>
            <p>
              Udah, nggak usah banyak mikir. <strong>Pilih menu → checkout → beres.</strong> 🫡
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#F3E9DB] flex items-center justify-center">
            <label
              htmlFor="welcome-dismiss-12h"
              className="inline-flex items-center gap-2 cursor-pointer text-xs text-[#7A6A5A] hover:text-[#3C2A1E] transition-colors select-none py-1.5 px-2.5 rounded-lg hover:bg-[#FAF6F0]"
            >
              <input
                id="welcome-dismiss-12h"
                type="checkbox"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
                className="w-4 h-4 rounded border-[#D4C2A8] text-[#5C4A3A] focus:ring-[#5C4A3A] cursor-pointer accent-[#5C4A3A]"
              />
              <span className="font-medium tracking-tight">Jangan tampilkan lagi selama 12 jam</span>
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-2.5">
            <a
              href={APP_CONFIG.whatsappChannelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#5C4A3A] hover:bg-[#4a3b2e] text-white font-bold text-sm py-3 px-4 leading-snug transition-colors active:scale-[0.98] text-center rounded-xl cursor-pointer block"
            >
              Join Saluran WhatsApp!
            </a>
            <button
              type="button"
              onClick={handleClose}
              className="w-full bg-[#FAF6F0] hover:bg-[#F3E9DB] text-[#5C4A3A] font-semibold text-sm py-3 px-4 transition-colors border border-[#EADFC8] active:scale-[0.98] rounded-xl cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

