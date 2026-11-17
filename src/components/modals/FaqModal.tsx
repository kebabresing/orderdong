import React, { useState } from 'react';
import { ModalWrapper } from '../common/ModalWrapper';
import { FAQ_DATA } from '../../data/faq';

interface FaqModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FaqModal: React.FC<FaqModalProps> = ({ isOpen, onClose }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="FAQ (Pertanyaan Umum)"
      icon={<span className="text-lg">❓</span>}
    >
      <div className="space-y-3 text-xs text-[#5C4A3A] mb-5">
        {FAQ_DATA.map((faq, index) => {
          const isOpenState = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#FAF6F0] rounded-2xl border border-[#EADFC8] overflow-hidden transition-all duration-200"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full p-3.5 text-left flex items-center justify-between gap-2.5 font-bold text-sm text-[#1A1614] hover:bg-[#F3E9DB]/50 transition cursor-pointer"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-4 h-4 text-[#A08972] shrink-0 transition-transform duration-200 ${
                    isOpenState ? 'rotate-180 text-[#6B4423]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpenState && (
                <div
                  className="px-3.5 pb-3.5 text-xs text-[#5C4A3A] leading-relaxed border-t border-[#EADFC8]/50 pt-2.5"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          );
        })}
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

