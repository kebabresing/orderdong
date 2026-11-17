import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/common/Navbar';
import { BottomNav, NavTab } from '../components/common/BottomNav';
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
import { WelcomePopup } from '../components/modals/WelcomePopup';

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

  // Navigation state: starts at 'home', or can be 'lokasi' (pilih-outlet), 'kategori', 'keranjang', 'loyalty', 'order'
  const [activeTab, setActiveTab] = useState<NavTab | 'loyalty'>('home');

  // Modals state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBestSellersOpen, setIsBestSellersOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isWifiOpen, setIsWifiOpen] = useState(false);
  const [isFeeOpen, setIsFeeOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(false);

  // Check welcome popup on mount
  useEffect(() => {
    const dismissUntil = localStorage.getItem('jasdor_welcome_dismiss_until');
    if (dismissUntil) {
      const expiry = parseInt(dismissUntil, 10);
      if (Date.now() < expiry) {
        return; // still silenced
      }
    }
    // Show welcome popup after 1s
    const timer = setTimeout(() => {
      setIsWelcomeOpen(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab === 'home' ? '' : `#${tab}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1A1614] font-sans flex flex-col justify-between selection:bg-[#6B4423]/15 selection:text-[#6B4423]">
      <div>
        {/* Top Sticky Navbar */}
        <Navbar
          onOpenMenu={() => setIsMenuOpen(true)}
          selectedOutlet={selectedOutlet}
          onSwitchOutlet={() => handleSelectTab('lokasi')}
        />

        {/* Dynamic Page Views */}
        {activeTab === 'home' && (
          <HomePage
            currentOutlet={selectedOutlet}
            onSwitchOutlet={() => handleSelectTab('lokasi')}
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
            onSelectCategory={(catId) => {
              handleSelectTab('home');
            }}
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

        {activeTab === 'loyalty' && <LoyaltyPage />}

        {activeTab === 'order' && <OrderPage />}
      </div>

      {/* Bottom Navigation */}
      <BottomNav
        activeTab={activeTab === 'loyalty' ? 'home' : activeTab}
        onSelectTab={handleSelectTab}
        cartCount={totalItems}
      />

      {/* Global Modals */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenLoyalty={() => {
          setActiveTab('loyalty');
          window.location.hash = '#loyalty';
        }}
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
        onSelectProduct={(name) => {
          handleSelectTab('home');
        }}
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

      <WelcomePopup
        isOpen={isWelcomeOpen}
        onClose={() => setIsWelcomeOpen(false)}
      />
    </div>
  );
};

