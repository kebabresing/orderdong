import React, { useState, useEffect } from 'react';
import { NavTab } from '../components/common/BottomNav';
import { HomePage } from '../pages/HomePage';
import { PilihOutletPage } from '../pages/PilihOutletPage';
import { KategoriPage } from '../pages/KategoriPage';
import { KeranjangPage } from '../pages/KeranjangPage';
import { LoyaltyPage } from '../pages/LoyaltyPage';
import { OrderPage } from '../pages/OrderPage';

import { MenuModal } from '../components/modals/MenuModal';
import { ContactModal } from '../components/modals/ContactModal';
import { BestSellerModal } from '../components/modals/BestSellerModal';
import { FaqModal } from '../components/modals/FaqModal';
import { AboutModal } from '../components/modals/AboutModal';
import { WifiModal } from '../components/modals/WifiModal';
import { FeeModal } from '../components/modals/FeeModal';

import { useOutlet } from '../hooks/useOutlet';
import { useCart } from '../hooks/useCart';

export const MainLayout: React.FC = () => {
  const { selectedOutlet, selectOutlet } = useOutlet();
  const {
    items,
    totalItems,
    subtotal,
    discount,
    fee,
    grandTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();

  const [activeTab, setActiveTab] = useState<NavTab | 'loyalty'>('home');

  // Modals state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBestSellersOpen, setIsBestSellersOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isFeeOpen, setIsFeeOpen] = useState(false);

  // Listen to hash changes for browser back/forward or deep links
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'pilih-outlet' || hash === 'lokasi') {
        setActiveTab('lokasi');
      } else if (hash === 'kategori') {
        setActiveTab('kategori');
      } else if (hash === 'keranjang') {
        setActiveTab('keranjang');
      } else if (hash === 'order') {
        setActiveTab('order');
      } else if (hash === 'loyalty') {
        setActiveTab('loyalty');
      } else {
        setActiveTab('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleSelectTab = (tab: NavTab | 'loyalty') => {
    setActiveTab(tab);
    window.location.hash = tab === 'home' ? '' : `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f6f6] text-[#1f1f1f] font-sans selection:bg-[#1659b7]/15 selection:text-[#1659b7]">
      {/* Centered Mobile-First App Column (Flappyyu Kopi Kenangan Shell) */}
      <div className="app-column flex flex-col">
        {activeTab === 'home' && (
          <HomePage
            currentOutlet={selectedOutlet}
            cartItems={items}
            totalItems={totalItems}
            subtotal={subtotal}
            grandTotal={grandTotal}
            onSwitchOutlet={() => handleSelectTab('lokasi')}
            onOpenMenu={() => setIsMenuOpen(true)}
            onOpenCart={() => handleSelectTab('keranjang')}
            onOpenOrder={() => handleSelectTab('order')}
            onAddToCart={addToCart}
            onOpenBestSellers={() => setIsBestSellersOpen(true)}
            onOpenFaq={() => setIsFaqOpen(true)}
            onOpenAbout={() => setIsAboutOpen(true)}
            onOpenWifi={() => setIsWifiOpen(true)}
            onOpenFee={() => setIsFeeOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}

        {activeTab === 'lokasi' && (
          <PilihOutletPage
            currentOutlet={selectedOutlet}
            onSelectOutlet={selectOutlet}
            onBackToHome={() => handleSelectTab('home')}
          />
        )}

        {activeTab === 'kategori' && (
          <KategoriPage
            onSelectCategory={() => handleSelectTab('home')}
            onAddToCart={addToCart}
          />
        )}

        {activeTab === 'keranjang' && (
          <KeranjangPage
            items={items}
            subtotal={subtotal}
            discount={discount}
            fee={fee}
            grandTotal={grandTotal}
            currentOutlet={selectedOutlet}
            onUpdateQuantity={updateQuantity}
            onRemoveItem={removeFromCart}
            onClearCart={clearCart}
            onContinueShopping={() => handleSelectTab('home')}
            onSwitchOutlet={() => handleSelectTab('lokasi')}
            onOpenFeeInfo={() => setIsFeeOpen(true)}
          />
        )}

        {activeTab === 'loyalty' && (
          <div>
            <header className="sticky top-0 z-30 bg-white border-b border-[#ececec] px-4 h-14 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleSelectTab('home')}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#1f1f1f] hover:bg-[#f6f6f6] transition cursor-pointer"
                aria-label="Kembali"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <h1 className="text-[16px] font-extrabold text-[#1f1f1f]">Loyalty Card</h1>
              <div className="w-9" />
            </header>
            <LoyaltyPage />
          </div>
        )}

        {activeTab === 'order' && (
          <div>
            <header className="sticky top-0 z-30 bg-white border-b border-[#ececec] px-4 h-14 flex items-center justify-between">
              <button
                type="button"
                onClick={() => handleSelectTab('home')}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#1f1f1f] hover:bg-[#f6f6f6] transition cursor-pointer"
                aria-label="Kembali"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <h1 className="text-[16px] font-extrabold text-[#1f1f1f]">Riwayat & Lacak Pesanan</h1>
              <div className="w-9" />
            </header>
            <OrderPage />
          </div>
        )}
      </div>

      {/* Global Modals */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenLoyalty={() => handleSelectTab('loyalty')}
        onOpenBestSellers={() => setIsBestSellersOpen(true)}
        onOpenFaq={() => setIsFaqOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        onOpenFee={() => setIsFeeOpen(true)}
        onOpenWifi={() => setIsWifiOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onSwitchOutlet={() => handleSelectTab('lokasi')}
        currentOutlet={selectedOutlet}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <BestSellerModal
        isOpen={isBestSellersOpen}
        onClose={() => setIsBestSellersOpen(false)}
        onSelectProduct={() => handleSelectTab('home')}
      />

      <FaqModal
        isOpen={isFaqOpen}
        onClose={() => setIsFaqOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      <WifiModal
        isOpen={isWifiOpen}
        onClose={() => setIsWifiOpen(false)}
      />

      <FeeModal
        isOpen={isFeeOpen}
        onClose={() => setIsFeeOpen(false)}
      />
    </div>
  );
};
