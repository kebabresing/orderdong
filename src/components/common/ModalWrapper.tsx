import React, { useEffect } from 'react';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  icon?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  showHandle?: boolean;
  maxHeight?: string;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  onClose,
  title,
  icon,
  subtitle,
  children,
  showHandle = true,
  maxHeight = 'max-h-[85vh]'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sheet / Modal Container */}
      <div
        className={`relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 transition-transform duration-300 ease-out transform translate-y-0 ${maxHeight}`}
      >
        {/* Handle Bar for mobile drag gesture appearance */}
        {showHandle && (
          <div className="flex justify-center pt-3 pb-1 cursor-grab">
            <div className="w-10 h-1.5 bg-[#EADFC8] rounded-full" />
          </div>
        )}

        {/* Modal Header if title is provided */}
        {title && (
          <div className="flex items-center justify-between border-b border-[#EADFC8] px-5 py-3">
            <div className="flex items-center gap-2.5">
              {icon && (
                <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] text-[#6B4423] border border-[#EADFC8] flex items-center justify-center font-bold text-base shrink-0">
                  {icon}
                </div>
              )}
              <div>
                <h2 className="font-bold text-base text-[#1A1614]">{title}</h2>
                {subtitle && <p className="text-xs text-[#A08972]">{subtitle}</p>}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#5C4A3A] flex items-center justify-center transition cursor-pointer"
              aria-label="Tutup"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

