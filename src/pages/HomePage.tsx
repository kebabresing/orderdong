import React, { useState, useMemo } from 'react';
import { Outlet, Product, CartItem } from '../types';
import { CATEGORIES_DATA, PRODUCTS_DATA } from '../data/products';
import { formatRupiah } from '../utils/formatters';
import { ProductModal } from '../components/modals/ProductModal';

interface HomePageProps {
  currentOutlet: Outlet | null;
  cartItems: CartItem[];
  totalItems: number;
  subtotal: number;
  grandTotal: number;
  onSwitchOutlet: () => void;
  onOpenMenu: () => void;
  onOpenCart: () => void;
  onOpenOrder: () => void;
  onAddToCart: (item: CartItem) => void;
  onOpenBestSellers: () => void;
  onOpenFaq: () => void;
  onOpenAbout: () => void;
  onOpenWifi: () => void;
  onOpenFee: () => void;
  onOpenContact: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  currentOutlet,
  cartItems,
  totalItems,
  subtotal,
  grandTotal,
  onSwitchOutlet,
  onOpenMenu,
  onOpenCart,
  onOpenOrder,
  onAddToCart,
  onOpenFee,
  onOpenWifi
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Map productId -> quantity in cart for crimson "1 x" badge on product cards
  const cartQtyByProduct = useMemo(() => {
    const map: Record<string, number> = {};
    cartItems.forEach((item) => {
      map[item.productId] = (map[item.productId] || 0) + item.quantity;
    });
    return map;
  }, [cartItems]);

  // Filter products by search or selected category
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

  // Group products by category for default scrollable view
  const groupedProducts = useMemo(() => {
    if (searchQuery.trim() || activeCategory !== 'all') {
      return null;
    }
    return CATEGORIES_DATA.map((cat) => ({
      ...cat,
      items: PRODUCTS_DATA.filter((p) => p.category_id === cat.id)
    })).filter((g) => g.items.length > 0);
  }, [activeCategory, searchQuery]);

