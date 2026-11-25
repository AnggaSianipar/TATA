"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

/* ---------- Konstanta ---------- */

const DEMO_PASSWORD = "tata1234";
const DISABLED_ACCOUNT = "nonaktif@tata.id";

const DEMO_ACCOUNTS = [
  "warga@tata.id",
  "admin@tata.id",
  "desa@tata.id",
  "camat@tata.id",
  DISABLED_ACCOUNT,
];

const DEFAULT_ROUTE = "/beranda";

const ROUTE_BY_EMAIL: Record<string, string> = {
  "admin@tata.id": "/admin",
  "desa@tata.id": "/desa",
  "camat@tata.id": "/camat",
};

const ERROR_MESSAGES = {
  disabled: "Akun ini dinonaktifkan. Hubungi admin kecamatan untuk bantuan.",
  wrongPassword: `Kata sandi demo salah. Gunakan ${DEMO_PASSWORD}.`,
} as const;

/* ---------- Logika ---------- */

/** Mengembalikan pesan error, atau null jika login demo valid. */
function validateLogin(email: string, password: string): string | null {
  if (email === DISABLED_ACCOUNT) return ERROR_MESSAGES.disabled;

  const isDemoAccount = DEMO_ACCOUNTS.includes(email);
  if (isDemoAccount && password !== DEMO_PASSWORD) {
    return ERROR_MESSAGES.wrongPassword;
  }

  return null;
}

/* ---------- Halaman ---------- */

export default function LoginPage() {
  const [email, setEmail] = useState("a@gmail.com");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();
    const validationError = validateLogin(normalizedEmail, password);

    if (validationError) {
      setError(validationError);
      return;
    }

    router.push(ROUTE_BY_EMAIL[normalizedEmail] ?? DEFAULT_ROUTE);
  }

  function fillDemoAccount(account: string) {
    setEmail(account);
    setPassword(DEMO_PASSWORD);
  }

  return (
    <AuthShell tagline="Satu laporan, dipantau sampai jalan kembali mulus.">
      <h1 className="font-display text-[32px] font-bold leading-10 text-deep">
        Masuk ke TATA
      </h1>
      <p className="mt-2 text-base text-slate-600">
        Gunakan email dan kata sandi yang Anda daftarkan.
      </p>

      <VerificationNotice />

      {error && (
        <p
          className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-[15px] text-red-800"
          role="alert"
        >
          {error}
        </p>
      )}

      <form className="mt-7 flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
          Email
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <PasswordField
          value={password}
          visible={showPassword}
          onChange={setPassword}
          onToggleVisible={() => setShowPassword((visible) => !visible)}
        />

        <div className="text-right">
          <a
            href="#"
            className="inline-flex min-h-10 items-center px-2 text-sm font-semibold text-toba hover:underline"
          >
            Lupa kata sandi?
          </a>
        </div>

        <Button type="submit" className="w-full">
          Masuk
        </Button>

        <p className="text-center text-[15px] text-slate-600">
          Belum punya akun?{" "}
          <a
            href="/register"
            className="font-semibold text-toba hover:underline"
          >
            Daftar sebagai warga
          </a>
        </p>
      </form>

      <DemoAccounts accounts={DEMO_ACCOUNTS} onSelect={fillDemoAccount} />
    </AuthShell>
  );
}

/* ---------- Komponen pendukung ---------- */

function VerificationNotice() {
  return (
    <div className="mt-5 flex gap-3 rounded-[10px] border border-green-200 bg-green-50 p-4 text-green-900">
      <span className="text-xl">✓</span>
      <div>
        <p className="font-semibold">Verifikasi berhasil</p>
        <p className="mt-0.5 text-[15px]">
          Akun Anda sudah aktif. Silakan masuk untuk mulai melapor.
        </p>
      </div>
    </div>
  );
}

type PasswordFieldProps = {
  value: string;
  visible: boolean;
  onChange: (value: string) => void;
  onToggleVisible: () => void;
};

function PasswordField({
  value,
  visible,
  onChange,
  onToggleVisible,
}: PasswordFieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
      Kata sandi
      <span className="relative">
        <input
          className="form-input pr-12"
          type={visible ? "text" : "password"}
          placeholder="Masukkan kata sandi"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required
        />
        <button
          type="button"
          className="absolute right-1 top-1 grid h-10 w-10 place-items-center rounded text-slate-600 hover:bg-slate-100"
          onClick={onToggleVisible}
          aria-label={
            visible ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"
          }
        >
          {visible ? "◉" : "◌"}
        </button>
      </span>
    </label>
  );
}

type DemoAccountsProps = {
  accounts: string[];
  onSelect: (account: string) => void;
};

function DemoAccounts({ accounts, onSelect }: DemoAccountsProps) {
  return (
    <div className="mt-6 rounded-lg bg-white p-3 text-center text-sm text-slate-600">
      <p className="font-semibold">Akun demo prototype</p>
      <p>Ketuk untuk mengisi. Kata sandi semua akun: {DEMO_PASSWORD}</p>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {accounts.map((account) => (
          <button
            key={account}
            type="button"
            className="rounded-full border border-slate-300 px-3 py-1 text-sm font-semibold hover:border-toba hover:text-toba"
            onClick={() => onSelect(account)}
          >
            {account.split("@")[0]}
          </button>
        ))}
      </div>
    </div>
  );
}