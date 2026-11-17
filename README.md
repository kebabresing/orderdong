# Jasdor Kopi — Pixel-Perfect Clone Replica

> **Catatan Penting:** Proyek ini merupakan website replika yang dibuat khusus untuk keperluan pembelajaran, demonstrasi teknis, dan pengembangan UI/UX reverse engineering. Website ini **bukan** website resmi Jasdor atau Kopi Kenangan.

---

## 🚀 Fitur yang Direplikasi

### 1. Pemilihan Outlet (`/pilih-outlet` & Lokasi)
- **Geolocation API:** Deteksi lokasi GPS pengguna dengan fallback manual jika tidak diizinkan.
- **Pencarian Outlet:** Filter real-time berdasarkan nama outlet atau alamat.
- **Daftar 40 Outlet:** Dilengkapi dengan jarak, status buka/tutup, jam operasional, dan badge *Drive Thru*.
- **Modal Detail Outlet:** Informasi alamat lengkap, tombol Salin Alamat menggunakan Clipboard API, tombol Buka di Google Maps, nomor telepon, dan jam operasional harian.
- **Simulasi Seleksi & Redirect:** Animasi radar pencarian lokasi dan progress bar redirect ke beranda.

### 2. Navigasi Utama & Bottom Navigation
- **Header:** Sticky navbar dengan branding Jasdor Kopi, indikator outlet terpilih, dan tombol Menu Utama.
- **Bottom Navigation:** Optimal untuk mobile (360px–430px) dengan akses cepat ke:
  - **Home:** Halaman utama dengan hero banner, kategori menu, dan pencarian cepat.
  - **Kategori:** Katalog 4 kategori (*New Product, Coffee, Non Coffee, Food*).
  - **Lokasi:** Tombol melayang (*floating action*) untuk memilih atau mengganti outlet.
  - **Keranjang:** Dilengkapi badge indikator jumlah produk aktif.
  - **Lacak:** Halaman pelacakan pesanan real-time.

### 3. Menu Utama Jasdor (Bottom Sheet Modals)
- **Jasdor Loyalty Card:** Peta rank member (*Newbie, Anak Jasdor, Jasdor Regular, Jasdor Addict, Jasdor Veteran*) dengan pengecekan status nomor WhatsApp.
- **Best Seller:** 5 menu terlaris dengan card ranking, visual badge, jumlah pcs terjual, dan total transaksi:
  1. *Kopi Kenangan Mantan* (Top 1 · 2.124 pcs · Rp25.836.090)
  2. *Creamy Aren Latte* (Top 2 · 904 pcs · Rp12.199.953)
  3. *Spanish Latte* (Top 3 · 719 pcs · Rp8.399.361)
  4. *Americano* (#4 · 449 pcs · Rp5.085.353)
  5. *Butterscotch Aren Latte* (#5 · 398 pcs · Rp4.816.586)
- **FAQ (Pertanyaan Umum):** Komponen accordion interaktif yang dapat dibuka-tutup.
- **Tentang Jasdor:** Penjelasan layanan, panduan 4 langkah pemesanan, estimasi waktu, dan garansi uang kembali 45 menit.
- **Password WiFi Teman Kenangan:** Password harian dinamis sesuai tanggal (misal: `RasaKangen@17`), tombol salin clipboard dengan animasi feedback, dan kalender password 31 hari.
- **Informasi Fee Jasdor:** Rincian besaran diskon 50%, batas potongan maksimal, dan fee jasa untuk 3 tier belanja.
- **Kontak Admin:** Integrasi link WhatsApp Admin dan Channel WhatsApp resmi.
- **Welcome Popup:** Popup interaktif "Happy Day" dengan opsi "Jangan tampilkan lagi selama 12 jam".

### 4. Customizer Produk & Keranjang Belanja
- **Modal Kustomisasi Produk:**
  - Pilihan temperatur (*Ice / Hot*).
  - Pilihan ukuran (*Regular / Large / Jumbo*).
  - Pilihan biji kopi (*Kenangan Blend / Juwara Beans*).
  - Tingkat gula (*Normal / Less / No Sugar*).
  - Tingkat es (*Normal / Less / No Ice*).
  - Pilihan sirup & topping (*Vanilla, Boba, Grass Jelly, Oreo, Whipped Cream, dll.*).
  - Catatan khusus untuk barista.
  - Counter kuantitas pesanan.
  - Perhitungan harga total real-time.
- **Keranjang Belanja:**
  - Simpanan data sementara menggunakan `localStorage`.
  - Penambahan & pengurangan jumlah produk atau penghapusan item.
  - Perhitungan otomatis Subtotal, Diskon Voucher 50%, Biaya Jasdor, dan Total Bayar.
  - Checkout instan yang memformat pesanan ke pesan WhatsApp siap kirim.

### 5. Lacak Pesanan Real-Time
- Input pencarian status pesanan menggunakan nomor WhatsApp.
- Feed pesanan langsung (*LIVE*) dari pelanggan lain dengan status penyelesaian dan waktu tunggu.

---

## 🛠️ Teknologi yang Digunakan

- **React 18** (Functional components, custom hooks)
- **Vite 5** (Fast build tool & HMR)
- **TypeScript** (Strict type safety)
- **Tailwind CSS** (Utility-first responsive styling)
- **Lucide React** (Vector icons)
- **Bunny Fonts** (*Plus Jakarta Sans*)

---

## 📁 Struktur Direktori

```
jasdor/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── extracted_styles.css
│   ├── types/
│   │   └── index.ts
│   ├── data/
│   │   ├── config.ts
│   │   ├── outlets.ts
│   │   ├── products.ts
│   │   ├── bestsellers.ts
│   │   ├── faq.ts
│   │   ├── wifi.ts
│   │   └── fee.ts
│   ├── hooks/
│   │   ├── useCart.ts
│   │   ├── useOutlet.ts
│   │   └── useLocation.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   └── geo.ts
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.tsx
│   │   │   ├── BottomNav.tsx
│   │   │   └── ModalWrapper.tsx
│   │   └── modals/
│   │       ├── MenuModal.tsx
│   │       ├── ContactModal.tsx
│   │       ├── BestSellerModal.tsx
│   │       ├── FaqModal.tsx
│   │       ├── AboutModal.tsx
│   │       ├── WifiModal.tsx
│   │       ├── FeeModal.tsx
│   │       ├── WelcomePopup.tsx
│   │       ├── ProductModal.tsx
│   │       ├── OutletDetailModal.tsx
│   │       └── LocationSuccessModal.tsx
│   ├── layouts/
│   │   └── MainLayout.tsx
│   └── pages/
│       ├── HomePage.tsx
│       ├── PilihOutletPage.tsx
│       ├── KategoriPage.tsx
│       ├── KeranjangPage.tsx
│       ├── LoyaltyPage.tsx
│       └── OrderPage.tsx
```

---

## 💻 Cara Instalasi dan Menjalankan Proyek

### Prasyarat
- **Node.js** (versi 18 ke atas)
- **npm** (versi 9 ke atas)

### Langkah Menjalankan:

1. **Buka folder proyek di terminal:**
   ```bash
   cd c:\Users\Sueb\Desktop\jasdor
   ```

2. **Install dependencies (jika belum):**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka browser di:**
   ```
   http://localhost:5173/
   ```

5. **Build untuk produksi:**
   ```bash
   npm run build
   ```

