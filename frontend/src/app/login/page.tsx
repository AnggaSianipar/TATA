"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

const demoAccounts = ["warga@tata.id", "admin@tata.id", "desa@tata.id", "camat@tata.id", "nonaktif@tata.id"];
const demoPassword = "tata1234";

export default function LoginPage() {
  const [email, setEmail] = useState("a@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    if (normalizedEmail === "nonaktif@tata.id") {
      setError("Akun ini dinonaktifkan. Hubungi admin kecamatan untuk bantuan.");
      return;
    }
    if (demoAccounts.includes(normalizedEmail) && password !== demoPassword) {
      setError("Kata sandi demo salah. Gunakan tata1234.");
      return;
    }
    const route = normalizedEmail === "admin@tata.id"
      ? "/admin"
      : normalizedEmail === "desa@tata.id"
        ? "/desa"
        : normalizedEmail === "camat@tata.id"
          ? "/camat"
          : "/beranda";
    router.push(route);
  }

  return (
    <AuthShell tagline="Satu laporan, dipantau sampai jalan kembali mulus.">
      <h1 className="font-display text-[32px] font-bold leading-10 text-deep">Masuk ke TATA</h1>
      <p className="mt-2 text-base text-slate-600">Gunakan email dan kata sandi yang Anda daftarkan.</p>
      <div className="mt-5 flex gap-3 rounded-[10px] border border-green-200 bg-green-50 p-4 text-green-900"><span className="text-xl">✓</span><div><p className="font-semibold">Verifikasi berhasil</p><p className="mt-0.5 text-[15px]">Akun Anda sudah aktif. Silakan masuk untuk mulai melapor.</p></div></div>
      {error && <p className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-[15px] text-red-800" role="alert">{error}</p>}
      <form className="mt-7 flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1.5 text-[15px] font-semibold">Email<input className="form-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required /></label>
        <label className="flex flex-col gap-1.5 text-[15px] font-semibold">Kata sandi<span className="relative"><input className="form-input pr-12" type={showPassword ? "text" : "password"} placeholder="Masukkan kata sandi" value={password} onChange={(event) => setPassword(event.target.value)} required /><button type="button" className="absolute right-1 top-1 grid h-10 w-10 place-items-center rounded text-slate-600 hover:bg-slate-100" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}>{showPassword ? "◉" : "◌"}</button></span></label>
        <div className="text-right"><a href="#" className="inline-flex min-h-10 items-center px-2 text-sm font-semibold text-toba hover:underline">Lupa kata sandi?</a></div>
        <Button type="submit" className="w-full">Masuk</Button>
        <p className="text-center text-[15px] text-slate-600">Belum punya akun? <a href="/register" className="font-semibold text-toba hover:underline">Daftar sebagai warga</a></p>
      </form>
      <div className="mt-6 rounded-lg bg-white p-3 text-center text-sm text-slate-600"><p className="font-semibold">Akun demo prototype</p><p>Ketuk untuk mengisi. Kata sandi semua akun: tata1234</p><div className="mt-3 flex flex-wrap justify-center gap-2">{demoAccounts.map((account) => <button key={account} type="button" className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold hover:border-toba hover:text-toba" onClick={() => { setEmail(account); setPassword("tata1234"); }}>{account.split("@")[0]}</button>)}</div></div>
    </AuthShell>
  );
}
