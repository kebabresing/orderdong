import React from 'react';
import { ModalWrapper } from '../common/ModalWrapper';
import { BEST_SELLERS_DATA } from '../../data/bestsellers';
import { Product } from '../../types';

interface BestSellerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct?: (productName: string) => void;
}

export const BestSellerModal: React.FC<BestSellerModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct
}) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Best Seller"
      subtitle="Top 5 menu terlaris · nilai setelah potongan voucher"
      icon={
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      }
    >
      <div className="space-y-2">
        {BEST_SELLERS_DATA.map((item) => {
          let cardClass = 'bs-rank-card flex items-center gap-2.5 p-2.5 rounded-2xl border';
          let ringClass = '';
          let badgeClass = 'bs-rank-badge bs-rank-badge--default shrink-0';

          if (item.rank === 1) {
            cardClass = 'bs-rank-card bs-rank-card--1 flex items-center gap-2.5 p-2.5 rounded-2xl border';
            ringClass = 'ring-2 ring-[#D4A574]/70';
            badgeClass = 'bs-rank-badge bs-rank-badge--1 shrink-0';
          } else if (item.rank === 2) {
            cardClass = 'bs-rank-card bs-rank-card--2 flex items-center gap-2.5 p-2.5 rounded-2xl border';
            ringClass = 'ring-2 ring-[#B8A99A]/60';
            badgeClass = 'bs-rank-badge bs-rank-badge--2 shrink-0';
          } else if (item.rank === 3) {
            cardClass = 'bs-rank-card bs-rank-card--3 flex items-center gap-2.5 p-2.5 rounded-2xl border';
            ringClass = 'ring-2 ring-[#C4A882]/55';
            badgeClass = 'bs-rank-badge bs-rank-badge--3 shrink-0';
          }

          return (
            <article
              key={item.rank}
              onClick={() => {
                if (onSelectProduct) {
                  onSelectProduct(item.name);
                  onClose();
                }
              }}
              className={`${cardClass} hover:border-[#6B4423]/40 transition-all cursor-pointer`}
            >
              <div className="relative shrink-0">
                <div className={`w-11 h-11 rounded-lg overflow-hidden bg-white border border-[#EADFC8] ${ringClass}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <h3 className="font-bold text-[12px] text-[#1A1614] leading-snug line-clamp-2">
                    {item.name}
                  </h3>
                  <span className={badgeClass}>{item.badge}</span>
                </div>
                <p className="text-[10px] text-[#5C4A3A]">
                  <span className="text-[#A08972] mr-1">Transaksi</span>
                  <strong className="text-[#1A1614]">{item.pcs}</strong>
                </p>
                <p className="text-[11px] font-extrabold text-[#6B4423]">{item.total}</p>
              </div>
            </article>
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

