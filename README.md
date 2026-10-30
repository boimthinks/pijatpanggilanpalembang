# Sriwijaya Massage Palembang — Pijat Panggilan Palembang 24 Jam

Official website repository untuk **Sriwijaya Massage Palembang**, platform layanan jasa pijat panggilan, urut tradisional Nusantara, reflexology, dan spa kebugaran keluarga 24 jam ke hotel, rumah, kost, dan apartemen di seluruh wilayah Kota Palembang.

🌐 **Domain Produksi:** [https://pijatpanggilanpalembang.web.id](https://pijatpanggilanpalembang.web.id)  
🚀 **Hosting Platform:** Netlify  
⚡ **Framework:** Astro 5 (Static Site Generation / SSG)

---

## 🌟 Fitur Utama

- **Sistem Pemesanan Interaktif Berbasis Peta (Map Coordinate Picker):**
  - Menggunakan Leaflet.js + OpenStreetMap dengan pin marker SVG kustom oranye yang dapat digeser (*draggable*) untuk menandai titik lokasi kedatangan secara akurat.
  - Tombol deteksi geolokasi otomatis peramban (*"📍 Deteksi Lokasi Saya"*).
  - Pilihan saluran komunikasi konfirmasi pemesanan: **WhatsApp**, **Telegram**, atau **Email**.
  - Opsi preferensi gender terapis (*Terapis Wanita* & *Terapis Pria*) serta pemilihan waktu kedatangan dan jenis layanan.
- **Halaman Konfirmasi Cerdas (`/terima-kasih/`):**
  - Menampilkan ringkasan nomor booking, pilihan layanan, preferensi terapis, dan koordinat GPS lengkap dengan tautan instan ke Google Maps.
- **Performa Tinggi & Navigasi Cepat:**
  - View Transitions via `ClientRouter` untuk navigasi halaman tanpa reload.
  - Pre-fetching cerdas berbasis viewport (`defaultStrategy: 'viewport'`).
  - Desain responsif modern bertema **Oranye & Putih** yang bersih dan elegan menggunakan Tailwind CSS v4.
- **Visual Otomatis Berstandar Emas (Rasio 4:3 & OG 1200x630):**
  - Skrip pembuatan aset visual berbasis SVG + Sharp (`scripts/generate-images.js`) yang otomatis membuat gambar beresolusi tinggi WebP untuk cardview (800x600) dan Open Graph (1200x630).
  - Seluruh gambar cardview dapat diklik langsung (*clickable*).
- **SEO Semantik & AI Overviews (GEO 2026 Ready):**
  - Struktur data JSON-LD lengkap: `HealthAndBeautyBusiness`, `LocalBusiness`, `Service`, `Article`, `BreadcrumbList`, dan `FAQPage`.
  - Dukungan AI Discoverability via file `public/llms.txt` dan `public/robots.txt`.
  - Integrasi komponen Google Source Preferences untuk menyimpan situs sebagai sumber favorit pencarian Google.
- **Kode Etik & Regulasi:**
  - Murni kebugaran keluarga dan relaksasi sehat.
  - Pembinaan Surat Terdaftar Pengobat Tradisional (STPT) Dinas Kesehatan Kota Palembang & sertifikasi BNSP.

---

## 🛠️ Tech Stack

- **Framework:** [Astro 5](https://astro.build/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Map Engine:** [Leaflet.js](https://leafletjs.com/) & [OpenStreetMap](https://www.openstreetmap.org/)
- **Image Processing:** [Sharp](https://sharp.pixelplumbing.com/)
- **Deployment:** [Netlify](https://www.netlify.com/)
- **Content Management:** Astro Content Layer API (`src/content/blog/`)

---

## 📁 Struktur Direktori

```text
├── public/
│   ├── favicon.svg
│   ├── llms.txt
│   └── robots.txt
├── scripts/
│   └── generate-images.js      # Generator otomatis aset 4:3 & OG
├── src/
│   ├── components/             # Navbar, Footer, WhatsAppCTA, GoogleSourcePreferences
│   ├── content/
│   │   ├── blog/               # Artikel blog format Markdown
│   │   └── config.ts           # Schema Content Layer Zod
│   ├── data/
│   │   ├── areas.ts            # Data cakupan kecamatan Palembang
│   │   ├── pricing.ts          # Rincian tarif dan paket
│   │   └── services.ts         # Katalog menu layanan
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout induk, ClientRouter & SEO Schema
│   ├── pages/
│   │   ├── area/               # Halaman spoke wilayah Palembang
│   │   ├── blog/               # Portal edukasi kebugaran
│   │   ├── layanan/            # Halaman pilar layanan (Money Pages)
│   │   ├── terapis/            # Info terapis pria & wanita
│   │   ├── booking.astro       # Formulir reservasi interaktif & peta
│   │   ├── kontak.astro        # Hubungi kami
│   │   ├── syarat-ketentuan.astro
│   │   ├── tarif.astro         # Transparansi harga tanpa DP
│   │   ├── tentang-kami.astro  # Profil & legalitas STPT
│   │   ├── terima-kasih.astro  # Konfirmasi & Google Maps link
│   │   └── index.astro         # Beranda utama
│   └── styles/
│       └── global.css          # Tailwind CSS v4 import
├── astro.config.mjs            # Konfigurasi Astro
├── netlify.toml                # Konfigurasi build & header Netlify
└── package.json
```

---

## 🚀 Panduan Instalasi & Pengembangan

### 1. Prasyarat
- Node.js versi 20 ke atas
- npm atau pnpm

### 2. Kloning Repositori
```bash
git clone https://github.com/boimthinks/pijatpanggilanpalembang.git
cd pijatpanggilanpalembang
```

### 3. Pasang Dependensi
```bash
npm install
```

### 4. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di `http://localhost:4321`.

### 5. Bangun untuk Produksi
```bash
npm run build
```
Perintah ini akan secara otomatis:
1. Menghasilkan semua aset gambar WebP 4:3 dan OG 1200x630 via Sharp.
2. Mengompilasi 28 halaman statis Astro ke dalam folder `dist/`.

### 6. Preview Hasil Build
```bash
npm run preview
```

---

## 🌐 Panduan Deployment ke Netlify

Proyek ini sudah dilengkapi dengan file `netlify.toml`. Saat Anda menghubungkan repositori GitHub ini ke Netlify:

1. **Build Command:** `npm run build`
2. **Publish Directory:** `dist`
3. **Environment Variable (Opsional):** `NODE_VERSION=20`
4. **Custom Domain:** Masukkan `pijatpanggilanpalembang.web.id` dan arahkan DNS Netlify (CNAME / ALIAS / ANAME) sesuai petunjuk dashboard Netlify.

---

## 📄 Lisensi & Hak Cipta

© 2026 **Sriwijaya Massage Palembang**. Seluruh hak cipta dilindungi undang-undang.
