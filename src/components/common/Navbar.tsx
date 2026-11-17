import React from 'react';
import { Outlet } from '../../types';

interface NavbarProps {
  onOpenMenu: () => void;
  selectedOutlet?: Outlet | null;
  onSwitchOutlet?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  selectedOutlet,
  onSwitchOutlet
}) => {
  return (
    <header className="sticky top-0 z-40 shop-header bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#EADFC8]/60 transition-colors">
      <div className="shop-shell mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = '#home'; }} className="flex items-center gap-2 min-w-0">
            <img
              src="https://jasdorkopi.id/storage/branding/01KYXYXERCTDM25S54PYRT9FWH.png"
              alt="Jasdorkopi.id"
              className="h-9 sm:h-10 w-auto object-contain max-w-[180px]"
            />
          </a>

          <div className="flex items-center gap-2 shrink-0">
            {selectedOutlet && (
              <button
                onClick={onSwitchOutlet}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#EADFC8] text-xs text-[#5C4A3A] hover:border-[#6B4423] transition-all max-w-[200px]"
                title="Ganti Outlet"
              >
                <svg className="w-3.5 h-3.5 text-[#6B4423] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate font-medium">{selectedOutlet.name}</span>
              </button>
            )}

            <button
              type="button"
              aria-label="Buka Menu Utama"
              title="Menu Utama"
              onClick={onOpenMenu}
              className="w-9 h-9 rounded-xl bg-[#F3E9DB] text-[#1A1614] hover:bg-[#EADFC8] active:scale-95 flex items-center justify-center transition border border-[#EADFC8] shadow-sm cursor-pointer"
            >
              <svg className="w-5 h-5 text-[#1A1614]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

