import React, { useState } from 'react';
import { formatRupiah } from '../utils/formatters';

interface RealtimeOrder {
  id: string;
  initial: string;
  name: string;
  outlet: string;
  status: 'Selesai' | 'Sedang Dibuat' | 'Menunggu Pickup';
  itemsText: string;
  timeAgo: string;
  total: number;
}

const SAMPLE_LIVE_ORDERS: RealtimeOrder[] = [
  {
    id: 'JD-20261117-011',
    initial: 'W',
    name: 'Wep*',
    outlet: 'Gandaria Kramat Pela',
    status: 'Selesai',
    itemsText: 'Kopi Kenangan Mantan, Taro Milk',
    timeAgo: '9 menit yang lalu',
    total: 31067
  },
  {
    id: 'JD-20261117-010',
    initial: 'P',
    name: 'Putr*',
    outlet: 'SPBU Minangkabau Jakarta Selatan',
    status: 'Selesai',
    itemsText: 'Creamy Aren Latte (Large), Americano',
    timeAgo: '18 menit yang lalu',
    total: 34500
  },
  {
    id: 'JD-20261117-009',
    initial: 'R',
    name: 'Rian*',
    outlet: 'Cik Ditiro Menteng',
    status: 'Sedang Dibuat',
    itemsText: 'Spanish Latte (Large)',
    timeAgo: '24 menit yang lalu',
    total: 18500
  },
  {
    id: 'JD-20261117-008',
    initial: 'A',
    name: 'Andi*',
    outlet: 'Kota Kasablanka',
    status: 'Selesai',
    itemsText: 'Butterscotch Aren Latte, Choco Panini',
    timeAgo: '35 menit yang lalu',
    total: 39000
  }
];

