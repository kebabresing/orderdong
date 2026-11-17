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

  // Determine which fee tier is active
  const feeLabel =
    subtotal >= 70000
      ? 'Min. Rp70.000'
      : subtotal >= 50000
      ? 'Min. Rp50.000'
      : 'Tanpa Minimal';

  // Generate WhatsApp order text
  const generateWhatsAppOrderUrl = () => {
    let text = `Halo Admin Jasdor, saya ingin memesan Kopi Kenangan:\n\n`;
    text += `👤 *Nama Pemesan:* ${customerName}\n`;
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
      // Scroll to name input
      document.getElementById('input-nama-pemesan')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      document.getElementById('input-nama-pemesan')?.focus();
      return;
    }
    setNameError(false);
    window.open(generateWhatsAppOrderUrl(), '_blank', 'noopener noreferrer');
  };

  if (items.length === 0) {
    return (
      <main className="shop-shell mx-auto px-4 py-5 pb-28">
        <div className="flex items-center justify-between gap-3 mb-4">
          <h1 className="text-xl font-bold text-[#1A1614]">Keranjang</h1>
          <button
            onClick={onContinueShopping}
            className="inline-flex items-center gap-1.5 shrink-0 rounded-xl border border-[#eadfce] bg-white px-3 py-2 text-xs font-semibold text-[#1A1614] shadow-xs hover:bg-[#FAF6F0] active:scale-95 transition cursor-pointer"
          >
            <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <span>Tambah Menu</span>
          </button>
        </div>

        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#EADFC8] shadow-xs my-4">
          <img
            alt="Empty Cart"
            className="w-20 h-20 mx-auto mb-5 object-contain drop-shadow-xs opacity-90 hover:scale-105 transition-transform duration-300"
            src="https://jasdorkopi.id/storage/branding/01KYXYXERGVH7ZXQ1296QC3670.ico"
          />
          <p className="font-semibold text-base text-[#1A1614]">Keranjang masih kosong</p>
          <p className="text-sm text-[#A08972] mt-1 mb-6">Yuk pilih menu favoritmu dulu.</p>
          <button
            onClick={onContinueShopping}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#1A1614] hover:bg-[#2A221C] text-white text-sm font-semibold active:scale-95 transition-transform shadow-md cursor-pointer"
          >
            Belanja Sekarang
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="shop-shell mx-auto px-4 py-5 pb-32">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <h1 className="text-xl font-bold text-[#1A1614]">Keranjang ({items.length})</h1>
        <button
          onClick={onContinueShopping}
          className="inline-flex items-center gap-1.5 shrink-0 rounded-xl border border-[#eadfce] bg-white px-3 py-2 text-xs font-semibold text-[#1A1614] shadow-xs hover:bg-[#FAF6F0] active:scale-95 transition cursor-pointer"
        >
          <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
          <span>Tambah Menu</span>
        </button>
      </div>

      {/* Outlet Pickup Info Card */}
      {currentOutlet && (
        <div className="mb-4 bg-white rounded-2xl border border-[#EADFC8] p-3.5 shadow-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#EADFC8] flex items-center justify-center text-[#6B4423] shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase font-bold text-[#A08972] tracking-wider">Pickup di Counter</p>
              <h3 className="font-bold text-xs sm:text-sm text-[#1A1614] truncate">{currentOutlet.name}</h3>
              <p className="text-[11px] text-[#A08972] truncate">{currentOutlet.distance} · Ambil langsung di counter</p>
            </div>
          </div>
          <button
            onClick={onSwitchOutlet}
            className="text-xs font-bold text-[#6B4423] hover:underline shrink-0 cursor-pointer"
          >
            Ganti
          </button>
        </div>
      )}

      {/* Customer Name Input */}
      <div className={`mb-4 bg-white rounded-2xl border-2 p-4 shadow-xs transition-colors ${
        nameError ? 'border-red-400 ring-2 ring-red-200' : 'border-[#EADFC8]'
      }`}>
        <label htmlFor="input-nama-pemesan" className="block mb-1.5">
          <span className="text-xs font-bold text-[#1A1614]">
            Nama Pemesan
            <span className="text-red-500 ml-0.5">*</span>
          </span>
          <span className="text-[10px] text-[#A08972] ml-1.5">(wajib diisi)</span>
        </label>
        <input
          id="input-nama-pemesan"
          type="text"
          value={customerName}
          onChange={(e) => {
            setCustomerName(e.target.value);
            if (e.target.value.trim()) setNameError(false);
          }}
          placeholder="Contoh: Budi, Sarah, Pak Reza..."
          className={`w-full px-3.5 py-2.5 text-sm rounded-xl border transition focus:outline-none ${
            nameError
              ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200 placeholder-red-300'
              : 'border-[#EADFC8] bg-[#FAFAF9] focus:border-[#6B4423] focus:ring-2 focus:ring-[#6B4423]/20 placeholder-[#C8B89A]'
          } text-[#1A1614]`}
          autoComplete="name"
        />
        {nameError && (
          <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Nama pemesan harus diisi sebelum memesan
          </p>
        )}
      </div>

      {/* Cart Items List */}
      <div className="space-y-3 mb-5">
        {items.map((item) => (
          <div
            key={item.cartItemId}
            className="bg-white rounded-2xl border border-[#EADFC8] p-3.5 shadow-xs flex gap-3"
          >
            <div className="w-16 h-16 rounded-xl bg-[#FAF6F0] shrink-0 overflow-hidden flex items-center justify-center p-1 border border-[#FAF6F0]">
              <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-xs sm:text-sm text-[#1A1614] leading-snug line-clamp-1">
                    {item.name}
                  </h3>
                  <button
                    onClick={() => onRemoveItem(item.cartItemId)}
                    className="text-[#A08972] hover:text-red-500 transition p-1 shrink-0 cursor-pointer"
                    title="Hapus"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>

                {/* Options display */}
                {Object.values(item.selectedOptions).length > 0 && (
                  <p className="text-[11px] text-[#A08972] mt-0.5 line-clamp-1">
                    {Object.values(item.selectedOptions)
                      .map((o) => o.label)
                      .join(' · ')}
                  </p>
                )}

                {/* Addons display */}
                {item.selectedAddons.length > 0 && (
                  <p className="text-[10px] text-[#6B4423] mt-0.5 line-clamp-1">
                    + {item.selectedAddons.map((a) => a.name).join(', ')}
                  </p>
                )}

                {/* Notes */}
                {item.notes && (
                  <p className="text-[10px] text-[#8A7A6A] italic mt-0.5 line-clamp-1">
                    "{item.notes}"
                  </p>
                )}
              </div>

              {/* Price & Quantity Controls */}
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#FAF6F0]">
                <span className="font-bold text-xs sm:text-sm text-[#1A1614]">
                  {formatRupiah(item.totalItemPrice)}
                </span>

                <div className="flex items-center gap-2 bg-[#FAF6F0] rounded-xl p-0.5 border border-[#EADFC8]">
                  <button
                    onClick={() => onUpdateQuantity(item.cartItemId, -1)}
                    className="w-6 h-6 rounded-lg bg-white hover:bg-[#EADFC8] text-[#1A1614] font-bold text-xs flex items-center justify-center transition cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-xs font-bold text-[#1A1614] px-1">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.cartItemId, 1)}
                    className="w-6 h-6 rounded-lg bg-white hover:bg-[#EADFC8] text-[#1A1614] font-bold text-xs flex items-center justify-center transition cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-2xl border-2 border-[#EADFC8] p-4 shadow-xs space-y-2.5 mb-5">
        <h3 className="font-bold text-sm text-[#1A1614] pb-2 border-b border-[#FAF6F0]">
          Rincian Pembayaran
        </h3>

        <div className="flex items-center justify-between text-xs text-[#5C4A3A]">
          <span>Subtotal Pesanan</span>
          <span className="font-semibold text-[#1A1614]">{formatRupiah(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-emerald-700">
          <span className="flex items-center gap-1.5">
            <span>Diskon 50% Jasdor</span>
            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-1.5 py-0.2 rounded">
              VOUCHER
            </span>
          </span>
          <span className="font-bold">−{formatRupiah(discount)}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-[#5C4A3A]">
          <button
            type="button"
            onClick={onOpenFeeInfo}
            className="flex items-center gap-1 text-[#6B4423] hover:underline cursor-pointer"
          >
            <span>Biaya Jasa Jasdor</span>
            <svg className="w-3.5 h-3.5 text-[#A08972]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <div className="text-right">
            <span className="font-semibold text-[#1A1614]">{formatRupiah(fee)}</span>
            <span className="text-[9px] text-[#A08972] block">{feeLabel}</span>
          </div>
        </div>

        <div className="pt-2 border-t border-[#EADFC8] border-dashed flex items-center justify-between">
          <div>
            <span className="text-xs text-[#A08972] block">Total Pembayaran</span>
            <span className="font-extrabold text-base sm:text-lg text-[#1A1614]">
              {formatRupiah(grandTotal)}
            </span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full inline-block">
              Hemat {formatRupiah(discount - fee)}!
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-2">
        <button
          type="button"
          onClick={handleOrder}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-[0.98] transition cursor-pointer"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>Pesan Sekarang via WhatsApp</span>
        </button>

        <button
          onClick={onClearCart}
          className="w-full py-2.5 text-xs text-[#A08972] hover:text-red-500 transition font-semibold cursor-pointer"
        >
          Kosongkan Keranjang
        </button>
      </div>
    </main>
  );
};
