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
  onOpenBestSellers,
  onOpenFee,
  onOpenWifi,
  onOpenContact
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const cartQtyByProduct = useMemo(() => {
    const map: Record<string, number> = {};
    cartItems.forEach((item) => {
      map[item.productId] = (map[item.productId] || 0) + item.quantity;
    });
    return map;
  }, [cartItems]);

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
        {/* Clean Floating Product Image */}
        <div className="relative w-full aspect-square flex items-center justify-center mb-2 overflow-hidden rounded-2xl bg-[#fafafa] group-hover:bg-[#fff7ed]/60 transition-colors">
          <img
            src={product.image}
            alt={product.name}
            className="w-[86%] h-[86%] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Top-left Badges ("1 x" & "Custom") */}
          {qtyInCart > 0 && (
            <div className="absolute top-2 left-2 flex flex-col items-start gap-1">
              <span className="bg-[#18181b] text-white rounded-md px-2 py-1 text-[11px] font-extrabold leading-none shadow-xs">
                {qtyInCart} x
              </span>
              {hasCustomOptions && (
                <span className="bg-[#ea580c] text-white rounded-md px-2 py-1 text-[10px] font-extrabold leading-none shadow-xs">
                  Custom
                </span>
              )}
            </div>
          )}

          {/* Subtle quick "+" button on bottom-right */}
          <span className="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white border border-[#e4e4e7] text-[#ea580c] group-hover:bg-[#ea580c] group-hover:border-[#ea580c] group-hover:text-white shadow-xs flex items-center justify-center transition">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </div>

        {/* Product Title */}
        <h3 className="text-[13.5px] font-extrabold leading-snug text-[#18181b] line-clamp-2 mb-1.5 group-hover:text-[#ea580c] transition-colors">
          {product.name}
        </h3>

        {/* Price Row: Orderdong Orange Discount Pill + Muted Strikethrough */}
        <div className="flex items-center flex-wrap gap-1.5 mt-auto">
          <span className="inline-flex items-center bg-[#ea580c] text-white rounded-md px-2 py-0.5 text-[12px] font-extrabold leading-none">
            {formatRupiah(discountedPrice)}
          </span>
          <span className="text-[11px] font-bold text-[#a1a1aa] line-through leading-none">
            {formatRupiah(product.price)}
          </span>
        </div>
      </article>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Orderdong Signature Top Brand Bar (Deep Espresso Charcoal + Tangerine Logo) */}
      <div className="bg-[#18181b] text-white px-4 py-2.5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          {/* Custom Orderdong Coffee + Lightning SVG Mark */}
          <div className="w-8 h-8 rounded-xl bg-[#ea580c] flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(234,88,12,0.45)]">
            <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none">
              <path d="M8 10h16l-1.9 14.5A3 3 0 0 1 19.1 27h-6.2a3 3 0 0 1-3-2.5L8 10z" fill="#ffffff" />
              <rect x="6.5" y="7.5" width="19" height="3" rx="1.5" fill="#fed7aa" />
              <path d="M17.2 13.5l-3.6 5.2h2.7l-1 4.8 4-5.8h-2.7l.6-4.2z" fill="#ea580c" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[16px] font-black tracking-tight leading-none">
                order<span className="text-[#fb923c]">dong</span>
              </span>
              <span className="text-[9.5px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#ea580c]/25 text-[#fdba74] border border-[#ea580c]/40 leading-none">
                50% OFF
              </span>
            </div>
            <p className="text-[10.5px] text-[#a1a1aa] font-medium leading-tight mt-0.5 truncate">
              Kopi Kenangan · Sat-set pickup di counter
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={onOpenOrder}
            aria-label="Lacak Pesanan"
            title="Lacak Pesanan"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onOpenMenu}
            aria-label="Menu Utama"
            title="Menu Utama"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Sticky Header: Floating Outlet Selector + Category Tabs + Search */}
      <header className="sticky top-0 z-40 bg-white shadow-[0_2px_12px_rgba(24,24,27,0.06)]">
        {/* Outlet Pill Row */}
        <div className="px-3.5 pt-2.5 pb-2">
          <button
            type="button"
            onClick={onSwitchOutlet}
            className="w-full rounded-xl border border-[#f0f0f2] bg-white px-3 py-2 shadow-[0_2px_10px_rgba(24,24,27,0.08)] flex items-center justify-between gap-2.5 text-left hover:border-[#fed7aa] active:scale-[0.99] transition cursor-pointer"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <span className="w-8 h-8 rounded-lg bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-[13px] font-extrabold text-[#18181b] truncate leading-tight">
                    {currentOutlet ? currentOutlet.name : 'Pilih Outlet Terdekat'}
                  </p>
                  {currentOutlet?.distance && (
                    <span className="text-[10px] font-extrabold text-[#ea580c] bg-[#fff7ed] px-1.5 py-0.5 rounded shrink-0 leading-none">
                      {currentOutlet.distance}
                    </span>
                  )}
                </div>
                <p className="text-[11px] font-medium text-[#71717a] truncate leading-tight mt-0.5">
                  {currentOutlet ? currentOutlet.address : 'Ketuk untuk cari Kopi Kenangan terdekat'}
                </p>
              </div>
            </div>
            <span className="text-[11px] font-extrabold text-[#ea580c] shrink-0 flex items-center gap-0.5">
              Ganti
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Category Underline Tabs (Orderdong Tangerine Active Indicator) */}
        <div className="border-b border-[#f0f0f2] px-3.5 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-5 w-max">
            <button
              type="button"
              onClick={() => handleCategoryClick('all')}
              className={`relative h-10 flex items-center text-[13px] font-extrabold whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === 'all' ? 'text-[#ea580c]' : 'text-[#27272a] hover:text-[#ea580c]'
              }`}
            >
              Semua
              {activeCategory === 'all' && (
                <span className="absolute bottom-0 inset-x-0 h-[3px] rounded-full bg-[#ea580c]" />
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
                    isActive ? 'text-[#ea580c]' : 'text-[#27272a] hover:text-[#ea580c]'
                  }`}
                >
                  {cat.name}
                  {isActive && (
                    <span className="absolute bottom-0 inset-x-0 h-[3px] rounded-full bg-[#ea580c]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Input */}
        <div className="px-3.5 py-2.5 bg-white">
          <div className="relative">
            <svg
              className="w-4 h-4 text-[#a1a1aa] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              id="search-produk"
              name="search-produk"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kopi, matcha, toast..."
              className="w-full pl-10 pr-8 py-2.5 bg-[#f4f4f5] border border-[#e4e4e7] rounded-xl text-[13px] font-semibold text-[#18181b] placeholder-[#a1a1aa] focus:outline-none focus:border-[#ea580c] focus:bg-white transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#a1a1aa] hover:text-[#18181b] p-1 cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Orderdong Compact Quick-Action Pills */}
      <div className="px-3.5 pt-3 pb-1 flex items-center gap-2 overflow-x-auto no-scrollbar">
        <button
          type="button"
          onClick={onOpenFee}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fff7ed] border border-[#fed7aa] text-[11px] font-extrabold text-[#c2410c] whitespace-nowrap cursor-pointer hover:bg-[#ffedd5] transition"
        >
          <span>⚡</span>
          <span>Fee mulai Rp3rb</span>
        </button>
        <button
          type="button"
          onClick={onOpenBestSellers}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] text-[11px] font-extrabold text-[#18181b] whitespace-nowrap cursor-pointer hover:border-[#fed7aa] transition"
        >
          <span>🔥</span>
          <span>Best Seller</span>
        </button>
        <button
          type="button"
          onClick={onOpenWifi}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] text-[11px] font-extrabold text-[#18181b] whitespace-nowrap cursor-pointer hover:border-[#fed7aa] transition"
        >
          <span>📶</span>
          <span>WiFi</span>
        </button>
        <button
          type="button"
          onClick={onOpenContact}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f4f4f5] border border-[#e4e4e7] text-[11px] font-extrabold text-[#18181b] whitespace-nowrap cursor-pointer hover:border-[#fed7aa] transition"
        >
          <span>💬</span>
          <span>Admin</span>
        </button>
      </div>

      {/* Main Product Catalog */}
      <main className={`px-3.5 pt-3 flex-1 ${totalItems > 0 ? 'pb-28' : 'pb-10'}`}>
        {groupedProducts ? (
          <div className="space-y-8">
            {groupedProducts.map((group) => (
              <section key={group.id} id={`cat-${group.id}`}>
                <div className="flex items-baseline justify-between mb-3.5">
                  <h2 className="text-[20px] font-extrabold leading-tight text-[#18181b]">
                    {group.name}
                  </h2>
                  <span className="text-[11px] font-bold text-[#a1a1aa]">
                    {group.items.length} menu
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-x-3.5 gap-y-5">
                  {group.items.map((product) => renderProductCard(product))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div>
            {searchQuery && (
              <p className="text-[13px] font-bold text-[#71717a] mb-4">
                Menampilkan {filteredProducts.length} hasil untuk &ldquo;{searchQuery}&rdquo;
              </p>
            )}

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 px-4">
                <p className="text-[15px] font-extrabold text-[#18181b]">Produk tidak ditemukan</p>
                <p className="text-[12px] text-[#71717a] mt-1">Coba cari dengan kata kunci lain.</p>
              </div>
            ) : (
              <div>
                {!searchQuery && activeCategory !== 'all' && (
                  <h2 className="text-[20px] font-extrabold leading-tight text-[#18181b] mb-3.5">
                    {CATEGORIES_DATA.find((c) => c.id === activeCategory)?.name || 'Menu'}
                  </h2>
                )}
                <div className="grid grid-cols-2 gap-x-3.5 gap-y-5">
                  {filteredProducts.map((product) => renderProductCard(product))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Orderdong Signature Floating Bottom Cart Bar (Espresso + Tangerine Accent) */}
      {totalItems > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] max-w-[416px] z-40">
          <button
            type="button"
            onClick={onOpenCart}
            className="w-full min-h-[60px] rounded-2xl bg-[#18181b] hover:bg-[#27272a] px-4 py-2.5 text-white shadow-[0_8px_24px_rgba(24,24,27,0.3)] border border-white/10 flex items-center justify-between active:scale-[0.98] transition cursor-pointer"
          >
            <div className="text-left">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#fdba74] leading-tight">
                <span>{totalItems} produk</span>
                <span>·</span>
                <span>Checkout Orderdong</span>
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-[18px] font-extrabold leading-none">
                  {formatRupiah(grandTotal)}
                </span>
                <span className="text-[12px] font-bold text-white/50 line-through leading-none">
                  {formatRupiah(subtotal)}
                </span>
              </div>
            </div>

            <span className="w-9 h-9 rounded-xl bg-[#ea580c] flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(234,88,12,0.45)]">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.8" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      )}

      {/* Product Detail Sheet */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};
