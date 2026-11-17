import React, { useState } from 'react';

interface LoyaltyTier {
  name: string;
  vibe: string;
  range: string;
  minOrders: number;
  icon: React.ReactNode;
}

const LOYALTY_TIERS: LoyaltyTier[] = [
  {
    name: 'Newbie',
    vibe: 'Baru coba',
    range: '1–2x',
    minOrders: 1,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 21V11m0 0c-2-4-5-6-8-7 1 4 3 6 8 7zm0 0c2-4 5-6 8-7-1 4-3 6-8 7zM7 21h10" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    )
  },
  {
    name: 'Anak Jasdor',
    vibe: 'Mulai sering',
    range: '3–5x',
    minOrders: 3,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M8 10h8M9 10c0 5 1.5 9 3 9s3-4 3-9M7 10c.5-3 2.5-5 5-5s4.5 2 5 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    )
  },
  {
    name: 'Jasdor Regular',
    vibe: 'Udah langganan',
    range: '6–10x',
    minOrders: 6,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 21c4-3 6-6.5 6-10a6 6 0 10-12 0c0 3.5 2 7 6 10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    )
  },
  {
    name: 'Jasdor Addict',
    vibe: 'Mulai ketagihan',
    range: '11–20x',
    minOrders: 11,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    )
  },
  {
    name: 'Jasdor Veteran',
    vibe: 'Udah jadi keluarga',
    range: '21x+',
    minOrders: 21,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      </svg>
    )
  }
];

export const LoyaltyPage: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [searchResult, setSearchResult] = useState<{
    phone: string;
    totalOrders: number;
    currentTier: LoyaltyTier;
    nextTier: LoyaltyTier | null;
  } | null>(null);

  const handleCheckLoyalty = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    // Deterministic mock generation based on phone digits for realistic testing
    const numDigits = phoneNumber.replace(/\D/g, '');
    const seed = numDigits.slice(-2) ? parseInt(numDigits.slice(-2), 10) : 7;
    const totalOrders = Math.max(1, (seed % 25) + 1);

    let currentTier = LOYALTY_TIERS[0];
    let nextTier: LoyaltyTier | null = LOYALTY_TIERS[1];

    if (totalOrders >= 21) {
      currentTier = LOYALTY_TIERS[4];
      nextTier = null;
    } else if (totalOrders >= 11) {
      currentTier = LOYALTY_TIERS[3];
      nextTier = LOYALTY_TIERS[4];
    } else if (totalOrders >= 6) {
      currentTier = LOYALTY_TIERS[2];
      nextTier = LOYALTY_TIERS[3];
    } else if (totalOrders >= 3) {
      currentTier = LOYALTY_TIERS[1];
      nextTier = LOYALTY_TIERS[2];
    }

    setSearchResult({
      phone: phoneNumber,
      totalOrders,
      currentTier,
      nextTier
    });
  };

  return (
    <main className="shop-shell mx-auto px-4 py-5 pb-28">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-[#1A1614] tracking-tight">
          Jasdor Loyalty
        </h1>
        <p className="text-[13px] text-[#A08972] mt-2 leading-relaxed max-w-md">
          Masukkan nomor WhatsApp yang dipakai saat transaksi. Rank naik otomatis dari pesanan yang sudah dibayar.
        </p>
      </div>

      {/* Phone search input form */}
      <form onSubmit={handleCheckLoyalty} className="mb-6">
        <div className="flex items-center gap-2 rounded-full border border-[#EADFC8] bg-white p-1.5 focus-within:border-[#6B4423] shadow-xs">
          <input
            type="tel"
            inputMode="numeric"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="08xxxxxxxxxx"
            required
            className="flex-1 min-w-0 border-0 bg-transparent py-2.5 px-4 text-sm sm:text-base font-medium text-[#1A1614] placeholder-[#C4B09A] outline-none"
          />
          <button
            type="submit"
            className="bg-[#6B4423] hover:bg-[#5C4A3A] text-white px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm shrink-0 transition-colors shadow-xs active:scale-95 cursor-pointer"
          >
            Cek Rank
          </button>
        </div>
      </form>

      {/* Search Result Card if verified */}
      {searchResult && (
        <div className="mb-8 bg-gradient-to-br from-[#FFFDF9] to-[#F5ECE0] border-2 border-[#EADFC8] rounded-3xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#A08972] tracking-wider">
                STATUS MEMBER
              </span>
              <h3 className="font-extrabold text-lg text-[#1A1614]">{searchResult.currentTier.name}</h3>
              <p className="text-xs text-[#6B4423] font-medium">{searchResult.phone}</p>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#6B4423] text-white flex items-center justify-center shadow-md">
              {searchResult.currentTier.icon}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3.5 border border-[#EADFC8] space-y-2 mt-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#5C4A3A]">Total Pesanan Selesai</span>
              <span className="font-extrabold text-[#1A1614]">{searchResult.totalOrders} Transaksi</span>
            </div>

            {searchResult.nextTier && (
              <div>
                <div className="flex items-center justify-between text-[11px] text-[#A08972] mb-1">
                  <span>Menuju {searchResult.nextTier.name}</span>
                  <span>{searchResult.nextTier.minOrders - searchResult.totalOrders} transaksi lagi</span>
                </div>
                <div className="w-full bg-[#FAF6F0] h-2 rounded-full overflow-hidden border border-[#EADFC8]">
                  <div
                    className="bg-[#6B4423] h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(
                        100,
                        (searchResult.totalOrders / searchResult.nextTier.minOrders) * 100
                      )}%`
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Loyalty Ladder */}
      <h2 className="text-xs uppercase font-extrabold tracking-wider text-[#A08972] mb-3 px-1">
        Peta Rank Jasdor
      </h2>
      <ol className="space-y-3 mb-8">
        {LOYALTY_TIERS.map((tier, idx) => (
          <li
            key={tier.name}
            className="flex items-center justify-between p-3.5 bg-white rounded-2xl border border-[#EADFC8] shadow-xs hover:border-[#6B4423]/50 transition group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] group-hover:bg-[#F3E9DB] text-[#6B4423] flex items-center justify-center transition-colors">
                {tier.icon}
              </div>
              <div>
                <span className="font-bold text-sm text-[#1A1614] block leading-snug">
                  {tier.name}
                </span>
                <span className="text-xs text-[#A08972] block">{tier.vibe}</span>
              </div>
            </div>

            <span className="text-xs font-bold text-[#6B4423] bg-[#F3E9DB] px-3 py-1 rounded-full border border-[#EADFC8]">
              {tier.range}
            </span>
          </li>
        ))}
      </ol>
    </main>
  );
};

