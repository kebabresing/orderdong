import React, { useState, useMemo } from 'react';
import { Outlet, Product, CartItem } from '../types';
import { CATEGORIES_DATA, PRODUCTS_DATA } from '../data/products';
import { formatRupiah } from '../utils/formatters';
import { ProductModal } from '../components/modals/ProductModal';

interface HomePageProps {
  currentOutlet: Outlet | null;
  onSwitchOutlet: () => void;
  onAddToCart: (item: CartItem) => void;
  onOpenBestSellers: () => void;
  onOpenFaq: () => void;
  onOpenAbout: () => void;
  onOpenWifi: () => void;
  onOpenFee: () => void;
  onOpenContact: () => void;
  selectedCategoryFromNav?: string | null;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentOutlet,
  onSwitchOutlet,
  onAddToCart,
  onOpenBestSellers,
  onOpenFaq,
  onOpenAbout,
  onOpenWifi,
  onOpenFee,
  onOpenContact,
  selectedCategoryFromNav
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS_DATA;
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category_id === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category_name.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  // Group filtered products by category for section layout
  const groupedProducts = useMemo(() => {
    if (searchQuery.trim() || activeCategory !== 'all') {
      return null; // flat list when searching or filtering single category
    }
    return CATEGORIES_DATA.map((cat) => ({
      ...cat,
      items: PRODUCTS_DATA.filter((p) => p.category_id === cat.id)
    }));
  }, [activeCategory, searchQuery]);

