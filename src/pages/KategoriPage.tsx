import React, { useState } from 'react';
import { CATEGORIES_DATA, PRODUCTS_DATA } from '../data/products';
import { formatRupiah } from '../utils/formatters';
import { Product, CartItem } from '../types';
import { ProductModal } from '../components/modals/ProductModal';

interface KategoriPageProps {
  onSelectCategory: (categoryId: string) => void;
  onAddToCart: (item: CartItem) => void;
}

const CATEGORY_META: Record<string, { desc: string; gradient: string; iconBg: string }> = {
  GRP_NEW_PRODUCT: {
    desc: 'Kreasi Menu Baru & Rekomendasi Spesial',
    gradient: 'from-[#B45309]/15 via-[#F59E0B]/10 to-transparent',
    iconBg: 'bg-[#FEF3C7]'
  },
  Menu0002: {
    desc: 'Espresso, Americano, Latte & Olahan Kopi Favorit',
    gradient: 'from-[#78350F]/15 via-[#B45309]/10 to-transparent',
    iconBg: 'bg-[#F3E9DB]'
  },
  Menu0003: {
    desc: 'Cokelat, Teh, Boba & Minuman Segar Menyegarkan',
    gradient: 'from-[#065F46]/15 via-[#10B981]/10 to-transparent',
    iconBg: 'bg-[#DCFCE7]'
  },
  Group0005: {
    desc: 'Roti, Toast, Panini & Camilan Teman Ngopi',
    gradient: 'from-[#C2410C]/15 via-[#F97316]/10 to-transparent',
    iconBg: 'bg-[#FFEDD5]'
  }
};

export const KategoriPage: React.FC<KategoriPageProps> = ({
  onSelectCategory,
  onAddToCart
}) => {
  const [selectedCategoryDetail, setSelectedCategoryDetail] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const activeCategoryData = CATEGORIES_DATA.find((c) => c.id === selectedCategoryDetail);
  const categoryProducts = selectedCategoryDetail
    ? PRODUCTS_DATA.filter((p) => p.category_id === selectedCategoryDetail)
    : [];

  return (
    <main className="shop-shell mx-auto px-4 py-5 pb-28">
      {selectedCategoryDetail && activeCategoryData ? (
        /* Detailed view of products inside category */
        <div>
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setSelectedCategoryDetail(null)}
              className="text-xs text-[#6B4423] font-bold flex items-center gap-1.5 bg-white border border-[#EADFC8] px-3 py-1.5 rounded-xl shadow-xs hover:bg-[#FAF6F0] cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              <span>Semua Kategori</span>
            </button>
            <span className="text-xs text-[#A08972] font-semibold">
              {categoryProducts.length} Menu
            </span>
          </div>

          <div className="mb-5">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#1A1614] tracking-tight">
              {activeCategoryData.name}
            </h1>
            <p className="text-xs text-[#A08972] mt-0.5">
              {CATEGORY_META[activeCategoryData.id]?.desc || 'Pilihan menu terbaik untuk Anda.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {categoryProducts.map((product) => (
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
        </div>
      ) : (
        /* Categories list */
        <div>
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#6B4423] bg-[#EADFC8] px-2.5 py-0.5 rounded-full border border-[#d4c2a8]">
                Katalog Menu
              </span>
              <span className="text-xs text-[#A08972] font-medium">4 Kategori</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-[#1A1614] tracking-tight">
              Kategori Favorit
            </h1>
            <p className="text-xs sm:text-sm text-[#A08972] mt-0.5">
              Pilih kategori untuk menjelajahi berbagai pilihan rasa &amp; camilan lezat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6">
            {CATEGORIES_DATA.map((cat) => {
              const meta = CATEGORY_META[cat.id] || {
                desc: 'Menu favorit Kopi Kenangan',
                gradient: 'from-[#6B4423]/10 to-transparent',
                iconBg: 'bg-[#FAF6F0]'
              };

              return (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategoryDetail(cat.id)}
                  className="relative bg-white rounded-2xl border border-[#EADFC8] p-4 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-[#6B4423] transition-all duration-200 group overflow-hidden active:scale-[0.98] cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${meta.gradient} opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-10 h-10 rounded-xl ${meta.iconBg} text-[#6B4423] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200`}
                      >
                        <img
                          src="https://jasdorkopi.id/storage/branding/01KYXYXERGVH7ZXQ1296QC3670.ico"
                          alt="Icon"
                          className="w-7 h-7 object-contain drop-shadow-xs"
                        />
                      </div>
                      <span className="text-xs font-bold text-[#6B4423] bg-[#F3E9DB] px-2.5 py-1 rounded-full border border-[#EADFC8]">
                        {cat.count} Menu
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-[#1A1614] group-hover:text-[#6B4423] transition-colors leading-snug">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-[#A08972] mt-1 line-clamp-2 leading-relaxed">
                      {meta.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-4 flex items-center justify-between text-xs font-semibold text-[#6B4423] pt-2.5 border-t border-[#EADFC8]/60">
                    <span>Lihat Menu</span>
                    <div className="w-6 h-6 rounded-full bg-[#FAF6F0] flex items-center justify-center group-hover:bg-[#6B4423] group-hover:text-white transition-colors">
                      <svg
                        className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

