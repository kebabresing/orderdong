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
      title="Informasi Fee"
      subtitle="Biaya jasa berdasarkan total belanja"
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
    >
      <div className="mb-4 text-[12px] text-[#555555] leading-relaxed">
        <p>
          Semakin besar total pesanan kamu, semakin murah biaya jasa yang dikenakan:
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {FEE_TIERS.map((tier) => (
          <div
            key={tier.label}
            className={`rounded-[10px] border-2 p-2.5 text-center flex flex-col items-center gap-1.5 ${
              tier.highlight
                ? 'border-[#1659b7] bg-[#f4f9ff]'
                : 'border-[#ececec] bg-white'
            }`}
          >
            <div
              className={`w-9 h-9 rounded-full border flex items-center justify-center text-base ${
                tier.highlight
                  ? 'border-[#bcd3f0] bg-white'
                  : 'border-[#ececec] bg-[#f6f6f6]'
              }`}
            >
              {tier.icon}
            </div>

            <div className="text-[10px] font-extrabold text-[#1659b7] leading-tight">
              <div>DISKON 50%</div>
              <div className="text-[#1f1f1f]">{tier.minLabel}</div>
            </div>

            <p className="text-[9.5px] text-[#867e80] leading-tight">{tier.potongan}</p>

            <div className="w-full border-t border-dashed border-[#e5e5e5] my-0.5" />

            <p className="text-[9px] font-semibold text-[#867e80]">Biaya Jasa:</p>

            <div
              className={`w-full py-1.5 rounded-md text-center font-extrabold text-[13px] ${
                tier.highlight
                  ? 'bg-[#1659b7] text-white'
                  : 'bg-[#eff5fd] text-[#1659b7]'
              }`}
            >
              {tier.fee}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#fff9e6] text-[#784b08] text-[11px] p-3 rounded-lg border border-[#f2e2b6] mb-4 leading-relaxed">
        <strong>💡 Tips Hemat:</strong> Gabungkan pesanan bersama teman untuk mendapatkan fee terendah Rp3.000!
      </div>

      <button
        onClick={onClose}
        type="button"
        className="w-full h-11 rounded-[8px] bg-[#1659b7] hover:bg-[#124a9a] text-white text-[14px] font-extrabold transition cursor-pointer"
      >
        Tutup
      </button>
    </ModalWrapper>
  );
};
