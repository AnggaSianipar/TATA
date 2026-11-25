import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Card } from "@/components/ui/Card";

const PAGE_TEXT = {
  title: "Pengguna",
  description: "Kelola akun warga dan status aksesnya.",
  emptyTitle: "Belum ada data pengguna",
  emptyDescription:
    "Data pengguna akan muncul setelah backend dan database tersambung.",
} as const;

function EmptyUsersState() {
  return (
    <Card className="mt-6 p-10 text-center">
      <h2 className="font-display text-xl font-semibold text-deep">
        {PAGE_TEXT.emptyTitle}
      </h2>
      <p className="mt-1 text-slate-600">{PAGE_TEXT.emptyDescription}</p>
    </Card>
  );
}

export default function AdminUsersPage() {
  return (
    <DashboardShell active="pengguna" role="admin">
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <h1 className="font-display text-[32px] font-bold leading-10 text-deep">
          {PAGE_TEXT.title}
        </h1>
        <p className="mt-1 text-base text-slate-600">
          {PAGE_TEXT.description}
        </p>

        <EmptyUsersState />
      </main>
    </DashboardShell>
  );
}