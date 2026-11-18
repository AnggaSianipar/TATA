import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function Hero() {
  return (
    <section className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-24 pt-16 lg:grid-cols-[557fr_531fr]">
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-toba/20 bg-white px-3 py-1.5 text-sm font-semibold text-toba">
          <span className="h-4 w-4 rounded-full bg-toba/15" aria-hidden="true" />
          Layanan resmi Kecamatan Tampahan, Kabupaten Toba
        </p>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-deep md:text-5xl">
          Ada kendala? Laporkan dari ponsel Anda.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-7 text-slate-600">
          TampahanTa membantu warga menyampaikan kerusakan infrastruktur lengkap
          dengan foto dan titik lokasi, lalu memantau penanganannya dari desa
          sampai kecamatan.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/login">Buat laporan</Button>
          <Button href="#cara-kerja" variant="secondary">
            Lihat alurnya
          </Button>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-slate-200 pt-6">
          <div><dt className="text-[15px] text-slate-600">Desa terlayani</dt><dd className="font-display text-2xl font-semibold text-deep">7 desa</dd></div>
          <div><dt className="text-[15px] text-slate-600">Rata-rata validasi</dt><dd className="font-display text-2xl font-semibold text-deep">5 jam</dd></div>
          <div><dt className="text-[15px] text-slate-600">Laporan selesai</dt><dd className="font-display text-2xl font-semibold text-deep">41</dd></div>
        </dl>
      </div>

      <div className="relative min-h-[420px]">
        <div className="ml-auto h-[420px] w-[88%] rounded-[20px] bg-[radial-gradient(ellipse_at_55%_30%,#dcefeb_0%,transparent_42%),linear-gradient(145deg,#8cb9b3,#d8e6d8_48%,#7ba7a0)] shadow-inner" aria-label="Danau Toba dikelilingi perbukitan" />
        <Card className="absolute left-0 top-[140px] w-[400px] max-w-full p-4 shadow-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-sm font-semibold text-toba">TATA-0142</p>
              <p className="font-display text-lg font-semibold text-deep">Jalan berlubang, Lumban Rau</p>
            </div>
            <div className="h-12 w-12 shrink-0 rounded-lg bg-[linear-gradient(135deg,#a8c9c4,#557f79)]" />
          </div>
          <div className="mt-4"><StatusBadge status="proses">Ditangani Desa – Dalam Proses</StatusBadge></div>
          <div className="relative mt-3 h-36 overflow-hidden rounded-xl border border-slate-200 bg-[#e7eee6] bg-[linear-gradient(#cfe3d2_1px,transparent_1px),linear-gradient(90deg,#cfe3d2_1px,transparent_1px)] bg-[size:28px_28px]">
            <span className="absolute left-8 top-3 font-display text-sm text-sky-700/70">Danau Toba</span>
            <span className="absolute left-14 top-6 text-[10px] font-semibold text-slate-600">Meat</span>
            <span className="absolute left-28 top-20 text-[10px] font-semibold text-slate-600">Lumban Rau</span>
            <span className="absolute left-52 top-16 text-[10px] font-semibold text-slate-600">Lintong Nihuta</span>
            <span className="absolute left-20 top-10 h-7 w-5 rounded-full bg-ulos text-center text-white shadow">●</span>
            <div className="absolute bottom-2 left-2 rounded bg-white/95 px-2 py-1 font-mono text-xs">2.3462, 99.1281</div>
            <div className="absolute bottom-2 right-2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] text-slate-600">Area Google Maps · Kec. Tampahan</div>
          </div>
          <ol className="mt-3 flex gap-1" aria-label="Tahap 3 dari 5">
            {[1, 2, 3, 4, 5].map((step) => <li key={step} className={`h-1.5 flex-1 rounded-full ${step <= 3 ? "bg-toba" : "bg-slate-200"}`} />)}
          </ol>
          <p className="mt-2 text-sm text-slate-600">Material sudah dipesan · diperbarui 13 Nov</p>
        </Card>
      </div>
    </section>
  );
}
