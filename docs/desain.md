# Design System – TATA (TampahanTa)

Konsep: instansi publik yang tenang dan terpercaya; nuansa air Danau Toba dengan aksen merah ulos hanya untuk aksi tegas (tolak, penanda lokasi).

## Warna
| Token | Hex | Pemakaian |
|---|---|---|
| toba | #0E4A5C | tombol utama, tautan, garis timeline |
| deep | #0A3340 | sidebar, judul |
| ulos | #A8281F | tolak, pin peta, angka langkah |
| mist | #EEF3F3 | latar halaman |
| ink | #17262B | teks utama |

Badge status: Menunggu = amber, Ditolak = red, Diteruskan = sky, Dalam Proses = teal, Selesai = green (bg 100, teks 800).

## Tipografi
- Judul: Bricolage Grotesque 600/700 (hero 4xl–5xl, judul halaman 2xl, judul kartu lg)
- Isi: Source Sans 3 400/600, 14–16px

## Komponen (kelas di setiap file)
`.btn` utama · `.btn2` sekunder · `.btnr` destruktif · `.in` input/select/textarea · `.lb` label · `.card` kartu (radius 12, border slate-200) · `.b` badge status · `.map` placeholder peta · sidebar dashboard (w-60, bg deep) · tabel antrean · timeline vertikal · alert merah (alasan penolakan / akun nonaktif).

## Halaman per peran
- Publik: `index.html` (Landing), `auth.html` (Login, Registrasi, OTP)
- Warga `warga.html`: daftar tiket, badge, alasan penolakan, timeline, form laporan (foto + peta)
- Admin `admin.html`: antrean, inspeksi foto, setujui/tolak, opsi nonaktifkan akun
- Perangkat Desa `desa.html`: daftar per desa, peta, ubah status, teruskan ke camat, tolak
- Camat `camat.html`: laporan eskalasi, catatan desa, ubah status

## Status laporan
Menunggu Validasi Admin → Ditolak Admin | Diteruskan ke Perangkat Desa → Ditolak Perangkat Desa | Ditangani Desa – Dalam Proses | Diteruskan ke Camat → Ditangani Kecamatan – Dalam Proses → Selesai Diperbaiki
