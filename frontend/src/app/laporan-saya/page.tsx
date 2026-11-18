"use client";

import { useMemo, useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/Button";

const tabs = ["Semua", "Menunggu", "Diproses", "Selesai", "Ditolak"];

export default function LaporanSayaPage() {
  const [active, setActive] = useState("Semua");
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => query.trim(), [query]);

  return (
    <DashboardShell active="laporan-saya">
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div><h1 className="font-display text-[32px] font-bold leading-10 text-deep">Laporan saya</h1><p className="mt-1 text-base text-slate-600">0 laporan dikirim sejak bergabung.</p></div>
          <Button href="/buat-laporan">＋ Buat laporan</Button>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-1 overflow-x-auto" role="tablist" aria-label="Filter status laporan">
            {tabs.map((tab) => <button key={tab} type="button" role="tab" aria-selected={active === tab} onClick={() => setActive(tab)} className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3.5 text-[15px] font-semibold ${active === tab ? "bg-deep text-white" : "text-slate-600 hover:bg-toba/10"}`}>{tab} <span className={`rounded-full px-1.5 text-xs ${active === tab ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"}`}>0</span></button>)}
          </div>
          <label className="relative w-80 max-w-full"><span className="sr-only">Cari nomor tiket atau lokasi</span><span className="absolute left-3 top-2.5 text-lg text-slate-500">⌕</span><input className="h-11 w-full rounded-lg border border-slate-300 bg-white px-10 text-base outline-none focus:border-toba focus:ring-4 focus:ring-toba/15" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari nomor tiket atau lokasi" /></label>
        </div>
        <EmptyState title={filtered ? `Tidak ada laporan untuk “${filtered}”` : "Anda belum pernah melapor"} description="Laporan yang Anda kirim akan muncul di sini beserta statusnya." buttonLabel="Buat laporan" />
      </main>
    </DashboardShell>
  );
}
