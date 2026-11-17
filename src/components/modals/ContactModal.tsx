import React from 'react';
import { ModalWrapper } from '../common/ModalWrapper';
import { APP_CONFIG } from '../../data/config';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Kontak Admin"
      subtitle="Pilih cara menghubungi kami"
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      }
    >
      <div className="space-y-3 mb-5">
        {/* WhatsApp Admin */}
        <a
          href={APP_CONFIG.adminWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-4 rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] flex items-center justify-between gap-3 text-left hover:bg-[#DCFCE7] transition group shadow-xs block"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-sm text-[#1A1614] block">WhatsApp Admin</span>
              <span className="text-xs text-[#16A34A] block">Chat langsung untuk bantuan pesanan</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-[#16A34A] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* WhatsApp Channel */}
        <a
          href={APP_CONFIG.whatsappChannelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full p-4 rounded-2xl bg-white border border-[#EADFC8] flex items-center justify-between gap-3 text-left hover:bg-[#FAF6F0] transition group shadow-xs block"
        >
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </span>
            <div>
              <span className="font-bold text-sm text-[#1A1614] block">Channel WhatsApp</span>
              <span className="text-xs text-[#A08972] block">Info promo & pengumuman terbaru</span>
            </div>
          </div>
          <svg className="w-4 h-4 text-[#A08972] group-hover:translate-x-0.5 transition-transform shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <button
        onClick={onClose}
        type="button"
        className="w-full py-3 rounded-xl bg-[#FAF6F0] text-[#5C4A3A] text-sm font-semibold hover:bg-[#EADFC8] transition cursor-pointer"
      >
        Tutup
      </button>
    </ModalWrapper>
  );
};

