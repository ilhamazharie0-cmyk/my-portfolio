# Portfolio Ilham Azhari Lubis

Website portfolio satu halaman (HTML, CSS, JavaScript biasa, tanpa build step).

## Struktur folder

```
ilham-azhari-lubis-portfolio/
├── index.html                      # isi halaman
├── css/style.css                   # warna, font, layout (mode terang dan gelap)
├── js/main.js                      # tombol Copy di bagian kontak
├── assets/
│   ├── hero.webp                   # foto di bagian hero
│   └── Ilham_Azhari_Lubis_CV.pdf   # file CV untuk tombol Download CV
└── .vscode/extensions.json         # rekomendasi ekstensi Live Server
```

## Membuka di VS Code

1. Ekstrak zip, lalu di VS Code pilih **File > Open Folder** dan buka folder `ilham-azhari-lubis-portfolio`.
2. Pasang ekstensi **Live Server** (VS Code akan menawarkannya otomatis).
3. Klik kanan `index.html`, pilih **Open with Live Server**. Halaman terbuka di browser dan ikut berubah saat file disimpan.

Halaman juga bisa dibuka langsung dengan klik dua kali `index.html`. Font diambil dari Google Fonts, jadi perlu koneksi internet agar tampil sesuai desain.

### Alternatif: lewat npm

Situs ini tidak butuh npm untuk berjalan. Kalau Anda lebih suka terminal, jalankan di dalam folder proyek:

```
npm install
npm run dev
```

Lalu buka http://localhost:3000. Perintah ini memakai paket `serve` sebagai server lokal. Pastikan terminal berada di folder yang berisi `package.json`, kalau tidak npm akan memberi error ENOENT.

## Mengubah isi

- **Ganti CV:** timpa `assets/Ilham_Azhari_Lubis_CV.pdf` dengan file baru bernama sama. Kalau namanya berbeda, ubah dua link `href="assets/..."` di `index.html` (tombol Download CV di hero dan baris CV di bagian kontak).
- **Ganti foto:** timpa `assets/hero.webp`. Foto berlatar transparan (PNG atau WebP) paling pas dengan panel hero. Rasio 4:5 disarankan.
- **Ganti warna:** semua warna ada di bagian atas `css/style.css` sebagai variabel (`--accent`, `--bg`, dan seterusnya), satu set untuk mode terang dan satu untuk mode gelap.
- **Ganti teks:** semua teks ada di `index.html`, dikelompokkan per bagian (`#about`, `#experience`, `#education`, `#community`, `#contact`).

## Publikasi

Karena situsnya statis, folder ini bisa langsung diunggah ke Vercel, Netlify, GitHub Pages atau hosting biasa tanpa pengaturan tambahan.
