import React from 'react';
import { ModalWrapper } from '../common/ModalWrapper';

interface FeeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

      <div className="space-y-3 mb-5">
        {/* Tier 1 */}
        <div className="bg-white rounded-2xl border-2 border-[#EADFC8] p-3 shadow-xs">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-bold text-[#1A1614] text-sm">Diskon 50% · Min. Rp70.000</h3>
              <p className="text-[11px] text-[#A08972]">Potongan hingga Rp30.000</p>
            </div>
            <div className="bg-[#FEF3C7] text-[#D97706] font-extrabold text-[11px] px-2 py-1 rounded-lg shrink-0">
              Diskon 50%
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[#EADFC8] border-dashed pt-2 mt-2">
            <span className="text-xs font-semibold text-[#6B4423]">Biaya Jasdor:</span>
            <span className="font-black text-sm text-[#1A1614]">Rp3.500</span>
          </div>
        </div>

        {/* Tier 2 */}
        <div className="bg-white rounded-2xl border-2 border-[#EADFC8] p-3 shadow-xs">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-bold text-[#1A1614] text-sm">Diskon 50% · Min. Rp50.000</h3>
              <p className="text-[11px] text-[#A08972]">Potongan hingga Rp30.000</p>
            </div>
            <div className="bg-[#FEF3C7] text-[#D97706] font-extrabold text-[11px] px-2 py-1 rounded-lg shrink-0">
              Diskon 50%
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[#EADFC8] border-dashed pt-2 mt-2">
            <span className="text-xs font-semibold text-[#6B4423]">Biaya Jasdor:</span>
            <span className="font-black text-sm text-[#1A1614]">Rp5.000</span>
          </div>
        </div>

        {/* Tier 3 */}
        <div className="bg-white rounded-2xl border-2 border-[#EADFC8] p-3 shadow-xs">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-bold text-[#1A1614] text-sm">Diskon 50% · Tanpa Minimal</h3>
              <p className="text-[11px] text-[#A08972]">Potongan hingga Rp35.000</p>
            </div>
            <div className="bg-[#FEF3C7] text-[#D97706] font-extrabold text-[11px] px-2 py-1 rounded-lg shrink-0">
              Diskon 50%
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-[#EADFC8] border-dashed pt-2 mt-2">
            <span className="text-xs font-semibold text-[#6B4423]">Biaya Jasdor:</span>
            <span className="font-black text-sm text-[#1A1614]">Rp6.000</span>
          </div>
        </div>
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

