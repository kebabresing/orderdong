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
    let text = `Halo Admin Orderdong, saya ingin memesan Kopi Kenangan:\n\n`;
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
    text += `• Biaya Jasa Orderdong (${feeLabel}): ${formatRupiah(fee)}\n`;
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
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#18181b] text-white px-4 h-14 flex items-center justify-between">
        <button
          type="button"
          onClick={onContinueShopping}
          className="w-9 h-9 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition cursor-pointer"
          aria-label="Kembali"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

        <h1 className="text-[16px] font-extrabold">Keranjang</h1>

        {items.length > 0 ? (
          <button
            type="button"
            onClick={onClearCart}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#fca5a5] hover:bg-white/10 transition cursor-pointer"
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
          <div className="w-16 h-16 rounded-2xl bg-[#fff7ed] text-[#ea580c] border border-[#fed7aa] flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <p className="text-[16px] font-extrabold text-[#18181b]">Keranjang masih kosong</p>
          <p className="text-[13px] text-[#71717a] mt-1 mb-6">
            Yuk pilih menu Kopi Kenangan favoritmu dulu.
          </p>
          <button
            type="button"
            onClick={onContinueShopping}
            className="h-11 px-7 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white text-[14px] font-extrabold shadow-[0_4px_14px_rgba(234,88,12,0.28)] active:scale-95 transition cursor-pointer"
          >
            Lihat Menu
          </button>
        </main>
      ) : (
        <>
          <main className="flex-1 px-4 pt-4 pb-32 space-y-5">
            {/* Outlet Summary Card */}
            {currentOutlet && (
              <div className="rounded-xl border border-[#ececef] bg-white px-4 py-3.5 shadow-[0_4px_16px_rgba(24,24,27,0.06)] flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[13px] font-extrabold text-[#18181b] truncate">
                    Outlet: {currentOutlet.name}
                  </p>
                  <p className="text-[11px] text-[#71717a] truncate mt-0.5">
                    {currentOutlet.address}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onSwitchOutlet}
                  className="text-[12px] font-extrabold text-[#ea580c] hover:underline shrink-0 cursor-pointer"
                >
                  Ubah
                </button>
              </div>
            )}

            {/* Order Items Header */}
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-[16px] font-extrabold text-[#18181b]">Pesananmu</h2>
              <button
                type="button"
                onClick={onContinueShopping}
                className="h-9 px-3.5 rounded-full border-2 border-[#ea580c] text-[#ea580c] hover:bg-[#fff7ed] text-[12px] font-extrabold inline-flex items-center gap-1 transition cursor-pointer"
              >
                <span>Tambah Pesanan +</span>
              </button>
            </div>

            {/* Cart Items */}
            <div className="space-y-3.5">
              {items.map((item) => {
                const discountedItemTotal = Math.round(item.totalItemPrice * 0.5);
                return (
                  <div
                    key={item.cartItemId}
                    className="rounded-xl border border-[#ececef] bg-white p-4 shadow-[0_4px_16px_rgba(24,24,27,0.06)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[14px] font-extrabold text-[#18181b] leading-snug">
                          {item.name}
                        </h3>

                        {Object.values(item.selectedOptions).length > 0 && (
                          <p className="text-[11.5px] text-[#71717a] mt-1 leading-snug">
                            {Object.values(item.selectedOptions)
                              .map((o) => o.label)
                              .join(' · ')}
                          </p>
                        )}

                        {item.selectedAddons.length > 0 && (
                          <p className="text-[11px] text-[#ea580c] font-semibold mt-0.5">
                            + {item.selectedAddons.map((a) => a.name).join(', ')}
                          </p>
                        )}

                        {item.notes && (
                          <p className="text-[11px] text-[#71717a] italic mt-0.5">
                            &ldquo;{item.notes}&rdquo;
                          </p>
                        )}

                        <div className="flex items-baseline gap-2 mt-2.5">
                          <span className="text-[14px] font-extrabold text-[#18181b]">
                            {formatRupiah(discountedItemTotal)}
                          </span>
                          <span className="text-[11.5px] font-bold text-[#a1a1aa] line-through">
                            {formatRupiah(item.totalItemPrice)}
                          </span>
                        </div>
                      </div>

                      <div className="w-16 h-16 rounded-xl bg-[#fafafa] border border-[#f0f0f2] shrink-0 overflow-hidden flex items-center justify-center p-1">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain mix-blend-multiply"
                        />
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-[#f4f4f5] flex items-center justify-end gap-3">
                      <button
                        type="button"
                        onClick={() =>
                          item.quantity <= 1
                            ? onRemoveItem(item.cartItemId)
                            : onUpdateQuantity(item.cartItemId, -1)
                        }
                        className="w-7 h-7 rounded-full border border-[#dc2626] text-[#dc2626] hover:bg-[#fef2f2] flex items-center justify-center transition cursor-pointer"
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

                      <span className="text-[13px] font-extrabold text-[#18181b] min-w-[16px] text-center">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                        className="w-7 h-7 rounded-full border border-[#ea580c] text-[#ea580c] hover:bg-[#fff7ed] flex items-center justify-center text-sm font-extrabold leading-none transition cursor-pointer"
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
              className={`rounded-xl border bg-white p-4 shadow-[0_4px_16px_rgba(24,24,27,0.06)] transition ${
                nameError ? 'border-[#dc2626] ring-2 ring-[#dc2626]/15' : 'border-[#ececef]'
              }`}
            >
              <label htmlFor="input-nama-pemesan" className="flex items-center gap-1.5 mb-2">
                <svg className="w-4 h-4 text-[#ea580c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="text-[13px] font-extrabold text-[#18181b]">
                  Nama Pemesan <span className="text-[#dc2626]">*</span>
                </span>
              </label>
              <input
                id="input-nama-pemesan"
                name="nama-pemesan"
                type="text"
                value={customerName}
                onChange={(e) => {
                  setCustomerName(e.target.value);
                  if (e.target.value.trim()) setNameError(false);
                }}
                placeholder="Masukkan nama pemesan (wajib)"
                autoComplete="name"
                className={`w-full h-10 px-3.5 rounded-xl border text-[13px] font-semibold text-[#18181b] placeholder-[#a1a1aa] focus:outline-none transition ${
                  nameError
                    ? 'border-[#dc2626] bg-[#fef2f2]'
                    : 'border-[#e4e4e7] bg-[#fafafa] focus:border-[#ea580c] focus:bg-white'
                }`}
              />
              {nameError && (
                <p className="mt-1.5 text-[11.5px] font-bold text-[#dc2626]">
                  Nama pemesan wajib diisi sebelum menekan tombol Pesan.
                </p>
              )}
            </div>

            {/* Rincian Biaya & Fee Card */}
            <div className="rounded-xl border border-[#ececef] bg-white p-4 shadow-[0_4px_16px_rgba(24,24,27,0.06)] space-y-2 text-[12.5px]">
              <div className="flex items-center justify-between text-[#52525b]">
                <span>Subtotal</span>
                <span className="font-bold text-[#18181b]">{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-[#059669]">
                <span className="font-bold">Diskon 50%</span>
                <span className="font-extrabold">−{formatRupiah(discount)}</span>
              </div>
              <div className="flex items-center justify-between text-[#52525b]">
                <button
                  type="button"
                  onClick={onOpenFeeInfo}
                  className="inline-flex items-center gap-1 font-bold text-[#ea580c] hover:underline cursor-pointer"
                >
                  <span>Biaya Jasa Orderdong ({feeLabel})</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <span className="font-bold text-[#18181b]">{formatRupiah(fee)}</span>
              </div>
            </div>
          </main>

          {/* Sticky Checkout Footer */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[440px] bg-white border-t border-[#f0f0f2] px-4 py-3 flex items-center justify-between gap-3 z-40 shadow-[0_-4px_14px_rgba(24,24,27,0.06)]">
            <div className="min-w-0">
              <span className="block text-[11px] font-semibold text-[#71717a] leading-tight">
                Total Bayar
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-[17px] font-extrabold text-[#18181b] leading-none">
                  {formatRupiah(grandTotal)}
                </span>
                <span className="text-[12px] font-bold text-[#a1a1aa] line-through leading-none">
                  {formatRupiah(subtotal)}
                </span>
              </div>
              {discount - fee > 0 && (
                <span className="block text-[11px] font-extrabold text-[#059669] mt-1 leading-none">
                  Hemat {formatRupiah(discount - fee)}
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleOrder}
              className="h-[50px] px-7 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white text-[15px] font-extrabold shadow-[0_4px_14px_rgba(234,88,12,0.3)] active:scale-[0.98] transition cursor-pointer shrink-0"
            >
              Pesan via WA
            </button>
          </div>
        </>
      )}
    </div>
  );
};
