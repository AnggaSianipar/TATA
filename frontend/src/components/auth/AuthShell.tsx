import type { ReactNode } from "react";
import Link from "next/link";

type AuthShellProps = {
  tagline: string;
  children: ReactNode;
};

export function AuthShell({ tagline, children }: AuthShellProps) {
  return (
    <main className="grid min-h-screen bg-mist lg:grid-cols-[609fr_670fr]">
      <aside className="relative min-h-[220px] overflow-hidden bg-deep lg:sticky lg:top-0 lg:h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_30%,#7ba7a0_0%,transparent_38%),linear-gradient(145deg,#0a3340,#0e4a5c_55%,#315f66)] opacity-70" />
        <div className="relative z-10 flex h-full flex-col justify-between p-12 max-lg:gap-12 max-lg:p-6 max-sm:p-5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Kembali ke beranda">
            <span className="font-display text-[22px] font-bold text-white">TATA</span><span className="h-5 w-px bg-white/30" /><span className="text-[15px] font-semibold text-teal-100">TampahanTa</span>
          </Link>
          <div><p className="max-w-md font-display text-3xl font-semibold leading-10 text-white max-sm:text-2xl max-sm:leading-8">{tagline}</p><p className="mt-4 text-base text-teal-50/85">Kecamatan Tampahan · Kabupaten Toba · Sumatera Utara</p></div>
        </div>
      </aside>
      <section className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-[440px]">{children}</div>
      </section>
    </main>
  );
}
