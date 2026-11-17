import React, { useState, useEffect } from 'react';
import { Product, ProductChoice, ProductAddonChoice, CartItem } from '../../types';
import { formatRupiah } from '../../utils/formatters';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, { value: string; label: string; price: number }>
  >({});
  const [selectedAddons, setSelectedAddons] = useState<
    { value: string; name: string; price: number }[]
  >([]);
  const [notes, setNotes] = useState('');

  // Reset defaults when product changes
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setNotes('');
      setSelectedAddons([]);

      // Set default options if options exist
      const initialOptions: Record<string, { value: string; label: string; price: number }> = {};
      if (product.options && product.options.length > 0) {
        product.options.forEach((opt) => {
          if (opt.choices && opt.choices.length > 0) {
            initialOptions[opt.key] = {
              value: opt.choices[0].value,
              label: opt.choices[0].label,
              price: opt.choices[0].price || 0
            };
          }
        });
      }
      setSelectedOptions(initialOptions);
    }
  }, [product, isOpen]);

  if (!isOpen || !product) return null;

  // Calculate unit price: base price + option deltas + addon deltas
  const optionsDelta = Object.values(selectedOptions).reduce((sum, o) => sum + (o.price || 0), 0);
  const addonsDelta = selectedAddons.reduce((sum, a) => sum + (a.price || 0), 0);
  const unitPrice = product.price + optionsDelta + addonsDelta;
  const totalPrice = unitPrice * quantity;

  const handleSelectOption = (optKey: string, choice: ProductChoice) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optKey]: {
        value: choice.value,
        label: choice.label,
        price: choice.price || 0
      }
    }));
  };

  const handleToggleAddon = (addon: ProductAddonChoice) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.value === addon.value);
      if (exists) {
        return prev.filter((a) => a.value !== addon.value);
      } else {
        return [...prev, { value: addon.value, name: addon.name, price: addon.price }];
      }
    });
  };

  const handleSubmit = () => {
    const cartItemId = `${product.id}-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    const cartItem: CartItem = {
      cartItemId,
      productId: product.id,
      name: product.name,
      image: product.image,
      basePrice: product.price,
      unitPrice,
      quantity,
      selectedOptions,
      selectedAddons,
      notes: notes.trim(),
      totalItemPrice: totalPrice
    };
    onAddToCart(cartItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Sheet */}
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10 max-h-[90vh]">
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1 cursor-grab sm:hidden">
          <div className="w-10 h-1.5 bg-[#EADFC8] rounded-full" />
        </div>

        {/* Header with Product preview */}
        <div className="p-4 sm:p-5 border-b border-[#EADFC8] flex items-start justify-between gap-3 bg-[#FAF6F0]/60">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-xl bg-white border border-[#EADFC8] p-1 shrink-0 overflow-hidden shadow-xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#1A1614] leading-snug">{product.name}</h3>
              <p className="text-xs text-[#A08972] line-clamp-1 mt-0.5">{product.description}</p>
              <p className="font-bold text-sm text-[#6B4423] mt-1">{formatRupiah(unitPrice)}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#5C4A3A] flex items-center justify-center transition cursor-pointer shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Option List */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {/* Options (Temperature, Size, Beans, Sugar, Ice) */}
          {product.options && product.options.map((opt) => (
            <div key={opt.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A1614]">
                  {opt.label}
                </span>
                <span className="text-[10px] text-[#A08972] font-semibold bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#EADFC8]">
                  Pilih 1
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {opt.choices.map((choice) => {
                  const isSelected = selectedOptions[opt.key]?.value === choice.value;
                  return (
                    <button
                      key={choice.value}
                      type="button"
                      onClick={() => handleSelectOption(opt.key, choice)}
                      className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? 'border-[#6B4423] bg-white ring-2 ring-[#6B4423]/20 shadow-xs'
                          : 'border-[#EADFC8] bg-[#FAF6F0]/60 hover:bg-[#FAF6F0] text-[#5C4A3A]'
                      }`}
                    >
                      <span className={`text-xs ${isSelected ? 'font-bold text-[#1A1614]' : 'font-medium'}`}>
                        {choice.label}
                      </span>
                      {choice.price > 0 && (
                        <span className="text-[11px] font-semibold text-[#6B4423] mt-0.5">
                          +{formatRupiah(choice.price)}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Addons (Syrups, Toppings) */}
          {product.addons && product.addons.map((group) => (
            <div key={group.key} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A1614]">
                  {group.label || group.name}
                </span>
                <span className="text-[10px] text-[#A08972] font-semibold bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#EADFC8]">
                  Opsional
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {group.choices.map((addon) => {
                  const isChecked = selectedAddons.some((a) => a.value === addon.value);
                  return (
                    <button
                      key={addon.value}
                      type="button"
                      onClick={() => handleToggleAddon(addon)}
                      className={`p-2.5 rounded-xl border text-left transition flex items-center justify-between gap-1.5 cursor-pointer ${
                        isChecked
                          ? 'border-[#6B4423] bg-white ring-2 ring-[#6B4423]/20 shadow-xs'
                          : 'border-[#EADFC8] bg-[#FAF6F0]/60 hover:bg-[#FAF6F0] text-[#5C4A3A]'
                      }`}
                    >
                      <div className="min-w-0">
                        <span className={`text-xs block truncate ${isChecked ? 'font-bold text-[#1A1614]' : 'font-medium'}`}>
                          {addon.name}
                        </span>
                        <span className="text-[10px] font-semibold text-[#6B4423]">
                          +{formatRupiah(addon.price)}
                        </span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                          isChecked ? 'bg-[#6B4423] border-[#6B4423] text-white' : 'border-[#EADFC8] bg-white'
                        }`}
                      >
                        {isChecked && (
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Notes textarea */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1614] block">
              Catatan Pesanan
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: jangan terlalu manis, dipisah sedotan..."
              rows={2}
              className="w-full p-3 rounded-xl border border-[#EADFC8] text-xs text-[#1A1614] bg-white focus:outline-none focus:border-[#6B4423] focus:ring-2 focus:ring-[#6B4423]/20 transition resize-none"
            />
          </div>
        </div>

        {/* Footer actions: Quantity + Add to Cart */}
        <div className="p-4 sm:p-5 border-t border-[#EADFC8] bg-[#FAF6F0]/70 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0 bg-white border border-[#EADFC8] rounded-xl p-1 shadow-xs">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-8 h-8 rounded-lg bg-[#FAF6F0] hover:bg-[#EADFC8] disabled:opacity-40 text-[#1A1614] font-bold flex items-center justify-center transition cursor-pointer"
            >
              −
            </button>
            <span className="w-8 text-center font-bold text-sm text-[#1A1614]">{quantity}</span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-lg bg-[#FAF6F0] hover:bg-[#EADFC8] text-[#1A1614] font-bold flex items-center justify-center transition cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 py-3 px-4 rounded-xl bg-[#1A1614] hover:bg-[#2A221C] text-white font-bold text-xs sm:text-sm flex items-center justify-between shadow-md active:scale-[0.98] transition cursor-pointer"
          >
            <span>Tambah ke Keranjang</span>
            <span>{formatRupiah(totalPrice)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

