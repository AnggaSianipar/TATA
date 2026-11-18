import type { ReactNode } from "react";

export type Status = "menunggu" | "ditolak" | "diteruskan" | "proses" | "selesai";

type StatusBadgeProps = {
  status: Status;
  children?: ReactNode;
};

const statusClasses: Record<Status, string> = {
  menunggu:
    "bg-amber-100 text-amber-800 before:bg-amber-500",
  ditolak: "bg-red-100 text-red-800 before:bg-red-500",
  diteruskan: "bg-sky-100 text-sky-800 before:bg-sky-500",
  proses: "bg-teal-100 text-teal-800 before:bg-teal-500",
  selesai: "bg-green-100 text-green-800 before:bg-green-500",
};

const statusLabels: Record<Status, string> = {
  menunggu: "Menunggu",
  ditolak: "Ditolak",
  diteruskan: "Diteruskan",
  proses: "Dalam Proses",
  selesai: "Selesai",
};

export function StatusBadge({ status, children }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-semibold before:h-1.5 before:w-1.5 before:rounded-full before:content-[''] ${statusClasses[status]}`}
    >
      {children ?? statusLabels[status]}
    </span>
  );
}
