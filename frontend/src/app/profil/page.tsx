"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function ProfilPage() {
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const whatsappReady = phone.replace(/\D/g, "").length >= 10;

  return (
    <DashboardShell active="profil">
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <div><h1 className="font-display text-[32px] font-bold leading-10 text-deep">Profil akun</h1><p className="mt-1 text-base text-slate-600">Kelola data diri dan pemberitahuan.</p></div>
        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[616fr_320fr]">
          <div className="flex flex-col gap-6">
            <Card className="p-6"><h2 className="font-display text-lg font-semibold text-deep">Data diri</h2><div className="mt-5 grid gap-5 sm:grid-cols-2">
              <Field label="Nama lengkap"><input className="form-input" defaultValue="aaa" /></Field>
              <Field label="Email" hint="Email tidak dapat diubah."><input className="form-input bg-slate-100 text-slate-500" value="a@gmail.com" readOnly /></Field>
              <Field label={<>Nomor HP <span className="font-normal text-slate-500">(opsional)</span></>}><input className="form-input" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="08xx xxxx xxxx" /></Field>
              <Field label="Desa"><select className="form-input" defaultValue="Gurgur Aek Raja"><option>Gurgur Aek Raja</option><option>Lintong Nihuta</option><option>Meat</option><option>Tangga Batu Barat</option><option>Tangga Batu Timur</option><option>Tarabunga</option></select></Field>
              <Button type="button">Simpan perubahan</Button>
            </div></Card>
            <Card className="p-6"><h2 className="font-display text-lg font-semibold text-deep">Ganti kata sandi</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><Field label="Kata sandi lama"><input className="form-input" type="password" /></Field><Field label="Kata sandi baru" hint="Minimal 8 karakter."><input className="form-input" type="password" /></Field><Button type="button" variant="secondary">Ganti kata sandi</Button></div></Card>
            <Card className="p-6"><h2 className="border-b border-slate-100 pb-3 font-display text-lg font-semibold text-deep">Pemberitahuan</h2><Toggle label="Email setiap status berubah" description="Dikirim ke a@gmail.com" checked /><Toggle label="Pesan WhatsApp" description={whatsappReady ? `Dikirim ke ${phone}` : "Isi nomor HP terlebih dahulu"} checked={whatsapp} disabled={!whatsappReady} onChange={setWhatsapp} /></Card>
          </div>
          <Card className="p-5 text-center"><span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-toba font-display text-2xl font-semibold text-white">a</span><p className="mt-3 font-display text-lg font-semibold text-deep">aaa</p><p className="text-[15px] text-slate-600">Warga Desa Gurgur Aek Raja</p><span className="mt-4 inline-flex rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-800">✓ Akun aktif dan terverifikasi</span><dl className="mt-5 grid grid-cols-2 border-t border-slate-100 pt-4"><div><dt className="text-sm text-slate-600">Laporan</dt><dd className="font-display text-xl font-semibold">0</dd></div><div className="border-l border-slate-100"><dt className="text-sm text-slate-600">Bergabung</dt><dd className="font-display text-xl font-semibold">Nov 2026</dd></div></dl></Card>
        </div>
      </main>
    </DashboardShell>
  );
}

function Field({ label, hint, children }: { label: ReactNode; hint?: string; children: ReactNode }) {
  return <label className="flex flex-col gap-1.5 text-[15px] font-semibold">{label}{children}{hint && <span className="text-sm font-normal text-slate-600">{hint}</span>}</label>;
}

function Toggle({ label, description, checked, disabled, onChange }: { label: string; description: string; checked?: boolean; disabled?: boolean; onChange?: (value: boolean) => void }) {
  return <label className="flex items-center justify-between gap-4 border-t border-slate-100 py-3"><span><span className="block font-semibold">{label}</span><span className="block text-sm text-slate-600">{description}</span></span><input className="h-7 w-12 appearance-none rounded-full bg-slate-300 p-1 transition checked:bg-toba disabled:cursor-not-allowed disabled:opacity-50 [&::after]:block [&::after]:h-5 [&::after]:w-5 [&::after]:rounded-full [&::after]:bg-white [&::after]:content-[''] checked:[&::after]:translate-x-5" type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange?.(event.target.checked)} /></label>;
}
