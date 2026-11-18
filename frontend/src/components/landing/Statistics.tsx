import { Card } from "@/components/ui/Card";

const villages = [
  ["Tangga Batu Timur", "100%", "8"],
  ["Tangga Batu Barat", "37.5%", "3"],
  ["Meat", "25%", "2"],
  ["Tampahan", "25%", "2"],
  ["Gurgur Aek Raja", "12.5%", "1"],
  ["Lintong Nihuta", "0%", "0"],
];

export function Statistics() {
  return (
    <section id="statistik" className="py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 lg:grid-cols-[619fr_477fr]">
        <div>
          <h2 className="font-display text-3xl font-bold text-deep">Statistik laporan</h2>
          <p className="mt-3 text-lg leading-7 text-slate-600">Data terbuka dan diperbarui otomatis setiap kali status berubah. Periode 2026.</p>
          <div className="mt-8 grid overflow-hidden rounded-xl border border-slate-200 bg-white md:grid-cols-3">
            {[["Laporan masuk", "129", "sejak Januari"], ["Sedang diproses", "7", "desa & kecamatan"], ["Selesai diperbaiki", "41", "32% dari total"]].map(([label, value, meta]) => (
              <div key={label} className="p-6 not-last:border-b md:not-last:border-b-0 md:not-first:border-l border-slate-200">
                <p className="text-[15px] text-slate-600">{label}</p>
                <p className="mt-1 font-display text-4xl font-bold text-deep">{value}</p>
                <p className="mt-1 text-sm text-slate-600">{meta}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="font-semibold">Sebaran status laporan aktif</p>
            <div className="mt-2 flex h-3 overflow-hidden rounded-full">
              <span className="flex-[5] bg-amber-400" /><span className="flex-[1] bg-red-400" /><span className="flex-[2] bg-sky-400" /><span className="flex-[1] bg-red-400" /><span className="flex-[1] bg-teal-400" /><span className="flex-[2] bg-sky-400" /><span className="flex-[2] bg-teal-400" /><span className="flex-[3] bg-green-500" />
            </div>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
              {["Menunggu", "Diteruskan", "Dalam proses", "Selesai", "Ditolak"].map((label, index) => <li key={label} className="flex items-center gap-1.5"><span className={`h-2.5 w-2.5 rounded-full ${["bg-amber-400", "bg-sky-400", "bg-teal-400", "bg-green-500", "bg-red-400"][index]}`} />{label}</li>)}
            </ul>
          </div>
        </div>
        <Card className="p-6">
          <h3 className="font-display text-lg font-semibold text-deep">Laporan per desa</h3>
          <ul className="mt-5 flex flex-col gap-3.5">
            {villages.map(([name, width, count]) => (
              <li key={name} className="grid grid-cols-[120px_1fr_24px] items-center gap-3 text-[15px]">
                <span>{name}</span>
                <span className="h-2 overflow-hidden rounded-full bg-mist"><span className="block h-full rounded-full bg-toba" style={{ width }} /></span>
                <span className="text-right font-semibold">{count}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
