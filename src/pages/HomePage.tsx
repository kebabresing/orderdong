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

  // Filter products by search or selected category (deduplicate by name when searching)
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS_DATA;
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category_id === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const seen = new Set<string>();
      list = list.filter((p) => {
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category_name.toLowerCase().includes(q);
        if (!matches) return false;
        const key = p.name.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
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
    const isNewItem =
      product.category_id === 'GRP_NEW_PRODUCT' ||
      product.id.startsWith('coffee-bluebericano') ||
      product.id.startsWith('coffee-strawbericano') ||
      product.id.startsWith('coffee-creamy-cheesecake') ||
      product.id.startsWith('frappe-strawberry-cheesecake') ||
      product.id.startsWith('frappe-blueberry-cheesecake') ||
      product.id.startsWith('food-vanilla-cream-long-bread');
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

          {/* Bottom-left Mint "New" Badge (matching Kopi Kenangan app) */}
          {isNewItem && (
            <span className="absolute bottom-1 left-1 bg-[#ecfdf5] text-[#059669] rounded px-1.5 py-0.5 text-[10px] font-extrabold leading-none">
              New
            </span>
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
      {/* Sticky iOS 27 Liquid Glass Top Header */}
      <header className="sticky top-0 z-40 ios-glass-header">
        {/* Row 1: Floating Liquid Glass Circular Buttons + Capsule Outlet Selector */}
        <div className="px-3.5 pt-3 pb-2 flex items-center gap-2">
          {/* Left: Circular Liquid Glass Menu Button */}
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Menu Utama"
            title="Menu Utama"
            className="w-10 h-10 rounded-full ios-glass-pill text-[#1d1d1f] flex items-center justify-center shrink-0 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]/40"
          >
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>

          {/* Center: Floating Liquid Glass Capsule Outlet Pill */}
          <button
            type="button"
            onClick={onSwitchOutlet}
            className="flex-1 min-w-0 h-11 rounded-full ios-glass-pill pl-3.5 pr-2 flex items-center justify-between gap-2 text-left active:scale-[0.98] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]/40"
          >
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-extrabold text-[#1d1d1f] truncate leading-tight tracking-[-0.01em]">
                {currentOutlet ? currentOutlet.name : 'Pilih Outlet Terdekat'}
              </p>
              <p className="text-[10.5px] font-medium text-[#6e6e73] truncate leading-tight mt-0.5">
                {currentOutlet ? currentOutlet.address : 'Ketuk untuk memilih outlet Kopi Kenangan'}
              </p>
            </div>
            <span className="w-7 h-7 rounded-full bg-black/[0.045] border border-white/80 text-[#1659b7] flex items-center justify-center shrink-0">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          {/* Right: Grouped Liquid Glass Action Capsule (Refresh + Riwayat) */}
          <div className="h-10 rounded-full ios-glass-pill px-1 flex items-center gap-0.5 shrink-0">
            <button
              type="button"
              onClick={handleRefresh}
              aria-label="Refresh Menu"
              title="Refresh Menu"
              className="w-8 h-8 rounded-full text-[#1d1d1f] hover:bg-black/[0.05] flex items-center justify-center active:scale-90 transition cursor-pointer focus:outline-none"
            >
              <svg
                className={`w-[16px] h-[16px] ${isRefreshing ? 'animate-spin text-[#007aff]' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
            </button>

            <span className="w-px h-4 bg-black/[0.08]" />

            <button
              type="button"
              onClick={onOpenOrder}
              aria-label="Riwayat Pesanan"
              title="Riwayat & Lacak Pesanan"
              className="w-8 h-8 rounded-full text-[#1d1d1f] hover:bg-black/[0.05] flex items-center justify-center active:scale-90 transition cursor-pointer focus:outline-none"
            >
              <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Row 2: iOS 27 Liquid Glass Floating Segmented Pill Tabs */}
        <div className="px-3.5 py-1.5 overflow-x-auto no-scrollbar">
          <div className="inline-flex items-center gap-1 p-1 rounded-full ios-glass-track w-max">
            <button
              type="button"
              onClick={() => handleCategoryClick('all')}
              className={`h-8 px-3.5 rounded-full text-[12.5px] whitespace-nowrap transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]/40 ${
                activeCategory === 'all'
                  ? 'ios-glass-tab-active font-extrabold text-[#1d1d1f]'
                  : 'font-semibold text-[#6e6e73] hover:text-[#1d1d1f]'
              }`}
            >
              Semua
            </button>

            {CATEGORIES_DATA.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`h-8 px-3.5 rounded-full text-[12.5px] whitespace-nowrap transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]/40 ${
                    isActive
                      ? 'ios-glass-tab-active font-extrabold text-[#1d1d1f]'
                      : 'font-semibold text-[#6e6e73] hover:text-[#1d1d1f]'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Row 3: iOS 27 Liquid Glass Search Capsule */}
        <div className="px-3.5 pt-1 pb-3">
          <div className="relative flex items-center rounded-full ios-glass-search transition-all duration-200">
            <svg
              className="w-4 h-4 text-[#8e8e93] absolute left-3.5 pointer-events-none"
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
              className="w-full h-10 pl-10 pr-9 bg-transparent rounded-full text-[13.5px] font-medium text-[#1d1d1f] placeholder-[#8e8e93] focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 w-5 h-5 rounded-full bg-[#8e8e93]/30 hover:bg-[#8e8e93]/50 text-[#1d1d1f] text-[10px] font-bold flex items-center justify-center cursor-pointer transition"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Quick Info Liquid Glass Pills (iOS 27 Native Style — no emojis) */}
      <div className="px-3.5 pt-3 pb-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={onOpenFee}
          className="h-9 px-3.5 rounded-full ios-glass-pill inline-flex items-center gap-2 text-[12px] font-bold text-[#1d1d1f] whitespace-nowrap cursor-pointer active:scale-[0.96] transition-all duration-200 focus:outline-none"
        >
          <span className="w-5 h-5 rounded-full bg-[#1659b7]/10 text-[#1659b7] flex items-center justify-center shrink-0">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
          </span>
          <span className="tracking-[-0.01em]">Diskon 50%</span>
          <span className="text-[#8e8e93] font-semibold">· Fee mulai 3k</span>
          <svg className="w-3 h-3 text-[#aeaeb2] -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <button
          type="button"
          onClick={onOpenWifi}
          className="h-9 px-3.5 rounded-full ios-glass-pill inline-flex items-center gap-2 text-[12px] font-bold text-[#1d1d1f] whitespace-nowrap cursor-pointer active:scale-[0.96] transition-all duration-200 focus:outline-none"
        >
          <span className="w-5 h-5 rounded-full bg-black/[0.05] text-[#1d1d1f] flex items-center justify-center shrink-0">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
          </span>
          <span className="tracking-[-0.01em]">WiFi</span>
          <svg className="w-3 h-3 text-[#aeaeb2] -ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" d="M9 5l7 7-7 7" />
          </svg>
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

      {/* Floating Bottom Cart Bar (iOS 27 Liquid Glass Blue Capsule) */}
      {totalItems > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-[416px] z-40">
          <button
            type="button"
            onClick={onOpenCart}
            className="w-full min-h-[60px] rounded-full ios-glass-blue px-5 py-2.5 text-white flex items-center justify-between active:scale-[0.97] transition-all duration-200 cursor-pointer focus:outline-none"
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
