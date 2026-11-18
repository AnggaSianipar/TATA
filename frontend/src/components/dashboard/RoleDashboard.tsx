import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { Card } from "@/components/ui/Card";

type Role = "admin" | "desa" | "camat";

const content: Record<Role, {
  title: string;
  greeting: string;
  description: string;
  cards: [string, string, string][];
}> = {
  admin: {
    title: "Dashboard admin",
    greeting: "Kelola laporan warga",
    description: "Periksa kelayakan foto dan teruskan laporan ke perangkat desa.",
    cards: [["Antrean validasi", "0", "Laporan menunggu pemeriksaan"], ["Diteruskan hari ini", "0", "Laporan ke perangkat desa"], ["Akun warga", "0", "Akun terdaftar"]],
  },
  desa: {
    title: "Dashboard perangkat desa",
    greeting: "Pantau laporan di wilayah desa",
    description: "Periksa lokasi, tangani laporan, atau teruskan ke camat.",
    cards: [["Laporan masuk", "0", "Menunggu pengecekan lokasi"], ["Dalam proses", "0", "Sedang ditangani desa"], ["Selesai bulan ini", "0", "Laporan selesai diperbaiki"]],
  },
  camat: {
    title: "Dashboard camat",
    greeting: "Pantau eskalasi laporan",
    description: "Tindak lanjuti laporan yang membutuhkan dukungan kecamatan.",
    cards: [["Laporan eskalasi", "0", "Menunggu tindak lanjut"], ["Dalam proses", "0", "Ditangani kecamatan"], ["Selesai bulan ini", "0", "Laporan selesai diperbaiki"]],
  },
};

export function RoleDashboard({ role }: { role: Role }) {
  const details = content[role];

  return (
    <DashboardShell active={role} role={role}>
      <main className="w-full max-w-[1200px] px-8 py-8 max-[900px]:px-5 max-[900px]:py-6">
        <div><h1 className="font-display text-[32px] font-bold leading-10 text-deep">{details.title}</h1><p className="mt-1 text-base text-slate-600">{details.greeting}. {details.description}</p></div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {details.cards.map(([label, value, meta]) => <Card key={label} className="p-6"><p className="text-[15px] text-slate-600">{label}</p><p className="mt-1 font-display text-4xl font-bold text-deep">{value}</p><p className="mt-1 text-sm text-slate-600">{meta}</p></Card>)}
        </div>
        <Card className="mt-6 p-8 text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-toba/10 text-2xl text-toba">▧</div><h2 className="mt-4 font-display text-xl font-semibold text-deep">Belum ada data untuk ditampilkan</h2><p className="mx-auto mt-1 max-w-md text-[15px] leading-6 text-slate-600">Data akan muncul setelah backend dan database tersambung.</p></Card>
      </main>
    </DashboardShell>
  );
}
