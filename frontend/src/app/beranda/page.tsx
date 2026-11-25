import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/Button";

const PAGE_TEXT = {
  greeting: "Horas, aaa",
  description: "Selamat datang di TATA. Mulai dengan laporan pertama Anda.",
  createReport: "＋ Buat laporan",
  emptyTitle: "Belum ada laporan",
  emptyDescription:
    "Lihat jalan berlubang, jembatan rusak, atau lampu jalan mati? Foto, tandai lokasinya, dan kirim. Hanya butuh 2 menit.",
} as const;

export default function BerandaPage() {
  return (
    <DashboardShell active="beranda">
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-[32px] font-bold leading-10 text-deep">
              {PAGE_TEXT.greeting}
            </h1>
            <p className="mt-1 text-base text-slate-600">
              {PAGE_TEXT.description}
            </p>
          </div>
          <Button href="/buat-laporan">{PAGE_TEXT.createReport}</Button>
        </div>

        <EmptyState
          title={PAGE_TEXT.emptyTitle}
          description={PAGE_TEXT.emptyDescription}
        />
      </main>
    </DashboardShell>
  );
}