"use client";

import { useEffect, useRef, useState } from "react";
import { AuthShell } from "@/components/auth/AuthShell";
import { Button } from "@/components/ui/Button";

/* ---------- Konstanta ---------- */

const OTP_LENGTH = 6;
const RESEND_COOLDOWN_SECONDS = 56;

// Data sementara sampai email diambil dari proses pendaftaran.
const REGISTERED_EMAIL = "a@gmail.com";
const PROTOTYPE_CODE = "482915";

const EMPTY_DIGITS = Array<string>(OTP_LENGTH).fill("");

/* ---------- Halaman ---------- */

export default function VerificationPage() {
  const [digits, setDigits] = useState(EMPTY_DIGITS);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const { seconds, isCounting, restart } = useCountdown(
    RESEND_COOLDOWN_SECONDS,
  );

  const isIncomplete = digits.some((digit) => !digit);

  function updateDigit(index: number, rawValue: string) {
    const digit = rawValue.replace(/\D/g, "").slice(-1);

    setDigits((previous) =>
      previous.map((current, i) => (i === index ? digit : current)),
    );

    if (rawValue) inputRefs.current[index + 1]?.focus();
  }

  return (
    <AuthShell tagline="Kami hanya memastikan email Anda benar milik Anda.">
      <p className="text-sm font-semibold text-toba">Langkah 2 dari 2</p>
      <h1 className="mt-1 font-display text-[32px] font-bold leading-10 text-deep">
        Verifikasi email
      </h1>
      <p className="mt-2 text-base text-slate-600">
        Masukkan {OTP_LENGTH} digit kode yang kami kirim ke{" "}
        <strong className="font-semibold text-ink">{REGISTERED_EMAIL}</strong>.
      </p>

      <form className="mt-7" action="/verifikasi-berhasil">
        <fieldset className="grid grid-cols-6 gap-3 max-[400px]:gap-2">
          <legend className="sr-only">Kode verifikasi {OTP_LENGTH} digit</legend>
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(element) => {
                inputRefs.current[index] = element;
              }}
              className="h-16 w-full min-w-0 rounded-lg border border-slate-300 bg-white text-center font-display text-2xl font-semibold text-deep outline-none focus:border-toba focus:ring-4 focus:ring-toba/15 max-[400px]:h-13"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(event) => updateDigit(index, event.target.value)}
              aria-label={`Digit ${index + 1}`}
              required
            />
          ))}
        </fieldset>

        <ResendRow
          seconds={seconds}
          canResend={!isCounting}
          onResend={restart}
        />

        <Button type="submit" className="w-full" disabled={isIncomplete}>
          Verifikasi
        </Button>
      </form>

      <p className="mt-5 rounded-lg bg-white px-3 py-2 text-center text-sm text-slate-600">
        Prototype: kode yang benar adalah{" "}
        <code className="font-mono font-bold text-ink">{PROTOTYPE_CODE}</code>
      </p>

      <div className="mt-5 text-center">
        <a
          href="/register"
          className="px-2 py-2 text-sm font-semibold text-toba hover:underline"
        >
          Ganti email
        </a>
      </div>
    </AuthShell>
  );
}

/* ---------- Hook timer ---------- */

function useCountdown(initialSeconds: number) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = window.setInterval(
      () => setSeconds((value) => Math.max(value - 1, 0)),
      1000,
    );
    return () => window.clearInterval(timer);
  }, []);

  return {
    seconds,
    isCounting: seconds > 0,
    restart: () => setSeconds(initialSeconds),
  };
}

/* ---------- Komponen pendukung ---------- */

type ResendRowProps = {
  seconds: number;
  canResend: boolean;
  onResend: () => void;
};

function ResendRow({ seconds, canResend, onResend }: ResendRowProps) {
  const formattedTime = `00:${String(seconds).padStart(2, "0")}`;

  return (
    <div className="flex min-h-11 items-center justify-between gap-3 py-5 text-[15px] text-slate-600">
      <p>
        Kirim ulang kode dalam{" "}
        <strong className="text-ink">{formattedTime}</strong>
      </p>
      <button
        type="button"
        className="px-2 font-semibold text-toba disabled:cursor-not-allowed disabled:text-slate-400"
        disabled={!canResend}
        onClick={onResend}
      >
        Kirim ulang
      </button>
    </div>
  );
}