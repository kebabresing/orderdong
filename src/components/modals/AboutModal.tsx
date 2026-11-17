import React from 'react';
import { ModalWrapper } from '../common/ModalWrapper';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title="Tentang Jasdor"
      subtitle="Apa itu Jasdor & cara pemesanan"
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
      }
    >
      <section className="mb-5">
        <h3 className="font-bold text-sm text-[#1A1614] mb-2">Apa itu Jasdor?</h3>
        <div className="text-[13px] leading-relaxed text-[#5C4A3A] space-y-2.5">
          <p>
            <strong>Jasdorkopi.id</strong> adalah layanan pesan kopi hemat yang sudah{' '}
            <strong>otomatis menggunakan Voucher Diskon 50%</strong> (S&amp;K berlaku) di setiap pesanan.
          </p>
          <p>
            Cukup pesan dari web ini dan <strong>terima beres</strong>! Seluruh proses pesanan akan ditangani langsung oleh admin kami. Bapak/Ibu tidak perlu repot memikirkan cara pakai voucher atau mengantre panjang.
          </p>
          <p>
            Bapak/Ibu hanya tinggal bersantai lalu <strong>mengambil pesanan (pickup)</strong> langsung di outlet terdekat saat minumannya sudah siap.
          </p>
        </div>
      </section>

      <section>
        <h3 className="font-bold text-sm text-[#1A1614] mb-3">Cara Pemesanan</h3>
        <ol className="text-[13px] space-y-4">
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-[#1A1614] text-white w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs mt-0.5">
              1
            </div>
            <p className="leading-relaxed text-[#5C4A3A]">
              <strong>Pesan &amp; Bayar:</strong> Pesanan melalui web ini akan kami <strong>utamakan</strong>. Setelah Bapak/Ibu membayar lunas (scan QRIS), pesanan akan langsung dibuatkan.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-[#1A1614] text-white w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs mt-0.5">
              2
            </div>
            <p className="leading-relaxed text-[#5C4A3A]">
              <strong>Waktu Tunggu:</strong> Proses pembuatan butuh waktu sekitar <strong>5 sampai 45 menit</strong> (tergantung panjangnya antrean). Kami belum bisa menerima pesanan yang terburu-buru.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-[#1A1614] text-white w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs mt-0.5">
              3
            </div>
            <p className="leading-relaxed text-[#5C4A3A]">
              <strong>Ambil di Toko (Pickup):</strong> Jika ingin mengambil sendiri, mohon pesan <strong>minimal 30 menit</strong> sebelum tiba di lokasi agar Bapak/Ibu tidak menunggu lama.
            </p>
          </li>
          <li className="flex items-start gap-3">
            <div className="shrink-0 bg-[#1A1614] text-white w-6 h-6 flex items-center justify-center rounded-full font-bold text-xs mt-0.5">
              4
            </div>
            <p className="leading-relaxed text-[#5C4A3A]">
              <strong>Garansi Uang Kembali:</strong> Jika pesanan belum siap lebih dari 45 menit, Bapak/Ibu boleh membatalkan pesanan. Uang akan kami <strong>kembalikan penuh</strong> saat itu juga.
            </p>
          </li>
        </ol>
      </section>

      <button
        onClick={onClose}
        type="button"
        className="w-full py-3 rounded-xl bg-[#1A1614] text-white text-sm font-semibold hover:bg-[#2A221C] transition mt-5 cursor-pointer"
      >
        Mengerti
      </button>
    </ModalWrapper>
  );
};

