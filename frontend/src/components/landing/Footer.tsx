export function Footer() {
  return (
    <footer className="bg-deep text-teal-50/85">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[435fr_311fr_311fr]">
        <div>
          <span className="flex items-center gap-2.5">
            <span className="font-display text-[22px] font-bold text-white">TATA</span>
            <span className="h-5 w-px bg-white/30" aria-hidden="true" />
            <span className="text-[15px] font-semibold text-teal-100">TampahanTa</span>
          </span>
          <p className="mt-4 max-w-sm text-[15px] leading-6">Sistem Pelaporan Kerusakan Infrastruktur Kecamatan Tampahan, Kabupaten Toba, Sumatera Utara. Dikelola oleh Kantor Camat Tampahan bersama pemerintah desa.</p>
        </div>
        <div>
          <h2 className="font-display font-semibold text-white">Kantor Camat Tampahan</h2>
          <ul className="mt-3 flex flex-col gap-2.5 text-[15px] leading-6">
            <li>Jl. Lintas Sumatera, Desa Tampahan, Kab. Toba 22383</li>
            <li>(0632) 21 4470</li><li>tata@tampahan.go.id</li><li>Senin–Jumat, 08.00–16.00 WIB</li>
          </ul>
        </div>
        <div>
          <h2 className="font-display font-semibold text-white">Tautan</h2>
          <nav className="mt-3 flex flex-col gap-1 text-[15px]">
            <a href="/login" className="py-2 hover:text-white">Buat laporan</a><a href="/login" className="py-2 hover:text-white">Masuk</a><a href="/register" className="py-2 hover:text-white">Daftar akun warga</a><a href="#cara-kerja" className="py-2 hover:text-white">Design system TATA</a>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="mx-auto w-full max-w-6xl px-5 py-5 text-sm">© 2026 Pemerintah Kecamatan Tampahan · Horas!</div></div>
    </footer>
  );
}
