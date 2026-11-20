import React from 'react';
import { ModalWrapper } from '../common/ModalWrapper';

interface FeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FEE_TIERS = [
  {
    label: 'Tanpa Minimal',
    minLabel: 'TANPA MINIMAL',
    potongan: 'Potongan hingga Rp35.000',
    fee: 'Rp5.000',
    icon: '🛍️',
    highlight: false
  },
  {
    label: 'Min. Rp50.000',
    minLabel: 'MIN. Rp50.000',
    potongan: 'Potongan hingga Rp30.000',
    fee: 'Rp4.000',
    icon: '🛒',
    highlight: true
  },
  {
    label: 'Min. Rp70.000',
    minLabel: 'MIN. Rp70.000',
    potongan: 'Potongan hingga Rp30.000',
    fee: 'Rp3.000',
    icon: '🧺',
    highlight: false
  }
];

export const FeeModal: React.FC<FeeModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Informasi Fee Orderdong"
      subtitle="Biaya jasa berdasarkan total belanja"
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
    >
      <div className="mb-4 text-[12px] text-[#52525b] leading-relaxed">
        <p>
          Semakin besar total pesanan kamu di <strong>Orderdong</strong>, semakin murah biaya jasa yang dikenakan:
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {FEE_TIERS.map((tier) => (
          <div
            key={tier.label}
            className={`rounded-xl border-2 p-2.5 text-center flex flex-col items-center gap-1.5 ${
              tier.highlight
                ? 'border-[#ea580c] bg-[#fff7ed]'
                : 'border-[#ececef] bg-white'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-full border flex items-center justify-center text-base ${
                tier.highlight
                  ? 'border-[#fed7aa] bg-white'
                  : 'border-[#ececef] bg-[#f4f4f5]'
              }`}
            >
              {tier.icon}
            </div>

            <div className="text-[10px] font-extrabold text-[#ea580c] leading-tight">
              <div>DISKON 50%</div>
              <div className="text-[#18181b]">{tier.minLabel}</div>
            </div>

            <p className="text-[9.5px] text-[#71717a] leading-tight">{tier.potongan}</p>

            <div className="w-full border-t border-dashed border-[#e4e4e7] my-0.5" />

            <p className="text-[9px] font-semibold text-[#71717a]">Biaya Jasa:</p>

            <div
              className={`w-full py-1.5 rounded-lg text-center font-extrabold text-[13px] ${
                tier.highlight
                  ? 'bg-[#ea580c] text-white'
                  : 'bg-[#18181b] text-white'
              }`}
            >
              {tier.fee}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#fff7ed] text-[#9a3412] text-[11px] p-3 rounded-xl border border-[#fed7aa] mb-4 leading-relaxed">
        <strong>⚡ Tips Hemat Orderdong:</strong> Gabungkan pesanan bareng teman biar dapat fee termurah Rp3.000!
      </div>

      <button
        onClick={onClose}
        type="button"
        className="w-full h-11 rounded-xl bg-[#18181b] hover:bg-[#27272a] text-white text-[14px] font-extrabold transition cursor-pointer"
      >
        Tutup
      </button>
    </ModalWrapper>
  );
};
