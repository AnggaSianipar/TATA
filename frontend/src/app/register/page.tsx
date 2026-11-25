"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

/* ---------- Konstanta ---------- */

const VILLAGES = [
  "Gurgur Aek Raja",
  "Lintong Nihuta",
  "Meat",
  "Tangga Batu Barat",
  "Tangga Batu Timur",
  "Tarabunga",
];

const MIN_PASSWORD_LENGTH = 8;
// Minimal 8 karakter dan memuat setidaknya 1 angka.
const PASSWORD_PATTERN = "(?=.*\\d).{8,}";

/* ---------- Halaman ---------- */

export default function RegisterPage() {
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const hasMismatch = confirmation.length > 0 && password !== confirmation;
  const passwordType = showPassword ? "text" : "password";

  return (
    <AuthShell tagline="Daftar sekali, laporkan kapan saja dari ponsel Anda.">
      <p className="text-sm font-semibold text-toba">Langkah 1 dari 2</p>
      <h1 className="mt-1 font-display text-[32px] font-bold leading-10 text-deep">
        Daftar akun warga
      </h1>
      <p className="mt-2 text-base text-slate-600">
        Kode verifikasi akan dikirim ke email Anda.
      </p>

      <form className="mt-7 flex flex-col gap-5" action="/verifikasi-otp">
        <Field label="Nama lengkap">
          <input
            className="form-input"
            placeholder="Contoh: Rotua Sitorus"
            required
          />
        </Field>

        <Field
          label="Email"
          hint="Pastikan email aktif untuk menerima kode OTP."
        >
          <input
            className="form-input"
            type="email"
            placeholder="nama@email.com"
            required
          />
        </Field>

        <Field
          label="Desa"
          hint="Desa di Kecamatan Tampahan tempat Anda tinggal."
        >
          <select className="form-input" defaultValue="" required>
            <option value="" disabled>
              Pilih desa
            </option>
            {VILLAGES.map((village) => (
              <option key={village}>{village}</option>
            ))}
          </select>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Kata sandi" hint="Minimal 8 karakter dan 1 angka.">
            <span className="relative">
              <input
                className="form-input pr-10"
                type={passwordType}
                minLength={MIN_PASSWORD_LENGTH}
                pattern={PASSWORD_PATTERN}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-1 top-1 grid h-10 w-10 place-items-center text-slate-600"
                onClick={() => setShowPassword((visible) => !visible)}
              >
                {showPassword ? "◉" : "◌"}
              </button>
            </span>
          </Field>

          <Field label="Konfirmasi kata sandi">
            <input
              className="form-input"
              type={passwordType}
              minLength={MIN_PASSWORD_LENGTH}
              value={confirmation}
              onChange={(event) => setConfirmation(event.target.value)}
              aria-invalid={hasMismatch}
              required
            />
            {hasMismatch && (
              <span className="text-sm font-normal text-red-700">
                Kata sandi tidak sama.
              </span>
            )}
          </Field>
        </div>

        <TermsCheckbox />

        <Button type="submit" className="w-full" disabled={hasMismatch}>
          Kirim kode OTP
        </Button>

        <p className="text-center text-[15px] text-slate-600">
          Sudah punya akun?{" "}
          <a href="/login" className="font-semibold text-toba hover:underline">
            Masuk
          </a>
        </p>
      </form>
    </AuthShell>
  );
}

/* ---------- Komponen pendukung ---------- */

function TermsCheckbox() {
  return (
    <label className="flex gap-3">
      <input type="checkbox" className="mt-1 h-5 w-5 accent-toba" required />
      <span>
        <span className="block font-semibold">
          Saya menyetujui ketentuan layanan TATA
        </span>
        <span className="block text-sm font-normal text-slate-600">
          Laporan berisi konten tidak pantas dapat menyebabkan akun
          dinonaktifkan.
        </span>
      </span>
    </label>
  );
}

type FieldProps = {
  label: string;
  hint?: string;
  children: ReactNode;
};

function Field({ label, hint, children }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-[15px] font-semibold">
      {label}
      {children}
      {hint && (
        <span className="text-sm font-normal text-slate-600">{hint}</span>
      )}
    </label>
  );
}