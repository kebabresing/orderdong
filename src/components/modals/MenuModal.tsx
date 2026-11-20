import React from 'react';
import { ModalWrapper } from '../common/ModalWrapper';
import { Outlet } from '../../types';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLoyalty: () => void;
  onOpenBestSellers: () => void;
  onOpenFaq: () => void;
  onOpenAbout: () => void;
  onOpenFee: () => void;
  onOpenWifi: () => void;
  onOpenContact: () => void;
  onSwitchOutlet: () => void;
  currentOutlet?: Outlet | null;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onOpenLoyalty,
  onOpenBestSellers,
  onOpenFaq,
  onOpenAbout,
  onOpenFee,
  onOpenWifi,
  onOpenContact,
  onSwitchOutlet,
  currentOutlet
}) => {
  const menuItems = [
    {
      title: 'Ganti Outlet Terdekat',
      subtitle: currentOutlet ? currentOutlet.name : 'Pilih outlet Kopi Kenangan',
      onClick: onSwitchOutlet,
      icon: (
        <path
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    },
    {
      title: 'Informasi Fee',
      subtitle: 'Tanpa minimal Rp5k · Min 50k Rp4k · Min 70k Rp3k',
      onClick: onOpenFee,
      icon: (
        <path
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    },
    {
      title: 'Password WiFi Hari Ini',
      subtitle: 'Username & jadwal password WiFi outlet',
      onClick: onOpenWifi,
      icon: (
        <path
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    },
    {
      title: 'Best Seller',
      subtitle: 'Top 5 menu paling sering dipesan',
      onClick: onOpenBestSellers,
      icon: (
        <path
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    },
    {
      title: 'Loyalty Card',
      subtitle: 'Cek rank dari nomor WhatsApp',
      onClick: onOpenLoyalty,
      icon: (
        <path
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    },
    {
      title: 'FAQ (Pertanyaan Umum)',
      subtitle: 'Penjelasan seputar pesanan & diskon',
      onClick: onOpenFaq,
      icon: (
        <path
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    },
    {
      title: 'Cara Pemesanan & Tentang',
      subtitle: 'Alur order, pembayaran & pickup',
      onClick: onOpenAbout,
      icon: (
        <path
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    },
    {
      title: 'Kontak Admin',
      subtitle: 'WhatsApp admin & channel info',
      onClick: onOpenContact,
      icon: (
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      )
    }
  ];

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Menu Kopi Kenangan"
      subtitle="Order hemat diskon 50%"
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
        </svg>
      }
    >
      <div className="space-y-2 mb-4">
        {menuItems.map((item) => (
          <button
            key={item.title}
            type="button"
            onClick={() => {
              onClose();
              item.onClick();
            }}
            className="w-full p-2.5 rounded-[10px] bg-white border border-[#ececec] flex items-center justify-between gap-2.5 text-left hover:bg-[#f8fbff] hover:border-[#b9d7ff] transition group cursor-pointer"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-8 h-8 rounded-lg bg-[#eff5fd] text-[#1659b7] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
              </span>
              <div className="min-w-0">
                <span className="font-extrabold text-[13px] text-[#1f1f1f] block truncate">
                  {item.title}
                </span>
                <span className="text-[11px] text-[#867e80] block truncate">
                  {item.subtitle}
                </span>
              </div>
            </div>
            <svg
              className="w-3.5 h-3.5 text-[#9b9b9b] group-hover:text-[#1659b7] group-hover:translate-x-0.5 transition shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" />
            </svg>
          </button>
        ))}
      </div>

      <button
        onClick={onClose}
        type="button"
        className="w-full h-11 rounded-[8px] bg-[#1659b7] hover:bg-[#124a9a] text-white text-[14px] font-extrabold transition cursor-pointer"
      >
        Tutup Menu
      </button>
    </ModalWrapper>
  );
};
