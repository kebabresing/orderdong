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
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sheet / Modal Container (centered to 440px mobile column) */}
      <div
        className={`relative w-full max-w-[440px] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10 ${maxHeight}`}
      >
        {showHandle && (
          <div className="flex justify-center pt-3 pb-1 cursor-grab">
            <div className="w-10 h-1.5 bg-[#e5e5e5] rounded-full" />
          </div>
        )}

        {title && (
          <div className="flex items-center justify-between border-b border-[#ececec] px-5 py-3">
            <div className="flex items-center gap-2.5">
              {icon && (
                <div className="w-9 h-9 rounded-xl bg-[#eff5fd] text-[#1659b7] border border-[#bcd3f0] flex items-center justify-center font-bold text-base shrink-0">
                  {icon}
                </div>
              )}
              <div>
                <h2 className="font-extrabold text-[15px] text-[#1f1f1f]">{title}</h2>
                {subtitle && <p className="text-[11.5px] text-[#867e80]">{subtitle}</p>}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-[#f6f6f6] hover:bg-[#ececec] text-[#555555] flex items-center justify-center transition cursor-pointer"
              aria-label="Tutup"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}

        <div className="p-5 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};
