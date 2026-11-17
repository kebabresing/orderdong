import { useState, useEffect } from 'react';
import { CartItem } from '../types';

const CART_STORAGE_KEY = 'jasdor_cart';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading cart:', e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Error saving cart:', e);
    }
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      // Check if identical item already exists (same product, same options, same addons)
      const existingIndex = prev.findIndex(
        (i) =>
          i.productId === item.productId &&
          JSON.stringify(i.selectedOptions) === JSON.stringify(item.selectedOptions) &&
          JSON.stringify(i.selectedAddons) === JSON.stringify(item.selectedAddons) &&
          i.notes === item.notes
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        const existing = updated[existingIndex];
        const newQty = existing.quantity + item.quantity;
        updated[existingIndex] = {
          ...existing,
          quantity: newQty,
          totalItemPrice: existing.unitPrice * newQty
        };
        return updated;
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => {
          if (i.cartItemId === cartItemId) {
            const newQty = i.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...i,
              quantity: newQty,
              totalItemPrice: i.unitPrice * newQty
            };
          }
          return i;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.totalItemPrice, 0);

  // Calculate discount & fee based on Jasdor rules
  let discount = 0;
  let fee = 0;

  if (subtotal > 0) {
    if (subtotal >= 70000) {
      discount = Math.min(Math.floor(subtotal * 0.5), 30000);
      fee = 3000;
    } else if (subtotal >= 50000) {
      discount = Math.min(Math.floor(subtotal * 0.5), 30000);
      fee = 4000;
    } else {
      discount = Math.min(Math.floor(subtotal * 0.5), 35000);
      fee = 5000;
    }
  }

  const grandTotal = Math.max(0, subtotal - discount + fee);

  return {
    items,
    totalItems,
    subtotal,
    discount,
    fee,
    grandTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
}

