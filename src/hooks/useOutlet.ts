import { useState, useEffect } from 'react';
import { Outlet } from '../types';
import { OUTLETS_DATA } from '../data/outlets';

const OUTLET_STORAGE_KEY = 'jasdor_selected_outlet';

export function useOutlet() {
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(() => {
    try {
      const stored = localStorage.getItem(OUTLET_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Error loading outlet from storage:', e);
    }
    // Default outlet
    return OUTLETS_DATA[0] || null;
  });

  const selectOutlet = (outlet: Outlet) => {
    setSelectedOutlet(outlet);
    try {
      localStorage.setItem(OUTLET_STORAGE_KEY, JSON.stringify(outlet));
      localStorage.setItem('selected_kopken_outlet_id', outlet.id);
      localStorage.setItem('selected_outlet_id', outlet.id);
    } catch (e) {
      console.error('Error saving outlet to storage:', e);
    }
  };

  const clearOutlet = () => {
    setSelectedOutlet(null);
    localStorage.removeItem(OUTLET_STORAGE_KEY);
  };

  return {
    selectedOutlet,
    selectOutlet,
    clearOutlet
  };
}

