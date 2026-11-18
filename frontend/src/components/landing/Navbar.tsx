"use client";

import { useCallback } from "react";
import type { MouseEvent } from "react";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const scrollToSection = useCallback((event: MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault();

    const start = window.scrollY;
    const element = target === "#" ? null : document.querySelector(target);
    const end = element ? window.scrollY + element.getBoundingClientRect().top - 72 : 0;
    const distance = end - start;
    const duration = 500;
    const startedAt = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startedAt) / duration, 1);
      const easedProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, start + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
    window.history.replaceState(null, "", target);
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200/70 bg-mist/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center gap-6 px-5">
        <a href="#" className="flex items-center gap-2.5" aria-label="TATA, kembali ke beranda">
          <span className="font-display text-[22px] font-bold text-deep">TATA</span>
          <span className="h-5 w-px bg-slate-300" aria-hidden="true" />
          <span className="text-[15px] font-semibold text-slate-600">TampahanTa</span>
        </a>
        <nav className="hidden gap-1 pl-4 md:flex" aria-label="Navigasi utama">
          <Button href="#" variant="ghost" onClick={(event) => scrollToSection(event, "#")}>Beranda</Button>
          <Button href="#cara-kerja" variant="ghost" onClick={(event) => scrollToSection(event, "#cara-kerja")}>Cara Kerja</Button>
          <Button href="#statistik" variant="ghost" onClick={(event) => scrollToSection(event, "#statistik")}>Statistik</Button>
        </nav>
        <div className="ml-auto flex gap-2">
          <Button href="/login" variant="secondary">Masuk</Button>
          <Button href="/register">Daftar</Button>
        </div>
      </div>
    </header>
  );
}
