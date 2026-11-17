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
    feeNum: 5000,
    icon: '🛍️',
    highlight: false
  },
  {
    label: 'Min. Rp50.000',
    minLabel: 'MIN. Rp50.000',
    potongan: 'Potongan hingga Rp30.000',
    fee: 'Rp4.000',
    feeNum: 4000,
    icon: '🛒',
    highlight: true
  },
  {
    label: 'Min. Rp70.000',
    minLabel: 'MIN. Rp70.000',
    potongan: 'Potongan hingga Rp30.000',
    fee: 'Rp3.000',
    feeNum: 3000,
    icon: '🧺',
    highlight: false
  }
];

export const FeeModal: React.FC<FeeModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Informasi Fee Jasdor"
      icon={
        <div className="w-9 h-9 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      }
    >
      <div className="mb-4 text-xs text-[#5C4A3A] leading-relaxed">
        <p>
          Jasdor mengenakan biaya operasional (fee) yang sangat terjangkau dibandingkan dengan besarnya diskon yang akan Anda dapatkan. Berikut rincian fee berdasarkan total belanja Anda:
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2.5 mb-5">
        {FEE_TIERS.map((tier) => (
          <div
            key={tier.label}
            className={`rounded-2xl border-2 p-3 shadow-xs text-center flex flex-col items-center gap-1.5 ${
              tier.highlight
                ? 'border-[#6B4423] bg-[#FAF6F0]'
                : 'border-[#EADFC8] bg-white'
            }`}
          >
            {/* Icon */}
            <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg ${
              tier.highlight ? 'border-[#6B4423] bg-white' : 'border-[#EADFC8] bg-[#FAF6F0]'
            }`}>
              {tier.icon}
            </div>

            {/* Diskon badge */}
            <div className="text-[10px] font-extrabold text-[#6B4423] leading-tight text-center">
              <div>DISKON 50%</div>
              <div className="font-bold text-[#1A1614]">{tier.minLabel}</div>
            </div>

            {/* Potongan */}
            <p className="text-[9.5px] text-[#A08972] leading-tight">{tier.potongan}</p>

            {/* Divider */}
            <div className="w-full border-t border-dashed border-[#EADFC8] my-0.5" />

            {/* Fee label */}
            <p className="text-[9.5px] font-semibold text-[#6B4423]">
              DISKON 50%<br />
              <span className="text-[8.5px] font-normal text-[#A08972]">Biaya Jasdor:</span>
            </p>

            {/* Fee amount */}
            <div className={`w-full py-1.5 rounded-xl text-center font-black text-sm ${
              tier.highlight
                ? 'bg-[#1A1614] text-white'
                : 'bg-[#EBE3D5] text-[#1A1614]'
            }`}>
              {tier.fee}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 text-blue-800 text-[11px] p-3 rounded-xl border border-blue-100 mb-4 leading-relaxed">
        <strong>💡 Tips Cuan:</strong> Semakin besar total pesanan Anda, biaya Jasdor yang dikenakan akan menjadi lebih murah!
      </div>

      <button
        onClick={onClose}
        type="button"
        className="w-full py-3 rounded-xl bg-[#1A1614] text-white text-sm font-semibold hover:bg-[#2A221C] transition cursor-pointer"
      >
        Tutup
      </button>
    </ModalWrapper>
  );
};
