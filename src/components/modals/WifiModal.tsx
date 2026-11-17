import React, { useState } from 'react';
import { ModalWrapper } from '../common/ModalWrapper';
import { WIFI_PASSWORDS } from '../../data/wifi';
import { APP_CONFIG } from '../../data/config';
import { copyToClipboard } from '../../utils/formatters';

interface WifiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WifiModal: React.FC<WifiModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [copiedDay, setCopiedDay] = useState<number | null>(null);

  const today = new Date();
  const currentDayNumber = today.getDate();

  // Find password for today
  const todayWifi =
    WIFI_PASSWORDS.find((w) => w.day === currentDayNumber) ||
    WIFI_PASSWORDS[0] || { day: 1, password: 'NgopiSantuy#01' };

  const monthNames = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const dateStr = `${currentDayNumber} ${monthNames[today.getMonth()]} ${today.getFullYear()}`;

  const handleCopy = async (password: string, isHeader = true, day?: number) => {
    const success = await copyToClipboard(password);
    if (success) {
      if (isHeader) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else if (day) {
        setCopiedDay(day);
        setTimeout(() => setCopiedDay(null), 2000);
      }
    }
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="WiFi Teman Kenangan"
      subtitle={
        <span>
          Username: <strong className="text-[#1A1614]">{APP_CONFIG.defaultWifiUsername}</strong>
        </span>
      }
      icon={
        <svg className="w-5 h-5 text-[#D97706]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      }
    >
      {/* Password Hari Ini Card */}
      <div className="bg-[#FAF6F0] rounded-2xl p-4 border border-[#EADFC8] mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#A08972]">
            PASSWORD HARI INI ({dateStr})
          </span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
            Aktif
          </span>
        </div>

        <div className="flex items-center justify-between gap-3 mt-1.5">
          <span className="font-bold text-lg text-[#1A1614] tracking-wide font-mono">
            {todayWifi.password}
          </span>
          <button
            type="button"
            onClick={() => handleCopy(todayWifi.password, true)}
            className="px-3 py-1.5 rounded-xl bg-[#1A1614] text-white text-xs font-semibold hover:bg-[#2A221C] transition active:scale-95 flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Tersalin!</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                <span>Salin</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Jadwal Password 1 Bulan */}
      <h3 className="font-bold text-xs uppercase tracking-wider text-[#A08972] mb-2 px-1">
        Jadwal Password WiFi 1 Bulan
      </h3>
      <div className="space-y-2 text-xs max-h-[42vh] overflow-y-auto pr-1">
        {WIFI_PASSWORDS.map((item) => {
          const isToday = item.day === currentDayNumber;
          return (
            <div
              key={item.day}
              className={`flex items-center justify-between p-2.5 rounded-xl border transition ${
                isToday
                  ? 'bg-[#FAF6F0] border-[#6B4423] ring-1 ring-[#6B4423]/30 font-semibold'
                  : 'bg-white border-[#EADFC8] text-[#5C4A3A]'
              }`}
            >
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`w-6 h-6 rounded-full text-[11px] flex items-center justify-center font-bold ${
                    isToday ? 'bg-[#6B4423] text-white' : 'bg-[#FAF6F0] text-[#A08972]'
                  }`}
                >
                  {item.day < 10 ? `0${item.day}` : item.day}
                </span>
                <span className="flex items-center gap-1.5">
                  Tanggal {item.day < 10 ? `0${item.day}` : item.day}
                  {isToday && (
                    <span className="text-[10px] bg-[#6B4423]/10 text-[#6B4423] font-bold px-1.5 py-0.2 rounded-full">
                      Hari ini
                    </span>
                  )}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <code className="font-mono text-[11px] bg-[#FAF6F0] px-2 py-1 rounded text-[#1A1614] border border-[#EADFC8] text-right break-all">
                  {item.password}
                </code>
                <button
                  type="button"
                  onClick={() => handleCopy(item.password, false, item.day)}
                  className="p-1 text-[#A08972] hover:text-[#1A1614] transition cursor-pointer"
                  title="Salin password"
                >
                  {copiedDay === item.day ? (
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        onClick={onClose}
        type="button"
        className="w-full py-3 rounded-xl bg-[#1A1614] text-white text-sm font-semibold hover:bg-[#2A221C] transition mt-4 cursor-pointer"
      >
        Tutup
      </button>
    </ModalWrapper>
  );
};

