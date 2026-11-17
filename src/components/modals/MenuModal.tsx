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
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Menu Utama Jasdor"
      subtitle="Layanan pesan kopi hemat favoritmu"
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      }
    >
      <div className="space-y-2 mb-4">
        {/* 1. Jasdor Loyalty Card */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenLoyalty();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-[13px] text-[#1A1614] block">Jasdor Loyalty Card</span>
              <span className="text-[11px] text-[#A08972] block line-clamp-1">Cek rank dari nomor WhatsApp</span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* 2. Best Seller */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenBestSellers();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-[13px] text-[#1A1614] block">Best Seller</span>
              <span className="text-[11px] text-[#A08972] block line-clamp-1">Top 5 · nilai setelah potongan voucher</span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* 3. FAQ */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenFaq();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-[13px] text-[#1A1614] block">FAQ (Pertanyaan Umum)</span>
              <span className="text-[11px] text-[#A08972] block line-clamp-1">Penjelasan seputar pesanan & diskon</span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* 4. Tentang Jasdor */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenAbout();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-[13px] text-[#1A1614] block">Tentang Jasdor</span>
              <span className="text-[11px] text-[#A08972] block line-clamp-1">Apa itu Jasdor & cara pemesanan</span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* 5. Informasi Fee Jasdor */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenFee();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-[13px] text-[#1A1614] block">Informasi Fee Jasdor</span>
              <span className="text-[11px] text-[#A08972] block line-clamp-1">Daftar biaya & penghematan</span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* 6. Password WiFi Hari Ini */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenWifi();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-[13px] text-[#1A1614] block">Password WiFi Hari Ini</span>
              <span className="text-[11px] text-[#A08972] block line-clamp-1">Jadwal password WiFi outlet 31 hari</span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* 7. Kontak Admin */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onOpenContact();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-[13px] text-[#1A1614] block">Kontak Admin</span>
              <span className="text-[11px] text-[#A08972] block line-clamp-1">WhatsApp admin & channel info</span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>

        {/* 8. Ganti Outlet Terdekat */}
        <button
          type="button"
          onClick={() => {
            onClose();
            onSwitchOutlet();
          }}
          className="w-full p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-2.5 text-left hover:bg-[#FAF6F0] transition group shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </span>
            <div className="min-w-0 pr-2">
              <span className="font-bold text-[13px] text-[#1A1614] block">Ganti Outlet Terdekat</span>
              <span className="text-[11px] text-[#A08972] block truncate">
                {currentOutlet ? currentOutlet.name : 'Pilih outlet terdekat'}
              </span>
            </div>
          </div>
          <svg className="w-3.5 h-3.5 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      </div>

      <button
        onClick={onClose}
        type="button"
        className="w-full py-3 rounded-xl bg-[#1A1614] text-white text-sm font-semibold hover:bg-[#2A221C] transition cursor-pointer"
      >
        Tutup Menu
      </button>
    </ModalWrapper>
  );
};

