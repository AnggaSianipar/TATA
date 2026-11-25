"use client";

import { useState } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/Button";

const STATUS_TABS = ["Semua", "Menunggu", "Diproses", "Selesai", "Ditolak"];

// Sementara 0 sampai data laporan tersambung ke backend.
const TOTAL_REPORTS = 0;
const TAB_COUNT = 0;

export default function LaporanSayaPage() {
  const [activeTab, setActiveTab] = useState(STATUS_TABS[0]);
  const [query, setQuery] = useState("");

  const searchTerm = query.trim();

  return (
    <DashboardShell active="laporan-saya">
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-[32px] font-bold leading-10 text-deep">
              Laporan saya
            </h1>
            <p className="mt-1 text-base text-slate-600">
              {TOTAL_REPORTS} laporan dikirim sejak bergabung.
            </p>
          </div>
          <Button href="/buat-laporan">＋ Buat laporan</Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <StatusTabs
            tabs={STATUS_TABS}
            activeTab={activeTab}
            count={TAB_COUNT}
            onChange={setActiveTab}
          />
          <SearchInput value={query} onChange={setQuery} />
        </div>

        <EmptyState
          title={
            searchTerm
              ? `Tidak ada laporan untuk “${searchTerm}”`
              : "Anda belum pernah melapor"
          }
          description="Laporan yang Anda kirim akan muncul di sini beserta statusnya."
          buttonLabel="Buat laporan"
        />
      </main>
    </DashboardShell>
  );
}

/* ---------- Tab status ---------- */

type StatusTabsProps = {
  tabs: string[];
  activeTab: string;
  count: number;
  onChange: (tab: string) => void;
};

function StatusTabs({ tabs, activeTab, count, onChange }: StatusTabsProps) {
  return (
    <div
      className="flex gap-1 overflow-x-auto"
      role="tablist"
      aria-label="Filter status laporan"
    >
      {tabs.map((tab) => {
        const isActive = tab === activeTab;

        return (
          <button
            key={tab}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={`inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg px-3.5 text-[15px] font-semibold ${
              isActive
                ? "bg-deep text-white"
                : "text-slate-600 hover:bg-toba/10"
            }`}
          >
            {tab}{" "}
            <span
              className={`rounded-full px-1.5 text-xs ${
                isActive
                  ? "bg-white/20 text-white"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/* ---------- Kolom pencarian ---------- */

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="relative w-80 max-w-full">
      <span className="sr-only">Cari nomor tiket atau lokasi</span>
      <span className="absolute left-3 top-2.5 text-lg text-slate-500">⌕</span>
      <input
        className="h-11 w-full rounded-lg border border-slate-300 bg-white px-10 text-base outline-none focus:border-toba focus:ring-4 focus:ring-toba/15"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Cari nomor tiket atau lokasi"
      />
    </label>
  );
}