  const handleCategoryClick = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 500);
  };

  const renderProductCard = (product: Product) => {
    const qtyInCart = cartQtyByProduct[product.id] || 0;
    const hasCustomOptions = Boolean(
      (product.options && product.options.length > 0) ||
      (product.addons && product.addons.length > 0)
    );
    const discountedPrice = Math.round(product.price * 0.5);

    return (
      <article
        key={product.id}
        onClick={() => setSelectedProduct(product)}
        className="flex flex-col cursor-pointer group select-none"
      >
        {/* Clean Borderless Floating Image Area */}
        <div className="relative w-full aspect-square flex items-center justify-center mb-2 overflow-hidden rounded-xl bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="w-[88%] h-[88%] object-contain group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Top-left Crimson Badges ("1 x" & "Custom") */}
          {(qtyInCart > 0 || hasCustomOptions) && (
            <div className="absolute top-1.5 left-1.5 flex flex-col items-start gap-1">
              {qtyInCart > 0 && (
                <span className="bg-[#bf1926] text-white rounded px-2 py-1 text-[11px] font-extrabold leading-none shadow-xs">
                  {qtyInCart} x
                </span>
              )}
              {qtyInCart > 0 && hasCustomOptions && (
                <span className="bg-[#bf1926] text-white rounded px-2 py-1 text-[11px] font-extrabold leading-none shadow-xs">
                  Custom
                </span>
              )}
            </div>
          )}
        </div>

        {/* Product Title */}
        <h3 className="text-[14px] font-extrabold leading-tight text-[#1f1f1f] line-clamp-2 mb-1.5 group-hover:text-[#1659b7] transition-colors">
          {product.name}
        </h3>

        {/* Price Row: Royal Blue Discounted Pill + Muted Strikethrough Original Price */}
        <div className="flex items-center flex-wrap gap-1.5 mt-auto">
          <span className="inline-flex items-center bg-[#1659b7] text-white rounded px-1.5 py-0.5 text-[12px] font-extrabold leading-none">
            {formatRupiah(discountedPrice)}
          </span>
          <span className="text-[11px] font-bold text-[#9b9b9b] line-through leading-none">
            {formatRupiah(product.price)}
          </span>
        </div>
      </article>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Top Header (Flappyyu Kopi Kenangan Style) */}
      <header className="sticky top-0 z-40 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
        {/* Row 1: Floating Circular Buttons + Floating Outlet Pill */}
        <div className="px-3.5 pt-3 pb-2.5 flex items-center gap-2.5">
          {/* Left: Circular Menu Button */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Menu Utama"
            title="Menu Utama"
            className="w-10 h-10 rounded-full bg-white text-[#1f1f1f] shadow-[0_3px_10px_rgba(0,0,0,0.14)] flex items-center justify-center shrink-0 hover:bg-[#f6f6f6] active:scale-95 transition cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Center: Floating White Outlet Card */}
          <button
            type="button"
            onClick={onSwitchOutlet}
            className="flex-1 min-w-0 rounded-[10px] border border-[#eeeeee] bg-white px-3 py-2 shadow-[0_3px_10px_rgba(0,0,0,0.14)] flex items-center justify-between gap-2 text-left hover:border-[#bcd3f0] active:scale-[0.99] transition cursor-pointer"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-extrabold text-[#1f1f1f] truncate leading-tight">
                {currentOutlet ? currentOutlet.name : 'Pilih Outlet Terdekat'}
              </p>
              <p className="text-[11px] font-medium text-[#867e80] truncate leading-tight mt-0.5">
                {currentOutlet ? currentOutlet.address : 'Ketuk untuk memilih outlet Kopi Kenangan'}
              </p>
            </div>
            <span className="w-6 h-6 rounded-full border border-[#c39155] text-[#bf1926] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {/* Right: Circular Refresh & History/Order Buttons */}
          <button
            type="button"
            onClick={handleRefresh}
            aria-label="Refresh Menu"
            title="Refresh Menu"
            className="w-10 h-10 rounded-full bg-white text-[#1f1f1f] shadow-[0_3px_10px_rgba(0,0,0,0.14)] flex items-center justify-center shrink-0 hover:bg-[#f6f6f6] active:scale-95 transition cursor-pointer"
          >
            <svg
              className={`w-[18px] h-[18px] ${isRefreshing ? 'animate-spin text-[#1659b7]' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={onOpenOrder}
            aria-label="Riwayat Pesanan"
            title="Riwayat & Lacak Pesanan"
            className="w-10 h-10 rounded-full bg-white text-[#1f1f1f] shadow-[0_3px_10px_rgba(0,0,0,0.14)] flex items-center justify-center shrink-0 hover:bg-[#f6f6f6] active:scale-95 transition cursor-pointer"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.1"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>

        {/* Row 2: Horizontally Scrollable Category Underline Tabs (Caramel Gold Active Indicator) */}
        <div className="border-b border-[#ececec] px-3.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-5 w-max">
            <button
              type="button"
              onClick={() => handleCategoryClick('all')}
              className={`relative h-10 flex items-center text-[13px] font-extrabold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'all' ? 'text-[#c39155]' : 'text-[#202020] hover:text-[#c39155]'
              }`}
            >
              Semua
              {activeCategory === 'all' && (
                <span className="absolute bottom-0 inset-x-0 h-[3px] rounded-full bg-[#c39155]" />
              )}
            </button>

            {CATEGORIES_DATA.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`relative h-10 flex items-center text-[13px] font-extrabold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive ? 'text-[#c39155]' : 'text-[#202020] hover:text-[#c39155]'
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[3px] rounded-full bg-[#c39155]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 3: Search Input */}
        <div className="px-3.5 py-2.5 bg-white">
          <div className="relative">
            <svg
              className="w-4 h-4 text-[#9a9a9a] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk"
              className="w-full pl-10 pr-8 py-2.5 bg-[#f7f7f7] border border-[#e8e8e8] rounded-lg text-[13px] font-semibold text-[#1f1f1f] placeholder-[#9a9a9a] focus:outline-none focus:border-[#1659b7] focus:bg-white transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#9a9a9a] hover:text-[#1f1f1f] p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Subtle Quick Info Pills (Fee & WiFi) */}
      <div className="px-3.5 pt-3 pb-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={onOpenFee}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fff9e6] border border-[#f2e2b6] text-[11px] font-extrabold text-[#92600a] whitespace-nowrap cursor-pointer hover:bg-[#fef3c7] transition"
        >
          <span>🏷️</span>
          <span>Diskon 50% · Fee mulai Rp3.000</span>
        </button>
        <button
          type="button"
          onClick={onOpenWifi}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eff5fd] border border-[#bcd3f0] text-[11px] font-extrabold text-[#1659b7] whitespace-nowrap cursor-pointer hover:bg-[#e1edfc] transition"
        >
          <span>📶</span>
          <span>WiFi Hari Ini</span>
        </button>
      </div>

      {/* Main Product Catalog */}
      <main className={`px-3.5 pt-3 flex-1 ${totalItems > 0 ? 'pb-28' : 'pb-10'}`}>
        {groupedProducts ? (
          <div className="space-y-8">
            {groupedProducts.map((group) => (
              <section key={group.id} id={`cat-${group.id}`}>
                <h2 className="text-[21px] font-extrabold leading-tight text-[#1f1f1f] mb-4">
                  {group.name}
                </h2>
                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                  {group.items.map((product) => renderProductCard(product))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div>
            {searchQuery && (
              <p className="text-[13px] font-bold text-[#867e80] mb-4">
                Menampilkan {filteredProducts.length} hasil untuk &ldquo;{searchQuery}&rdquo;
              </p>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 px-4">
                <p className="text-[15px] font-extrabold text-[#1f1f1f]">Produk tidak ditemukan</p>
                <p className="text-[12px] text-[#867e80] mt-1">Coba cari dengan kata kunci lain.</p>
              </div>
            ) : (
              <div>
                {!searchQuery && activeCategory !== 'all' && (
                  <h2 className="text-[21px] font-extrabold leading-tight text-[#1f1f1f] mb-4">
                    {CATEGORIES_DATA.find((c) => c.id === activeCategory)?.name || 'Menu'}
                  </h2>
                )}
                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                  {filteredProducts.map((product) => renderProductCard(product))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Bottom Cart Bar (Exact Flappyyu Royal Blue Style) */}
      {totalItems > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-[416px] z-40">
          <button
            type="button"
            onClick={onOpenCart}
            className="w-full min-h-[58px] rounded-[8px] bg-[#1659b7] hover:bg-[#124a9a] px-4 py-2.5 text-white shadow-[0_4px_16px_rgba(22,89,183,0.3)] flex items-center justify-between active:scale-[0.98] transition cursor-pointer"
          >
            <div className="text-left">
              <span className="block text-[11px] font-bold text-white/90 leading-tight">
                {totalItems} produk
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-[18px] font-extrabold leading-none">
                  {formatRupiah(grandTotal)}
                </span>
                <span className="text-[12px] font-bold text-white/70 line-through leading-none">
                  {formatRupiah(subtotal)}
                </span>
              </div>
            </div>

            <span className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      )}

      {/* Product Detail Sheet / Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};
