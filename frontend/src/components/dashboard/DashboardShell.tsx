"use client";

import { useState, type ReactNode } from "react";

type DashboardShellProps = {
  active: "beranda" | "buat-laporan" | "laporan-saya" | "profil" | "admin" | "pengguna" | "desa" | "camat";
  role?: "warga" | "admin" | "desa" | "camat";
  children: ReactNode;
};

const wargaLinks = [
  ["beranda", "Beranda", "/beranda"],
  ["buat-laporan", "Buat laporan", "/buat-laporan"],
  ["laporan-saya", "Laporan saya", "/laporan-saya"],
  ["profil", "Profil", "/profil"],
] as const;

const adminLinks = [
  ["admin", "Laporan masuk", "/admin"],
  ["pengguna", "Pengguna", "/admin/pengguna"],
] as const;

const roleDetails = {
  warga: { label: "Warga · Gurgur Aek Raja", name: "aaa", active: "beranda" },
  admin: { label: "Admin Kecamatan", name: "Admin TATA", active: "admin" },
  desa: { label: "Perangkat Desa · Tampahan", name: "Perangkat Desa", active: "desa" },
  camat: { label: "Camat Tampahan", name: "Camat", active: "camat" },
} as const;

export function DashboardShell({ active, role = "warga", children }: DashboardShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const details = roleDetails[role];
  const links = role === "warga"
    ? wargaLinks
    : role === "admin"
      ? adminLinks
      : [[role, details.name, `/${role}`]] as const;

  return (
    <div className={`flex min-h-screen bg-mist ${collapsed ? "group is-collapsed" : ""}`}>
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col bg-deep p-4 transition-[width] duration-200 max-[900px]:static max-[900px]:h-auto max-[900px]:w-full max-[900px]:p-3">
        <a href="/beranda" className="block rounded-lg px-1 pb-8 max-[900px]:flex max-[900px]:items-center max-[900px]:justify-between max-[900px]:pb-3">
          <span className="flex flex-col gap-1.5">
            <span className="font-display text-[26px] font-bold leading-[26px] tracking-tight text-white group-[.is-collapsed]:text-lg">TATA</span>
            <span className="text-sm leading-none text-teal-100 group-[.is-collapsed]:hidden">TampahanTa</span>
          </span>
          <span className="mt-4 block truncate rounded-lg bg-white/10 px-3 py-2 text-sm text-teal-50 max-[900px]:mt-0 max-[900px]:max-w-[220px]">{details.label}</span>
        </a>
        <nav className="flex flex-col gap-1 max-[900px]:flex-row max-[900px]:overflow-x-auto" aria-label="Menu dashboard">
          {links.map(([key, label, href]) => (
            <a key={key} href={href} className={`flex h-11 items-center gap-3 rounded-lg px-3 text-[15px] whitespace-nowrap transition-colors ${active === key ? "bg-white/15 font-semibold text-white" : "text-teal-50/80 hover:bg-white/10 hover:text-white"} max-[900px]:w-auto`}>
              <SidebarIcon item={key} />
              <span className="group-[.is-collapsed]:hidden">{label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto flex flex-col gap-1 border-t border-white/10 pt-3 max-[900px]:hidden">
          <button type="button" className="flex h-11 items-center gap-3 rounded-lg px-3 text-left text-[15px] text-teal-50/80 hover:bg-white/10 hover:text-white" onClick={() => setCollapsed((value) => !value)} aria-expanded={!collapsed}>
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-white/15 text-xs">{collapsed ? ">" : "<"}</span>
            <span className="group-[.is-collapsed]:hidden">{collapsed ? "Buka menu" : "Ciutkan menu"}</span>
          </button>
          <a href="/login" className="flex h-11 items-center gap-3 rounded-lg px-3 text-[15px] text-teal-50/80 hover:bg-white/10 hover:text-white">
            <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-white/15 text-xs">↪</span>
            <span className="group-[.is-collapsed]:hidden">Keluar</span>
          </a>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col items-center">
        <header className="sticky top-0 z-10 flex h-16 w-full items-center gap-2 border-b border-slate-200 bg-white/95 px-8 backdrop-blur max-[900px]:px-5">
          <p className="truncate text-[15px] text-slate-600 max-[900px]:hidden">Sabtu, 14 November 2026 · Kecamatan Tampahan, Kabupaten Toba</p>
          <div className="ml-auto flex items-center gap-1">
            <button type="button" className="grid h-11 w-11 place-items-center rounded-lg text-lg hover:bg-slate-100" aria-label="Notifikasi">♧</button>
            <a href="/profil" className="flex h-11 items-center gap-3 rounded-lg px-1.5 pr-3 text-left hover:bg-slate-100">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-toba font-display text-sm font-semibold text-white">A</span>
              <span className="max-[600px]:hidden"><span className="block text-[15px] font-semibold">{details.name}</span><span className="block text-xs text-slate-600">{details.label}</span></span>
            </a>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}

function SidebarIcon({ item }: { item: string }) {
  if (item === "admin") {
    return (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 9.5h16v9.25A1.25 1.25 0 0 1 18.75 20H5.25A1.25 1.25 0 0 1 4 18.75V9.5Z" />
        <path d="m4 9.5 2.4-5h11.2l2.4 5M4 9.5l4.3 4h7.4l4.3-4" />
      </svg>
    );
  }

  if (item === "pengguna") {
    return (
      <svg className="h-6 w-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="7" r="3" />
        <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20M16 4.5a3 3 0 0 1 0 5.8M16 14a4.5 4.5 0 0 1 4.5 4.5V20" />
      </svg>
    );
  }

  return (
    <span className="grid h-5 w-5 shrink-0 place-items-center rounded bg-white/15 text-xs" aria-hidden="true">
      {item === "beranda" ? "⌂" : item === "buat-laporan" ? "+" : item === "laporan-saya" ? "≡" : "○"}
    </span>
  );
}
