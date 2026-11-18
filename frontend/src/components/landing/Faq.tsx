const questions = [
  ["Siapa yang boleh membuat laporan?", "Semua warga yang tinggal di tujuh desa Kecamatan Tampahan. Cukup daftar dengan email aktif dan pilih desa tempat tinggal Anda."],
  ["Berapa lama laporan saya diperiksa?", "Admin kecamatan memeriksa foto dan lokasi paling lambat 1×24 jam pada hari kerja. Setelah itu laporan langsung diteruskan ke perangkat desa."],
  ["Mengapa laporan bisa ditolak?", "Laporan ditolak bila foto tidak jelas, lokasi di luar Kecamatan Tampahan, berada di lahan pribadi, merupakan laporan ganda, atau berisi konten tidak pantas. Alasan penolakan selalu ditampilkan di akun Anda."],
  ["Apakah identitas saya ditampilkan ke publik?", "Tidak. Nama pelapor hanya dapat dilihat oleh petugas. Daftar laporan publik hanya menampilkan lokasi, jenis kerusakan, dan status."],
  ["Bagaimana jika kerusakan terlalu besar untuk desa?", "Perangkat desa dapat meneruskan laporan ke Camat. Kecamatan kemudian menindaklanjuti, termasuk berkoordinasi dengan dinas terkait di Kabupaten Toba."],
  ["Apakah saya harus mengaktifkan lokasi di ponsel?", "Tidak wajib. Anda bisa menekan “Gunakan lokasi saya” atau menandai titik kerusakan langsung di peta."],
];

export function Faq() {
  return (
    <section className="py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-[421fr_674fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold text-deep">Pertanyaan yang sering diajukan</h2>
          <p className="mt-3 text-[15px] leading-6 text-slate-600">Belum terjawab? Datang ke Kantor Camat Tampahan atau hubungi (0632) 21 4470.</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {questions.map(([question, answer]) => (
            <details key={question} className="group border-b border-slate-200 px-5 last:border-0">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                {question}<span className="text-xl text-toba transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 text-[15px] leading-6 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
