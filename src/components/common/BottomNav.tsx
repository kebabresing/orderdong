import React from 'react';

export type NavTab = 'home' | 'kategori' | 'lokasi' | 'keranjang' | 'order';

interface BottomNavProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  cartCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onSelectTab,
  cartCount
}) => {
  return (
    <nav className="fixed bottom-0 inset-x-0 shop-nav z-40 pb-[env(safe-area-inset-bottom)] bg-white/95 backdrop-blur-md border-t border-[#EADFC8] shadow-[0_-4px_16px_rgba(26,22,20,0.04)]">
      <div className="shop-shell mx-auto bottom-nav grid grid-cols-5 items-center py-2 px-1 text-center select-none">
        {/* 1. Home */}
        <button
          type="button"
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center justify-center transition-colors cursor-pointer ${
            activeTab === 'home' ? 'text-[#6B4423]' : 'text-[#A08972] hover:text-[#5C4A3A]'
          }`}
        >
          <span className="relative">
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={activeTab === 'home' ? '2' : '1.5'}
              />
            </svg>
          </span>
          <span className={`mt-0.5 text-[11px] truncate w-full text-center ${activeTab === 'home' ? 'font-bold' : 'font-medium'}`}>
            Home
          </span>
        </button>

        {/* 2. Kategori */}
        <button
          type="button"
          onClick={() => onSelectTab('kategori')}
          className={`flex flex-col items-center justify-center transition-colors cursor-pointer ${
            activeTab === 'kategori' ? 'text-[#6B4423]' : 'text-[#A08972] hover:text-[#5C4A3A]'
          }`}
        >
          <span className="relative">
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={activeTab === 'kategori' ? '2' : '1.5'}
              />
            </svg>
          </span>
          <span className={`mt-0.5 text-[11px] truncate w-full text-center ${activeTab === 'kategori' ? 'font-bold' : 'font-medium'}`}>
            Kategori
          </span>
        </button>

        {/* 3. Lokasi (Floating Center Button) */}
        <div className="nav-floating-wrap flex flex-col items-center justify-center -mt-5">
          <button
            type="button"
            onClick={() => onSelectTab('lokasi')}
            className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 cursor-pointer border-2 ${
              activeTab === 'lokasi'
                ? 'bg-[#6B4423] text-white border-white ring-2 ring-[#6B4423]/30'
                : 'bg-[#1A1614] text-white border-white hover:bg-[#2A221C]'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
              <path
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              />
            </svg>
          </button>
          <span className={`mt-0.5 text-[10px] truncate w-full text-center ${activeTab === 'lokasi' ? 'font-bold text-[#6B4423]' : 'font-medium text-[#A08972]'}`}>
            Lokasi
          </span>
        </div>

        {/* 4. Keranjang */}
        <button
          type="button"
          onClick={() => onSelectTab('keranjang')}
          className={`flex flex-col items-center justify-center transition-colors cursor-pointer ${
            activeTab === 'keranjang' ? 'text-[#6B4423]' : 'text-[#A08972] hover:text-[#5C4A3A]'
          }`}
        >
          <span className="relative">
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={activeTab === 'keranjang' ? '2' : '1.5'}
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] min-w-4 h-4 px-1 rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </span>
          <span className={`mt-0.5 text-[11px] truncate w-full text-center ${activeTab === 'keranjang' ? 'font-bold' : 'font-medium'}`}>
            Keranjang
          </span>
        </button>

        {/* 5. Lacak */}
        <button
          type="button"
          onClick={() => onSelectTab('order')}
          className={`flex flex-col items-center justify-center transition-colors cursor-pointer ${
            activeTab === 'order' ? 'text-[#6B4423]' : 'text-[#A08972] hover:text-[#5C4A3A]'
          }`}
        >
          <span className="relative">
            <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={activeTab === 'order' ? '2' : '1.5'}
              />
            </svg>
          </span>
          <span className={`mt-0.5 text-[11px] truncate w-full text-center ${activeTab === 'order' ? 'font-bold' : 'font-medium'}`}>
            Lacak
          </span>
        </button>
      </div>
    </nav>
  );
};