export const OrderPage: React.FC = () => {
  const [phoneQuery, setPhoneQuery] = useState('');
  const [queriedOrder, setQueriedOrder] = useState<RealtimeOrder | null>(null);
  const [searched, setSearched] = useState(false);
  const [selectedDetailOrder, setSelectedDetailOrder] = useState<RealtimeOrder | null>(null);

  const handleSearchOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneQuery.trim()) return;

    setSearched(true);
    // Find matching order or simulate realistic user order
    const match = SAMPLE_LIVE_ORDERS.find((o) => o.name.toLowerCase().includes(phoneQuery.toLowerCase()));
    if (match) {
      setQueriedOrder(match);
    } else {
      // Mock order for this user
      setQueriedOrder({
        id: `JD-20261117-${Math.floor(100 + Math.random() * 900)}`,
        initial: phoneQuery.slice(-1).toUpperCase() || 'U',
        name: `${phoneQuery.slice(0, 4)}****`,
        outlet: 'SPBU Minangkabau Jakarta Selatan (Container)',
        status: 'Selesai',
        itemsText: 'Kopi Kenangan Mantan, Creamy Aren Latte',
        timeAgo: 'Baru saja',
        total: 28500
      });
    }
  };

  return (
    <main className="shop-shell mx-auto px-4 py-5 pb-28">
      {/* Search Header */}
      <div className="mb-6 mt-2">
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-8 h-8 rounded-xl bg-[#FAF6F0] border border-[#EADFC8] flex items-center justify-center text-[#6B4423]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h1 className="text-xl font-extrabold text-[#1A1614] tracking-tight">
            Cek Status Pesanan Anda
          </h1>
        </div>
        <p className="text-[13px] text-[#A08972] mb-4">
          Masukkan nomor WhatsApp untuk memantau status pesanan secara langsung.
        </p>

        <form onSubmit={handleSearchOrder} className="relative">
          <div className="track-search-bar flex items-center gap-2 rounded-full border border-[#EADFC8] bg-white p-1.5 shadow-[0_4px_16px_rgba(26,22,20,0.05)] transition-all focus-within:border-[#6B4423]">
            <div aria-hidden="true" className="pl-3 pr-1 text-[#25D366] shrink-0">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <input
              type="tel"
              inputMode="numeric"
              value={phoneQuery}
              onChange={(e) => setPhoneQuery(e.target.value)}
              placeholder="Cth: 08123456789"
              required
              className="flex-1 min-w-0 border-0 bg-transparent py-2.5 pr-2 text-sm font-semibold text-[#1A1614] placeholder-[#D2B996] outline-none"
            />
            <button
              type="submit"
              className="bg-[#6B4423] hover:bg-[#5C4A3A] text-white px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm shrink-0 shadow-xs transition-colors active:scale-95 cursor-pointer"
            >
              Cek Status
            </button>
          </div>
        </form>
      </div>

      {/* Searched Order Result */}
      {searched && queriedOrder && (
        <div className="mb-6 bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] border-2 border-[#EADFC8] rounded-2xl p-4 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-bold text-[#6B4423] bg-[#F3E9DB] px-2 py-0.5 rounded">
              HASIL PENCARIAN
            </span>
            <span className="text-[10px] font-mono text-[#A08972]">{queriedOrder.id}</span>
          </div>

          <div className="flex items-start justify-between gap-2 mt-2">
            <div>
              <h3 className="font-extrabold text-sm text-[#1A1614]">{queriedOrder.outlet}</h3>
              <p className="text-xs text-[#5C4A3A] mt-1">{queriedOrder.itemsText}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              <span>{queriedOrder.status}</span>
            </span>
          </div>

          <div className="flex items-center justify-between mt-3 pt-2.5 border-t border-[#EADFC8]/60 text-xs font-bold text-[#1A1614]">
            <span className="text-[#A08972] text-[11px] font-normal">{queriedOrder.timeAgo}</span>
            <span className="text-[#6B4423] text-sm">{formatRupiah(queriedOrder.total)}</span>
          </div>
        </div>
      )}

      {/* Live Orders Section */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-sm text-[#1A1614]">Pesanan Real-Time Pelanggan</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-wider uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full shadow-xs shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>LIVE</span>
        </span>
      </div>

      <div className="space-y-3">
        {SAMPLE_LIVE_ORDERS.map((order) => (
          <div
            key={order.id}
            onClick={() => setSelectedDetailOrder(order)}
            className="block bg-white border border-[#EADFC8] rounded-2xl p-4 shadow-xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
          >
            <div className="flex items-start justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-xl bg-[#FAF6F0] border border-[#EADFC8] flex items-center justify-center text-[#6B4423] font-black text-xs shrink-0">
                  {order.initial}
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-xs font-extrabold text-[#1A1614]">{order.name}</span>
                    <span className="text-[10px] text-[#A08972] font-mono">• {order.id}</span>
                  </div>
                  <span className="text-[11px] text-[#8A7A6A] leading-tight line-clamp-1 mt-0.5 font-medium">
                    {order.outlet}
                  </span>
                </div>
              </div>

              <span
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${
                  order.status === 'Selesai'
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}
              >
                {order.status === 'Selesai' ? (
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                )}
                <span>{order.status}</span>
              </span>
            </div>

            <div className="my-2.5 bg-[#FAF6F0] rounded-xl px-3 py-2 border border-[#EADFC8]/60 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-[#8A7A6A] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-xs font-semibold text-[#1A1614] line-clamp-1 leading-snug">
                {order.itemsText}
              </p>
            </div>

            <div className="mt-2.5 pt-2.5 border-t border-[#EADFC8]/60 border-dashed flex justify-between items-center">
              <span className="text-[10px] text-[#A08972]">{order.timeAgo}</span>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs text-[#6B4423]">
                  {formatRupiah(order.total)}
                </span>
                <span className="text-[11px] font-semibold text-[#6B4423] underline">
                  Lihat Detail
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Detail Modal */}
      {selectedDetailOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setSelectedDetailOrder(null)}
          />
          <div className="bg-white rounded-3xl p-5 w-full max-w-sm relative z-10 border border-[#EADFC8] shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#EADFC8] mb-3">
              <h3 className="font-bold text-sm text-[#1A1614]">Detail Pesanan Real-time</h3>
              <button
                onClick={() => setSelectedDetailOrder(null)}
                className="w-7 h-7 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#5C4A3A] cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-[#A08972]">Nomor Invoice</span>
                <span className="font-mono font-bold text-[#1A1614]">{selectedDetailOrder.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A08972]">Pelanggan</span>
                <span className="font-bold text-[#1A1614]">{selectedDetailOrder.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A08972]">Outlet</span>
                <span className="font-bold text-[#1A1614] text-right">{selectedDetailOrder.outlet}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A08972]">Pesanan</span>
                <span className="font-bold text-[#1A1614] text-right">{selectedDetailOrder.itemsText}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#A08972]">Status</span>
                <span className="font-bold text-emerald-700">{selectedDetailOrder.status}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#FAF6F0] font-bold text-sm">
                <span>Total Bayar</span>
                <span className="text-[#6B4423]">{formatRupiah(selectedDetailOrder.total)}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedDetailOrder(null)}
              className="w-full mt-4 py-2.5 bg-[#1A1614] text-white rounded-xl text-xs font-semibold cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

