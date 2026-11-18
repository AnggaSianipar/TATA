const steps = [
  ["1", "Warga melapor", "Pilih jenis kerusakan, unggah foto, dan tandai titiknya di peta. Nomor tiket langsung terbit.", "Menunggu Validasi Admin"],
  ["2", "Admin memeriksa foto", "Admin kecamatan memastikan foto jelas dan lokasi benar, lalu meneruskan ke desa terkait.", "Diteruskan ke Perangkat Desa"],
  [
    "3",
    "Perangkat desa mengecek lokasi",
    "Desa turun ke lapangan, menangani langsung, atau meneruskan ke Camat bila butuh dukungan.",
    "Ditangani Desa – Dalam Proses",
  ],
  ["4", "Camat menindaklanjuti", "Kecamatan menangani kerusakan besar dan memperbarui progres sampai selesai diperbaiki.", "Selesai Diperbaiki"],
];

export function AlurLaporan() {
  return (
    <section id="cara-kerja" className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold text-deep">Dari laporan sampai selesai</h2>
          <p className="mt-3 text-lg leading-7 text-slate-600">Setiap laporan melewati empat tangan. Anda bisa melihat siapa yang sedang memegangnya, kapan, dan apa catatannya.</p>
        </div>
        <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6 before:hidden md:before:absolute md:before:left-5 md:before:right-5 md:before:top-5 md:before:block md:before:h-0.5 md:before:bg-toba/20">
          {steps.map(([number, title, description, status]) => (
            <li key={number} className="relative">
              <span className="relative grid h-10 w-10 place-items-center rounded-full border-2 border-ulos bg-white font-display text-lg font-bold text-ulos">{number}</span>
              <h3 className="mt-5 font-display text-lg font-semibold text-deep">{title}</h3>
              <p className="mt-2 text-[15px] leading-6 text-slate-600">{description}</p>
              <p className="mt-3 text-sm text-toba">→ {status}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
