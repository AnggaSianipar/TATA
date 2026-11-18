import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-20">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-toba p-7 text-white md:flex-row md:items-center md:p-10">
        <div>
          <h2 className="font-display text-2xl font-bold">Melihat kerusakan di sekitar Anda?</h2>
          <p className="mt-2 text-base text-teal-50">Laporan Anda membantu desa menentukan prioritas perbaikan.</p>
        </div>
        <Button href="/login" variant="white">Buat laporan sekarang <span aria-hidden="true">→</span></Button>
      </div>
    </section>
  );
}
