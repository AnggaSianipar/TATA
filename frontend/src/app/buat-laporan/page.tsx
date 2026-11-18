"use client";

import { useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const villages = ["Gurgur Aek Raja", "Lintong Nihuta", "Meat", "Tangga Batu Barat", "Tangga Batu Timur", "Tarabunga"];
const categories = ["Jalan", "Jembatan", "Drainase", "Fasilitas umum", "Penerangan jalan"];

export default function BuatLaporanPage() {
  const [village, setVillage] = useState(villages[0]);
  const [category, setCategory] = useState("");
  const [landmark, setLandmark] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [point, setPoint] = useState<{ x: number; y: number; lat: string; lng: string } | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const complete = Boolean(village && category && landmark.trim() && description.trim() && files.length && point && confirmed);

  function setMapPoint(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const lat = (2.375 - (y / rect.height) * 0.06).toFixed(4);
    const lng = (99.09 + (x / rect.width) * 0.08).toFixed(4);
    setPoint({ x, y, lat, lng });
  }

  function useGps() {
    if (!navigator.geolocation) {
      window.alert("Perangkat tidak mendukung GPS.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setPoint({ x: 0, y: 0, lat: coords.latitude.toFixed(4), lng: coords.longitude.toFixed(4) }),
      () => window.alert("Lokasi tidak dapat diakses. Silakan tandai titik di peta."),
    );
  }

  return (
    <DashboardShell active="buat-laporan">
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <a href="/beranda" className="inline-flex min-h-11 items-center rounded-lg px-2 text-[15px] font-semibold text-toba hover:bg-toba/10">← Beranda</a>
        <div className="mt-2"><h1 className="font-display text-[32px] font-bold leading-10 text-deep">Buat laporan</h1><p className="mt-1 max-w-3xl text-base text-slate-600">Isi tiga bagian di bawah ini. Laporan akan diperiksa admin kecamatan sebelum diteruskan ke desa.</p></div>
        <form className="mt-6 grid items-start gap-6 xl:grid-cols-[616fr_320fr]" action="/laporan-saya">
          <div className="flex min-w-0 flex-col gap-6">
            <FormSection number="1" title="Apa dan di mana kerusakannya?" description="Pilih desa dan jenis kerusakan yang paling sesuai.">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Desa"><select className="form-input" value={village} onChange={(event) => setVillage(event.target.value)}>{villages.map((item) => <option key={item}>{item}</option>)}</select></Field>
                <Field label="Jenis kerusakan"><select className="form-input" value={category} onChange={(event) => setCategory(event.target.value)} required><option value="" disabled>Pilih jenis kerusakan</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></Field>
                <Field label="Patokan lokasi" hint="Contoh: Tikungan menuju Pasar Tampahan, depan Gereja HKBP." full><input className="form-input" value={landmark} onChange={(event) => setLandmark(event.target.value)} placeholder="Tulis patokan yang mudah dikenali" required /></Field>
                <Field label={`Deskripsi kerusakan (${description.length}/500)`} hint="Jelaskan ukuran, tingkat bahaya, dan sejak kapan." full><textarea className="form-input min-h-32 resize-y py-2.5 leading-6" maxLength={500} value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Contoh: Lubang sekitar 2 meter, dalam 20 cm. Sudah ada pengendara motor yang jatuh." required /></Field>
              </div>
            </FormSection>
            <FormSection number="2" title="Foto kerusakan" description="Unggah 1–5 foto. Foto yang jelas mempercepat validasi.">
              <label className="mt-5 flex cursor-pointer flex-col items-center rounded-xl border-[1.6px] border-dashed border-slate-300 bg-white px-5 py-8 text-center hover:border-toba hover:bg-mist">
                <span className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-toba/10 text-2xl text-toba">▧</span><span className="font-semibold">Tarik foto ke sini</span><span className="mt-1 text-sm text-slate-600">JPG atau PNG, maksimal 10 MB per foto, hingga 5 foto</span><span className="mt-4 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold">Pilih dari galeri atau kamera</span>
                <input className="sr-only" type="file" accept="image/jpeg,image/png" multiple onChange={(event) => setFiles(Array.from(event.target.files ?? []).slice(0, 5))} />
                <span className="mt-3 text-sm text-toba" aria-live="polite">{files.length ? `${files.length} foto dipilih: ${files.map((file) => file.name).join(", ")}` : ""}</span>
              </label>
            </FormSection>
            <FormSection number="3" title="Tandai titik lokasi" description="Ketuk peta tepat di lokasi kerusakan, atau gunakan GPS ponsel Anda.">
              <div className="relative mt-5 h-96 cursor-crosshair overflow-hidden rounded-xl border border-slate-200 bg-[#e7eee6] bg-[linear-gradient(#cfe3d2_1px,transparent_1px),linear-gradient(90deg,#cfe3d2_1px,transparent_1px)] bg-[size:32px_32px]" onClick={setMapPoint} role="application" aria-label="Peta interaktif">
                <span className="absolute left-12 top-7 font-display text-sm text-sky-700/70">Danau Toba</span><span className="absolute left-[17%] top-[20%] text-xs font-semibold text-slate-600">Meat</span><span className="absolute left-[30%] top-[31%] text-xs font-semibold text-slate-600">Gurgur Aek Raja</span><span className="absolute left-[35%] top-[62%] text-xs font-semibold text-slate-600">Lumban Rau</span><span className="absolute left-[52%] top-1/2 text-xs font-semibold text-slate-600">Lintong Nihuta</span><span className="absolute left-[68%] top-[78%] text-xs font-semibold text-slate-600">Tampahan</span><span className="absolute left-[80%] top-[40%] text-xs font-semibold text-slate-600">Sibuea</span>
                {!point && <span className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1.5 text-center text-sm font-semibold text-deep shadow">Ketuk peta untuk menandai lokasi kerusakan</span>}
                {point && point.x !== 0 && <span className="absolute h-7 w-5 -translate-x-1/2 -translate-y-full rounded-full bg-ulos text-center text-white shadow" style={{ left: point.x, top: point.y }}>●</span>}
                <div className="absolute right-2 top-2 flex flex-col overflow-hidden rounded-lg border border-slate-200 bg-white"><button type="button" className="grid h-11 w-11 place-items-center text-xl" onClick={(event) => event.stopPropagation()}>+</button><button type="button" className="grid h-11 w-11 place-items-center border-t border-slate-200 text-xl" onClick={(event) => event.stopPropagation()}>−</button></div>
                <span className="absolute bottom-2 right-2 rounded bg-white/80 px-1.5 py-0.5 text-[10px] text-slate-600">Area Google Maps · Kec. Tampahan</span>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3"><dl className="flex gap-6"><div><dt className="text-sm text-slate-600">Latitude</dt><dd className="font-mono font-bold">{point?.lat ?? "—"}</dd></div><div><dt className="text-sm text-slate-600">Longitude</dt><dd className="font-mono font-bold">{point?.lng ?? "—"}</dd></div></dl><Button type="button" variant="secondary" onClick={useGps}>⌖ Gunakan lokasi saya</Button></div>
            </FormSection>
          </div>
          <Card className="sticky top-[88px] p-5 max-xl:static"><h2 className="font-display text-lg font-semibold text-deep">Ringkasan</h2><ul className="mt-4 flex flex-col gap-3 text-[15px] text-slate-600">{[["Desa dan jenis kerusakan", Boolean(village && category)], ["Patokan dan deskripsi", Boolean(landmark.trim() && description.trim())], ["Foto kerusakan", Boolean(files.length)], ["Titik lokasi di peta", Boolean(point)]].map(([label, done]) => <li key={String(label)} className={`flex items-center gap-3 ${done ? "text-ink" : ""}`}><span className={`grid h-6 w-6 place-items-center rounded-full border ${done ? "border-toba bg-toba text-white" : "border-slate-300"}`}>{done ? "✓" : ""}</span>{label}</li>)}</ul><label className="mt-5 flex gap-3 border-t border-slate-100 pt-4"><input type="checkbox" className="mt-1 h-5 w-5 accent-toba" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} required /><span><span className="block font-semibold">Laporan ini benar</span><span className="block text-sm text-slate-600">Foto dan lokasi sesuai keadaan sebenarnya.</span></span></label><Button type="submit" className="mt-4 w-full" disabled={!complete}>Kirim laporan</Button><p className="mt-3 text-center text-sm text-slate-600">Nomor tiket terbit otomatis setelah dikirim.</p></Card>
        </form>
      </main>
    </DashboardShell>
  );
}

function FormSection({ number, title, description, children }: { number: string; title: string; description: string; children: ReactNode }) {
  return <section className="rounded-xl border border-slate-200 bg-white p-6"><div className="flex items-start gap-3"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-toba font-display text-sm font-semibold text-white">{number}</span><div><h2 className="font-display text-lg font-semibold text-deep">{title}</h2><p className="text-[15px] text-slate-600">{description}</p></div></div>{children}</section>;
}

function Field({ label, hint, full, children }: { label: ReactNode; hint?: string; full?: boolean; children: ReactNode }) {
  return <label className={`flex flex-col gap-1.5 text-[15px] font-semibold ${full ? "sm:col-span-2" : ""}`}>{label}{children}{hint && <span className="text-sm font-normal text-slate-600">{hint}</span>}</label>;
}
