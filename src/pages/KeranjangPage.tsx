import React, { useState } from 'react';
import { Outlet, CartItem } from '../types';
import { formatRupiah } from '../utils/formatters';
import { APP_CONFIG } from '../data/config';

interface KeranjangPageProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  fee: number;
  grandTotal: number;
  currentOutlet: Outlet | null;
  onUpdateQuantity: (cartItemId: string, delta: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
  onContinueShopping: () => void;
  onSwitchOutlet: () => void;
  onOpenFeeInfo: () => void;
}

export const KeranjangPage: React.FC<KeranjangPageProps> = ({
  items,
  subtotal,
  discount,
  fee,
  grandTotal,
  currentOutlet,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onContinueShopping,
  onSwitchOutlet,
  onOpenFeeInfo
}) => {
  const [customerName, setCustomerName] = useState('');
  const [nameError, setNameError] = useState(false);

  const feeLabel =
    subtotal >= 70000
      ? 'Min. Rp70.000'
      : subtotal >= 50000
      ? 'Min. Rp50.000'
      : 'Tanpa Minimal';

  const generateWhatsAppOrderUrl = () => {
    let text = `Halo Admin, saya ingin memesan Kopi Kenangan:\n\n`;
    text += `👤 *Nama Pemesan:* ${customerName.trim()}\n`;
    text += `📍 *Outlet:* ${currentOutlet?.name || 'Default Outlet'}\n`;
    text += `\n*Daftar Pesanan:*\n`;

    items.forEach((item, index) => {
      text += `${index + 1}. *${item.name}* (x${item.quantity}) - ${formatRupiah(item.totalItemPrice)}\n`;
      const optionsArr = Object.values(item.selectedOptions).map((o) => o.label);
      if (optionsArr.length > 0) {
        text += `   - Opsi: ${optionsArr.join(', ')}\n`;
      }
      if (item.selectedAddons.length > 0) {
        text += `   - Addon: ${item.selectedAddons.map((a) => a.name).join(', ')}\n`;
      }
      if (item.notes) {
        text += `   - Catatan: ${item.notes}\n`;
      }
    });

    text += `\n*Ringkasan Biaya:*\n`;
    text += `• Subtotal: ${formatRupiah(subtotal)}\n`;
    text += `• Diskon 50%: -${formatRupiah(discount)}\n`;
    text += `• Fee Jasdor (${feeLabel}): ${formatRupiah(fee)}\n`;
    text += `• *TOTAL BAYAR: ${formatRupiah(grandTotal)}*\n\n`;
    text += `Mohon diproses pesanannya ya kak. Terima kasih! 🙏`;

    return `https://wa.me/${APP_CONFIG.adminWhatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleOrder = () => {
    if (!customerName.trim()) {
      setNameError(true);
      const inputEl = document.getElementById('input-nama-pemesan');
      inputEl?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      inputEl?.focus();
      return;
    }
    setNameError(false);
    window.open(generateWhatsAppOrderUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sticky Top Header (Flappyyu Cart Style: Back arrow, centered Keranjang, right crimson trash) */}
      <header className="sticky top-0 z-30 bg-white border-b border-[#ececec] px-4 h-14 flex items-center justify-between">
        <button
          type="button"
          onClick={onContinueShopping}
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#1f1f1f] hover:bg-[#f6f6f6] transition cursor-pointer"
          aria-label="Kembali"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <h1 className="text-[16px] font-extrabold text-[#1f1f1f]">Keranjang</h1>

        {items.length > 0 ? (
          <button
            type="button"
            onClick={onClearCart}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#bf1926] hover:bg-[#fef2f2] transition cursor-pointer"
            title="Kosongkan Keranjang"
            aria-label="Kosongkan Keranjang"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        ) : (
          <div className="w-9" />
        )}
      </header>

      {items.length === 0 ? (
        <main className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-[#eff5fd] text-[#1659b7] flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <p className="text-[16px] font-extrabold text-[#1f1f1f]">Keranjang masih kosong</p>
          <p className="text-[13px] text-[#867e80] mt-1 mb-6">
            Yuk pilih menu Kopi Kenangan favoritmu dulu.
          </p>
          <button
            type="button"
            onClick={onContinueShopping}
            className="h-11 px-7 rounded-[8px] bg-[#1659b7] hover:bg-[#124a9a] text-white text-[14px] font-extrabold shadow-[0_3px_12px_rgba(22,89,183,0.22)] active:scale-95 transition cursor-pointer"
          >
            Lihat Menu
          </button>
        </main>
      ) : (
        <>
          <main className="flex-1 px-4 pt-4 pb-32 space-y-5">
            {/* Outlet Summary Card */}
            {currentOutlet && (
              <div className="rounded-[10px] border border-[#ececec] bg-white px-4 py-3.5 shadow-[0_4px_16px_rgba(15,23,42,0.08)] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[13px] font-extrabold text-[#1f1f1f] truncate">
                    Outlet: {currentOutlet.name}
                  </p>
                  <p className="text-[11px] text-[#867e80] truncate mt-0.5">
                    {currentOutlet.address}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onSwitchOutlet}
                  className="text-[12px] font-extrabold text-[#1659b7] hover:underline shrink-0 cursor-pointer"
                >
                  Ubah
                </button>
              </div>
            )}

            {/* Order Items Section Header: "Pesan" + Outlined Blue Pill "Tambah Pesanan +" */}
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[16px] font-extrabold text-[#1f1f1f]">Pesan</h2>
              <button
                type="button"
                onClick={onContinueShopping}
                className="h-9 px-3.5 rounded-full border-2 border-[#1659b7] text-[#1659b7] hover:bg-[#eff5fd] text-[12px] font-extrabold inline-flex items-center gap-1 transition cursor-pointer"
              >
                <span>Tambah Pesanan +</span>
              </button>
            </div>

            {/* Cart Items Cards */}
            <div className="space-y-3.5">
              {items.map((item) => {
                const discountedItemTotal = Math.round(item.totalItemPrice * 0.5);
                return (
                  <div
                    key={item.cartItemId}
                    className="rounded-[10px] border border-[#ececec] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[14px] font-extrabold text-[#1f1f1f] leading-snug">
                          {item.name}
                        </h3>

                        {Object.values(item.selectedOptions).length > 0 && (
                          <p className="text-[11.5px] text-[#867e80] mt-1 leading-snug">
                            {Object.values(item.selectedOptions)
                              .map((o) => o.label)
                              .join(' · ')}
                          </p>
                        )}

                        {item.selectedAddons.length > 0 && (
                          <p className="text-[11px] text-[#c39155] font-semibold mt-0.5">
                            + {item.selectedAddons.map((a) => a.name).join(', ')}
                          </p>
                        )}

                        {item.notes && (
                          <p className="text-[11px] text-[#867e80] italic mt-0.5">
                            &ldquo;{item.notes}&rdquo;
                          </p>
                        )}

                        <div className="flex items-baseline gap-2 mt-2.5">
                          <span className="text-[14px] font-extrabold text-[#1f1f1f]">
                            {formatRupiah(discountedItemTotal)}
                          </span>
                          <span className="text-[11.5px] font-bold text-[#9b9b9b] line-through">
                            {formatRupiah(item.totalItemPrice)}
                          </span>
                        </div>
                      </div>

                      <div className="w-16 h-16 rounded-lg bg-[#f9f9f9] border border-[#f0f0f0] shrink-0 overflow-hidden flex items-center justify-center p-1">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>

                    {/* Bottom Control Row: Red Trash/Minus Circle + Qty + Caramel Outlined "+" Circle */}
                    <div className="mt-3 pt-3 border-t border-[#f2f2f2] flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          item.quantity <= 1
                            ? onRemoveItem(item.cartItemId)
                            : onUpdateQuantity(item.cartItemId, -1)
                        }
                        className="w-7 h-7 rounded-full border border-[#bf1926] text-[#bf1926] hover:bg-[#fef2f2] flex items-center justify-center transition cursor-pointer"
                        aria-label="Kurangi atau hapus"
                      >
                        {item.quantity <= 1 ? (
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        ) : (
                          <span className="text-sm font-extrabold leading-none">−</span>
                        )}
                      </button>

                      <span className="text-[13px] font-extrabold text-[#1f1f1f] min-w-[16px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                        className="w-7 h-7 rounded-full border border-[#c39155] text-[#c39155] hover:bg-[#fdf8f2] flex items-center justify-center text-sm font-extrabold leading-none transition cursor-pointer"
                        aria-label="Tambah jumlah"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Required Customer Name Card */}
            <div
              className={`rounded-[10px] border bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.08)] transition ${
                nameError ? 'border-[#bf1926] ring-2 ring-[#bf1926]/15' : 'border-[#ececec]'
              }`}
            >
              <label htmlFor="input-nama-pemesan" className="flex items-center gap-1.5 mb-2">
                <svg className="w-4 h-4 text-[#1659b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-[13px] font-extrabold text-[#1f1f1f]">
                  Nama Pemesan <span className="text-[#bf1926]">*</span>
                </span>
              </label>
              <input
                id="input-nama-pemesan"
                type="text"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  if (e.target.value.trim()) setNameError(false);
                }}
                placeholder="Masukkan nama pemesan (wajib)"
                autoComplete="name"
                className={`w-full h-10 px-3.5 rounded-lg border text-[13px] font-semibold text-[#1f1f1f] placeholder-[#9a9a9a] focus:outline-none transition ${
                  nameError
                    ? 'border-[#bf1926] bg-[#fef2f2]'
                    : 'border-[#e5e5e5] bg-[#fafafa] focus:border-[#1659b7] focus:bg-white'
                }`}
              />
              {nameError && (
                <p className="mt-1.5 text-[11.5px] font-bold text-[#bf1926]">
                  Nama pemesan wajib diisi sebelum menekan tombol Pesan.
                </p>
              )}
            </div>

            {/* Rincian Biaya & Fee Card */}
            <div className="rounded-[10px] border border-[#ececec] bg-white p-4 shadow-[0_4px_16px_rgba(15,23,42,0.08)] space-y-2 text-[12.5px]">
              <div className="flex items-center justify-between text-[#555555]">
                <span>Subtotal</span>
                <span className="font-bold text-[#1f1f1f]">{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-[#047857]">
                <span className="font-bold">Diskon 50%</span>
                <span className="font-extrabold">−{formatRupiah(discount)}</span>
              </div>
              <div className="flex items-center justify-between text-[#555555]">
                <button
                  type="button"
                  onClick={onOpenFeeInfo}
                  className="inline-flex items-center gap-1 font-bold text-[#1659b7] hover:underline cursor-pointer"
                >
                  <span>Biaya Jasa ({feeLabel})</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <span className="font-bold text-[#1f1f1f]">{formatRupiah(fee)}</span>
              </div>
            </div>
          </main>

          {/* Sticky Checkout Footer (Exact Flappyyu Style) */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] bg-white border-t border-[#ececec] px-4 py-3 flex items-center justify-between gap-3 z-40 shadow-[0_-4px_14px_rgba(0,0,0,0.05)]">
            <div className="min-w-0">
              <span className="block text-[11px] font-semibold text-[#867e80] leading-tight">
                Total
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-[17px] font-extrabold text-[#1f1f1f] leading-none">
                  {formatRupiah(grandTotal)}
                </span>
                <span className="text-[12px] font-bold text-[#9b9b9b] line-through leading-none">
                  {formatRupiah(subtotal)}
                </span>
              </div>
              {discount - fee > 0 && (
                <span className="block text-[11px] font-extrabold text-[#047857] mt-1 leading-none">
                  Hemat {formatRupiah(discount - fee)}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleOrder}
              className="h-[50px] px-8 rounded-[8px] bg-[#1659b7] hover:bg-[#124a9a] text-white text-[16px] font-extrabold shadow-[0_3px_12px_rgba(22,89,183,0.22)] active:scale-[0.98] transition cursor-pointer shrink-0"
            >
              Pesan
            </button>
          </div>
        </>
      )}
    </div>
  );
};