  const handleScrollToCategory = (catId: string) => {
    setActiveCategory(catId);
    if (catId !== 'all') {
      const el = document.getElementById(`cat-${catId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <main className="shop-shell mx-auto px-4 py-4 pb-28">
      {/* 1. Hero Promo Banner */}
      <section className="hero-banner relative mb-4 rounded-2xl overflow-hidden shadow-sm border border-[#EADFC8]">
        <div className="hero-banner-inner overflow-hidden relative">
          <img
            src="https://jasdorkopi.id/storage/banners/01KZ55ZWA0KX8Y20BP8SNWCS14.png"
            alt="Promo Jasdor Kopi"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </section>

      {/* 2. Outlet Selected Card / Switcher */}
      {currentOutlet && (
        <section className="mb-4 bg-white rounded-2xl border-2 border-[#EADFC8] p-3.5 shadow-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#EADFC8] flex items-center justify-center text-[#6B4423] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-[10px] font-bold text-[#6B4423] uppercase tracking-wider bg-[#F3E9DB] px-1.5 py-0.2 rounded">
                  Outlet Terpilih
                </span>
                <span className="text-[10px] text-[#A08972] font-semibold">{currentOutlet.distance}</span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[#1A1614] leading-tight truncate">
                {currentOutlet.name}
              </h3>
              <p className="text-[11px] text-[#A08972] truncate mt-0.5">{currentOutlet.address}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onSwitchOutlet}
            className="px-3 py-1.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#6B4423] text-xs font-bold border border-[#EADFC8] transition shrink-0 active:scale-95 cursor-pointer"
          >
            Ganti
          </button>
        </section>
      )}

      {/* 3. Quick Action Buttons Row (Best Seller, FAQ, Wifi, Info Fee) */}
      <section className="grid grid-cols-4 gap-2 mb-4">
        <button
          type="button"
          onClick={onOpenBestSellers}
          className="p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex flex-col items-center justify-center text-center hover:bg-[#FAF6F0] transition shadow-xs cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <span className="font-bold text-[11px] text-[#1A1614] leading-tight">Best Seller</span>
        </button>

        <button
          type="button"
          onClick={onOpenFee}
          className="p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex flex-col items-center justify-center text-center hover:bg-[#FAF6F0] transition shadow-xs cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-[11px] text-[#1A1614] leading-tight">Info Fee</span>
        </button>

        <button
          type="button"
          onClick={onOpenWifi}
          className="p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex flex-col items-center justify-center text-center hover:bg-[#FAF6F0] transition shadow-xs cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
          </div>
          <span className="font-bold text-[11px] text-[#1A1614] leading-tight">WiFi</span>
        </button>

        <button
          type="button"
          onClick={onOpenFaq}
          className="p-2.5 rounded-2xl bg-white border border-[#EADFC8] flex flex-col items-center justify-center text-center hover:bg-[#FAF6F0] transition shadow-xs cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-[#E0E7FF] text-[#4F46E5] flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="font-bold text-[11px] text-[#1A1614] leading-tight">FAQ</span>
        </button>
      </section>

      {/* 4. Live Search Menu Bar */}
      <section className="mb-4">
        <div className="relative">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari menu kopi, minuman, roti..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#EADFC8] rounded-xl text-xs text-[#1A1614] placeholder-[#A08972] focus:outline-none focus:border-[#6B4423] focus:ring-2 focus:ring-[#6B4423]/20 shadow-xs transition"
          />
          <svg
            className="w-4 h-4 text-[#A08972] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A08972] hover:text-[#1A1614] p-1 cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>
      </section>

      {/* 5. Category Horizontal Pills Scroller */}
      {!searchQuery && (
        <section className="mb-4 -mx-4 px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 w-max pb-1">
            <button
              type="button"
              onClick={() => handleScrollToCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                activeCategory === 'all'
                  ? 'bg-[#1A1614] text-white shadow-sm'
                  : 'bg-white text-[#5C4A3A] border border-[#EADFC8] hover:bg-[#FAF6F0]'
              }`}
            >
              Semua Menu
            </button>

            {CATEGORIES_DATA.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleScrollToCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap shadow-xs ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1614] text-white shadow-sm'
                    : 'bg-white text-[#5C4A3A] border border-[#EADFC8] hover:bg-[#FAF6F0]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 6. Products Grid or Grouped Sections */}
      {groupedProducts ? (
        <div className="space-y-6">
          {groupedProducts.map((group) => (
            <section key={group.id} id={`cat-${group.id}`} className="menu-category-block">
              <div className="flex items-center justify-between mb-3 border-b border-[#EADFC8]/60 pb-2">
                <h2 className="font-extrabold text-sm sm:text-base text-[#1A1614] uppercase tracking-wide">
                  {group.name}
                </h2>
                <span className="text-xs text-[#A08972] font-semibold">
                  {group.items.length} Menu
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.items.map((product) => (
                  <article
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className="product-card bg-white rounded-2xl border border-[#EADFC8] p-2.5 flex flex-col justify-between hover:border-[#6B4423]/50 transition-all shadow-xs cursor-pointer group"
                  >
                    <div>
                      {/* Product image */}
                      <div className="w-full aspect-square rounded-xl bg-[#FAF6F0] mb-2 overflow-hidden flex items-center justify-center p-2 border border-[#FAF6F0]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      {/* Product Info */}
                      <h3 className="font-bold text-xs sm:text-sm text-[#1A1614] leading-snug line-clamp-2 group-hover:text-[#6B4423] transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-[10px] text-[#A08972] line-clamp-2 leading-tight mt-1">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & Add button */}
                    <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#FAF6F0]">
                      <span className="font-bold text-xs sm:text-sm text-[#1A1614]">
                        {formatRupiah(product.price)}
                      </span>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="w-7 h-7 rounded-lg bg-[#FAF6F0] group-hover:bg-[#1A1614] group-hover:text-white text-[#6B4423] border border-[#EADFC8] flex items-center justify-center transition active:scale-90 cursor-pointer"
                        title="Tambah ke keranjang"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        /* Filtered Search / Flat list */
        <div>
          <div className="flex items-center justify-between mb-3 border-b border-[#EADFC8]/60 pb-2">
            <h2 className="font-extrabold text-sm text-[#1A1614]">
              {searchQuery ? `Hasil Pencarian "${searchQuery}"` : 'Daftar Menu'}
            </h2>
            <span className="text-xs text-[#A08972] font-semibold">
              {filteredProducts.length} Menu
            </span>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#EADFC8] p-6">
              <p className="font-semibold text-sm text-[#1A1614]">Menu tidak ditemukan</p>
              <p className="text-xs text-[#A08972] mt-1">Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="product-card bg-white rounded-2xl border border-[#EADFC8] p-2.5 flex flex-col justify-between hover:border-[#6B4423]/50 transition-all shadow-xs cursor-pointer group"
                >
                  <div>
                    <div className="w-full aspect-square rounded-xl bg-[#FAF6F0] mb-2 overflow-hidden flex items-center justify-center p-2 border border-[#FAF6F0]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#1A1614] leading-snug line-clamp-2 group-hover:text-[#6B4423] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[10px] text-[#A08972] line-clamp-2 leading-tight mt-1">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-[#FAF6F0]">
                    <span className="font-bold text-xs sm:text-sm text-[#1A1614]">
                      {formatRupiah(product.price)}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="w-7 h-7 rounded-lg bg-[#FAF6F0] group-hover:bg-[#1A1614] group-hover:text-white text-[#6B4423] border border-[#EADFC8] flex items-center justify-center transition active:scale-90 cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Product Customize Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </main>
  );
};

