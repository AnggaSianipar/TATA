import { Button } from "@/components/ui/Button";
import { AuthShell } from "@/components/auth/AuthShell";

export default function VerificationSuccessPage() {
  return (
    <AuthShell tagline="Selamat bergabung. Laporan pertama Anda tinggal beberapa ketukan lagi.">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-3xl text-green-700">✓</div>
      <h1 className="mt-6 font-display text-[28px] font-bold leading-9 text-deep">Verifikasi berhasil</h1>
      <div className="mt-5 flex gap-3 rounded-[10px] border border-green-200 bg-green-50 p-4 text-green-900"><span className="text-xl">✓</span><div><p className="font-semibold">Akun Anda sudah aktif</p><p className="mt-0.5 text-[15px]">Email a@gmail.com telah terverifikasi. Silakan masuk menggunakan email dan kata sandi yang Anda buat.</p></div></div>
      <Button href="/login" className="mt-6 w-full">→ Lanjut ke halaman masuk</Button>
    </AuthShell>
  );
}
