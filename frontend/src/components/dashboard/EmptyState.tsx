import { Button } from "@/components/ui/Button";

export function EmptyState({ title, description, buttonLabel = "Buat laporan pertama" }: { title: string; description: string; buttonLabel?: string }) {
  return (
    <section className="mt-6 rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-col items-center px-6 py-14 text-center">
        <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-toba/10 text-3xl text-toba">▧</div>
        <h2 className="font-display text-lg font-semibold text-deep">{title}</h2>
        <p className="mt-1.5 max-w-sm text-[15px] leading-6 text-slate-600">{description}</p>
        <Button href="/buat-laporan" className="mt-5">＋ {buttonLabel}</Button>
      </div>
    </section>
  );
}
