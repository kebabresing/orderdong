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
  const [openAddonGroups, setOpenAddonGroups] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setNotes('');
      setSelectedAddons([]);
      setOpenAddonGroups({});

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const optionsDelta = Object.values(selectedOptions).reduce((sum, o) => sum + (o.price || 0), 0);
  const addonsDelta = selectedAddons.reduce((sum, a) => sum + (a.price || 0), 0);
  const unitPrice = product.price + optionsDelta + addonsDelta;
  const totalPrice = unitPrice * quantity;
  const discountedUnitPrice = Math.round(unitPrice * 0.5);
  const discountedTotalPrice = discountedUnitPrice * quantity;

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
      }
      return [...prev, { value: addon.value, name: addon.name, price: addon.price }];
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-[440px] h-full sm:h-[92vh] sm:rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {/* Warm Studio Hero */}
          <div className="relative w-full h-56 bg-gradient-to-b from-[#fff7ed] via-[#fafafa] to-white flex items-center justify-center p-4">
            <button
              type="button"
              onClick={onClose}
              aria-label="Kembali"
              className="absolute top-3.5 left-3.5 w-10 h-10 rounded-full bg-white text-[#18181b] shadow-[0_3px_10px_rgba(24,24,27,0.14)] flex items-center justify-center hover:bg-[#f4f4f5] active:scale-95 transition cursor-pointer z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <img
              src={product.image}
              alt={product.name}
              className="h-44 w-44 object-contain mix-blend-multiply"
            />
          </div>

          {/* Product Info */}
          <div className="px-4 pt-2 pb-4 border-b border-[#f0f0f2]">
            <div className="flex items-start justify-between gap-3">
              <h1 className="text-[20px] font-extrabold leading-tight text-[#18181b]">
                {product.name}
              </h1>
              <div className="text-right shrink-0">
                <span className="inline-block bg-[#ea580c] text-white rounded-md px-2 py-1 text-[13px] font-extrabold leading-none">
                  {formatRupiah(discountedUnitPrice)}
                </span>
                <span className="block text-[11px] font-bold text-[#a1a1aa] line-through mt-1 leading-none">
                  {formatRupiah(unitPrice)}
                </span>
              </div>
            </div>
            {product.description && (
              <p className="text-[12px] text-[#71717a] mt-2 leading-relaxed">
                {product.description}
              </p>
            )}
          </div>

          {/* Customization Sections */}
          <div className="px-4 py-4 space-y-5">
            {product.options &&
              product.options.map((opt) => (
                <div key={opt.key} className="space-y-2.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[14px] font-extrabold text-[#18181b]">{opt.label}</span>
                    <span className="text-[11px] font-semibold text-[#a1a1aa]">Pilih 1</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {opt.choices.map((choice) => {
                      const isSelected = selectedOptions[opt.key]?.value === choice.value;
                      return (
                        <button
                          key={choice.value}
                          type="button"
                          onClick={() => handleSelectOption(opt.key, choice)}
                          className={`relative rounded-xl px-3 py-3.5 text-center transition cursor-pointer flex flex-col items-center justify-center min-h-[62px] ${
                            isSelected
                              ? 'border-[1.5px] border-[#ea580c] bg-[#fff7ed]/50 shadow-xs'
                              : 'border border-[#e4e4e7] bg-white hover:border-[#fed7aa]'
                          }`}
                        >
                          <span
                            className={`absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center ${
                              isSelected
                                ? 'border-2 border-[#ea580c]'
                                : 'border border-[#d4d4d8]'
                            }`}
                          >
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
                            )}
                          </span>

                          <span
                            className={`text-[12.5px] leading-snug pr-3 ${
                              isSelected ? 'font-extrabold text-[#18181b]' : 'font-semibold text-[#52525b]'
                            }`}
                          >
                            {choice.label}
                          </span>
                          {choice.price > 0 && (
                            <span className="text-[11px] font-bold text-[#ea580c] mt-0.5">
                              +{formatRupiah(choice.price)}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

            {/* Expandable Addons */}
            {product.addons &&
              product.addons.map((group) => {
                const isExpanded = Boolean(openAddonGroups[group.key]);
                const groupSelectedCount = group.choices.filter((c) =>
                  selectedAddons.some((a) => a.value === c.value)
                ).length;

                return (
                  <div key={group.key} className="border-t border-[#f0f0f2] pt-3">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenAddonGroups((prev) => ({
                          ...prev,
                          [group.key]: !prev[group.key]
                        }))
                      }
                      className="w-full flex items-center justify-between py-1 cursor-pointer"
                    >
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[14px] font-extrabold text-[#18181b]">
                          {group.label || group.name}
                        </span>
                        <span className="text-[11px] font-semibold text-[#a1a1aa]">
                          Opsional · Bisa pilih lebih dari 1
                        </span>
                        {groupSelectedCount > 0 && (
                          <span className="text-[10px] font-extrabold bg-[#fff7ed] text-[#ea580c] px-1.5 py-0.5 rounded">
                            {groupSelectedCount} dipilih
                          </span>
                        )}
                      </div>
                      <svg
                        className={`w-4 h-4 text-[#71717a] transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isExpanded && (
                      <div className="grid grid-cols-2 gap-2.5 mt-3">
                        {group.choices.map((addon) => {
                          const isChecked = selectedAddons.some((a) => a.value === addon.value);
                          return (
                            <button
                              key={addon.value}
                              type="button"
                              onClick={() => handleToggleAddon(addon)}
                              className={`relative rounded-xl px-3 py-3 text-left transition cursor-pointer flex items-center justify-between gap-2 ${
                                isChecked
                                  ? 'border-[1.5px] border-[#ea580c] bg-[#fff7ed]/60'
                                  : 'border border-[#e4e4e7] bg-white hover:border-[#fed7aa]'
                              }`}
                            >
                              <div className="min-w-0">
                                <span
                                  className={`text-[12px] block truncate ${
                                    isChecked ? 'font-extrabold text-[#18181b]' : 'font-semibold text-[#52525b]'
                                  }`}
                                >
                                  {addon.name}
                                </span>
                                <span className="text-[11px] font-bold text-[#ea580c]">
                                  +{formatRupiah(addon.price)}
                                </span>
                              </div>
                              <span
                                className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                                  isChecked
                                    ? 'bg-[#ea580c] border-[#ea580c] text-white'
                                    : 'border-[#d4d4d8] bg-white'
                                }`}
                              >
                                {isChecked && (
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

            {/* Catatan */}
            <div className="border-t border-[#f0f0f2] pt-3 space-y-2 pb-4">
              <div className="flex items-baseline gap-1.5">
                <label htmlFor="catatan-pesanan" className="text-[14px] font-extrabold text-[#18181b]">
                  Catatan
                </label>
                <span className="text-[11px] font-semibold text-[#a1a1aa]">Opsional</span>
              </div>
              <textarea
                id="catatan-pesanan"
                name="catatan-pesanan"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tambahkan catatan (misal: sedotan pisah, less sweet)"
                rows={3}
                className="w-full p-3 rounded-xl border border-[#e4e4e7] bg-[#fafafa] text-[12.5px] text-[#18181b] placeholder-[#a1a1aa] focus:outline-none focus:border-[#ea580c] focus:bg-white transition resize-none"
              />
            </div>
          </div>
        </div>

        {/* Sticky Bottom Bar */}
        <div className="px-4 py-3 border-t border-[#f0f0f2] bg-white flex items-center gap-3 shrink-0 shadow-[0_-4px_12px_rgba(24,24,27,0.04)]">
          <div className="flex items-center border border-[#e4e4e7] rounded-xl h-[48px] bg-white shrink-0">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              disabled={quantity <= 1}
              className="w-10 h-full text-[#18181b] disabled:text-[#d4d4d8] font-extrabold text-base flex items-center justify-center hover:bg-[#f4f4f5] rounded-l-xl transition cursor-pointer"
            >
              −
            </button>
            <span className="w-8 text-center font-extrabold text-[14px] text-[#18181b]">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-full text-[#18181b] font-extrabold text-base flex items-center justify-center hover:bg-[#f4f4f5] rounded-r-xl transition cursor-pointer"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="flex-1 h-[48px] rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-extrabold text-[14.5px] shadow-[0_4px_14px_rgba(234,88,12,0.3)] active:scale-[0.98] transition cursor-pointer"
          >
            + Keranjang {formatRupiah(discountedTotalPrice)}
          </button>
        </div>
      </div>
    </div>
  );
};
