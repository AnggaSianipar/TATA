"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";

const reports = [
  ["TATA-0139", "Rotua Sitorus", "Lumban Rau", "Jembatan", "9 Nov 2026"],
  ["TATA-0140", "Binsar Pardede", "Sibuea", "Jembatan", "9 Nov 2026"],
  ["TATA-0141", "Maria Tambunan", "Tampahan", "Fasilitas umum", "10 Nov 2026"],
  ["TATA-0144", "Togar Hutapea", "Meat", "Jalan", "13 Nov 2026"],
  ["TATA-0146", "Hotman Simanjuntak", "Sibuea", "Penerangan jalan", "14 Nov 2026"],
] as const;

const tabs = [
  ["menunggu", "Menunggu validasi", "5"],
  ["diteruskan", "Sudah diteruskan", "11"],
  ["ditolak", "Ditolak", "1"],
  ["semua", "Semua", "17"],
] as const;

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("menunggu");
  const [query, setQuery] = useState("");
  const [desa, setDesa] = useState("Semua desa");
  const [jenis, setJenis] = useState("Semua jenis");

  const filteredReports = useMemo(
    () =>
      reports.filter((report) => {
        const search = query.toLowerCase();
        return (
          (!search || report.join(" ").toLowerCase().includes(search)) &&
          (desa === "Semua desa" || report[2] === desa) &&
          (jenis === "Semua jenis" || report[3] === jenis)
        );
      }),
    [desa, jenis, query],
  );

  return (
    <DashboardShell active="admin" role="admin">
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <div>
          <h1 className="font-display text-[32px] font-bold leading-10 text-deep">Laporan masuk</h1>
          <p className="mt-1 text-base text-slate-600">5 laporan menunggu validasi. Laporan terlama ditampilkan paling atas.</p>
        </div>

        <div className="mt-6 flex gap-1 overflow-x-auto" role="tablist" aria-label="Filter antrean">
          {tabs.map(([value, label, count]) => (
            <button
              key={value}
              type="button"
              role="tab"
              aria-selected={activeTab === value}
              onClick={() => setActiveTab(value)}
              className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3.5 text-[15px] font-semibold transition-colors ${activeTab === value ? "bg-deep text-white" : "text-slate-600 hover:bg-toba/10"}`}
            >
              {label}
              <span className={`rounded-full px-1.5 text-xs ${activeTab === value ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"}`}>{count}</span>
            </button>
          ))}
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-[1fr_200px_220px]">
          <label className="relative">
            <span className="sr-only">Cari tiket, pelapor, atau lokasi</span>
            <span className="absolute left-3 top-2.5 text-xl text-slate-500">⌕</span>
            <input className="h-11 w-full rounded-lg border border-slate-300 bg-white px-10 text-base outline-none focus:border-toba focus:ring-4 focus:ring-toba/15" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari tiket, pelapor, atau lokasi" />
          </label>
          <select className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-base outline-none focus:border-toba focus:ring-4 focus:ring-toba/15" value={desa} onChange={(event) => setDesa(event.target.value)} aria-label="Filter desa">
            <option>Semua desa</option><option>Lumban Rau</option><option>Sibuea</option><option>Tampahan</option><option>Meat</option>
          </select>
          <select className="h-11 rounded-lg border border-slate-300 bg-white px-3 text-base outline-none focus:border-toba focus:ring-4 focus:ring-toba/15" value={jenis} onChange={(event) => setJenis(event.target.value)} aria-label="Filter jenis">
            <option>Semua jenis</option><option>Jalan</option><option>Jembatan</option><option>Fasilitas umum</option><option>Penerangan jalan</option>
          </select>
        </div>

        <Card className="mt-4 overflow-hidden p-0">
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">Antrean laporan masuk</caption>
              <thead className="border-b border-slate-200 bg-slate-50 text-sm text-slate-600">
                <tr><th className="px-4 py-3 font-semibold">Tiket</th><th className="px-3 py-3 font-semibold">Pelapor</th><th className="px-3 py-3 font-semibold">Desa</th><th className="px-3 py-3 font-semibold">Jenis</th><th className="px-3 py-3 font-semibold">Tanggal</th><th className="px-3 py-3 font-semibold">Status</th><th className="w-12 px-2 py-3"><span className="sr-only">Buka</span></th></tr>
              </thead>
              <tbody>
                {filteredReports.map(([ticket, reporter, village, category, date], index) => (
                  <tr key={ticket} className={`border-b border-slate-100 last:border-0 hover:bg-slate-50 ${index === 0 ? "bg-toba/[.06]" : ""}`}>
                    <td className="px-4 py-4 font-semibold text-toba">{ticket}</td><td className="px-3 py-4">{reporter}</td><td className="px-3 py-4">{village}</td><td className="px-3 py-4">{category}</td><td className="px-3 py-4 whitespace-nowrap">{date}</td><td className="px-3 py-4"><StatusBadge status="menunggu">Menunggu Validasi Admin</StatusBadge></td><td className="px-2 py-4 text-xl text-toba">›</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="divide-y divide-slate-100 md:hidden">
            {filteredReports.map(([ticket, reporter, village, category, date]) => (
              <article key={ticket} className="space-y-2 p-4"><div className="flex items-center justify-between"><strong className="text-toba">{ticket}</strong><span className="text-xl text-toba">›</span></div><p>{reporter} · {village}</p><p className="text-sm text-slate-600">{category} · {date}</p><StatusBadge status="menunggu">Menunggu Validasi Admin</StatusBadge></article>
            ))}
          </div>
          {!filteredReports.length && <p className="p-10 text-center text-slate-600">Tidak ada laporan yang sesuai filter.</p>}
        </Card>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-600"><span>Menampilkan {filteredReports.length ? 1 : 0}–{filteredReports.length} dari {filteredReports.length} laporan</span><div className="flex items-center gap-2"><button type="button" className="text-2xl text-slate-400" aria-label="Halaman sebelumnya">‹</button><span className="grid h-11 w-11 place-items-center rounded-lg bg-toba font-semibold text-white">1</span><button type="button" className="text-2xl text-slate-400" aria-label="Halaman berikutnya">›</button></div></div>
      </main>
    </DashboardShell>
  );
}
