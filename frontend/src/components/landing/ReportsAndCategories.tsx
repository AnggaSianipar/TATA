import { StatusBadge } from "@/components/ui/StatusBadge";

const reports = [
  ["TATA-0145", "Lumban Rau · 12 Nov 2026", "Jalan lintas depan SD Negeri 173", "diteruskan", "Diteruskan ke Perangkat Desa"],
  ["TATA-0143", "Lumban Rau · 11 Nov 2026", "Parit samping Balai Desa Lumban Rau", "diteruskan", "Diteruskan ke Perangkat Desa"],
  ["TATA-0142", "Lumban Rau · 12 Nov 2026", "Tikungan menuju Pasar Tampahan", "proses", "Ditangani Desa – Dalam Proses"],
  ["TATA-0131", "Lumban Rau · 2 Nov 2026", "Jalan Dusun I dekat Sopo Godang", "ditolak", "Ditolak Perangkat Desa"],
  ["TATA-0128", "Sibuea · 28 Okt 2026", "Jembatan Sibuea di atas Aek Bolon", "diteruskan", "Diteruskan ke Camat"],
] as const;

const categories = [
  ["Jalan", "Lubang, retak, longsor badan jalan", "Paling banyak dilaporkan · 46 laporan"],
  ["Jembatan", "Lantai jebol, pagar patah, fondasi tergerus"],
  ["Drainase", "Parit tersumbat, gorong-gorong ambruk"],
  ["Fasilitas umum", "Trotoar, balai desa, tambatan perahu"],
  ["Penerangan jalan", "Lampu padam, tiang miring, kabel putus"],
];

export function ReportsAndCategories() {
  return (
    <section className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-5 lg:grid-cols-[600fr_480fr]">
        <div>
          <h2 className="font-display text-3xl font-semibold text-deep">Laporan terbaru</h2>
          <p className="mt-2 text-[15px] text-slate-600">Identitas pelapor tidak ditampilkan untuk publik.</p>
          <ul className="mt-6 divide-y divide-slate-100 border-y border-slate-100">
            {reports.map(([id, meta, title, status, label]) => (
              <li key={id} className="flex gap-4 py-4">
                <div className="h-16 w-16 shrink-0 rounded-lg bg-[linear-gradient(135deg,#bdd7d2,#719a91)]" />
                <div className="min-w-0">
                  <p className="text-sm text-slate-600"><strong className="text-toba">{id}</strong> · {meta}</p>
                  <p className="truncate font-semibold">{title}</p>
                  <StatusBadge status={status}>{label}</StatusBadge>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-3xl font-semibold text-deep">Kategori kerusakan</h2>
          <p className="mt-2 text-[15px] text-slate-600">Pilih yang paling sesuai saat membuat laporan.</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {categories.map(([name, description, highlight], index) => (
              <li key={name} className={`rounded-xl border border-slate-200 p-4 ${index === 0 ? "sm:col-span-2 flex items-center gap-4 bg-mist" : ""}`}>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-toba/10 text-xl" aria-hidden="true">{["⌂", "◇", "≋", "□", "✦"][index]}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-deep">{name}</h3>
                  <p className="text-sm text-slate-600">{description}</p>
                  {highlight && <p className="mt-1 text-sm font-semibold text-toba">{highlight}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
