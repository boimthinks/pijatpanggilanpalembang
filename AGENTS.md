# AGENTS.md — Pijat Panggilan Palembang

## Identitas Project
- **Nama Brand:** Sriwijaya Massage Palembang
- **Domain:** https://pijatpanggilanpalembang.web.id
- **Niche:** Layanan Jasa Pijat Panggilan, Urut Tradisional, Reflexology, dan Spa Kebugaran Keluarga 24 Jam di Kota Palembang.
- **Tech Stack:** Astro 5 (Content Layer API, ClientRouter View Transitions, Prefetch Viewport, Tailwind CSS v4, Sharp).
- **Rasio Visual Wajib:** 4:3 (800x600 WebP) untuk Cardview, Single Blog, dan Single Layanan; serta 1200x630 WebP untuk Open Graph.

## Sumber Kebenaran Tunggal
- Seluruh data bisnis, tarif, SOP etika, daftar artikel, dan data brand merujuk ke: `SUMBER-PENGETAHUAN.md`.

## Standar Penulisan & Eksekusi Konten
- Semua penulisan konten blog dan money page wajib menggunakan skill `penulis-ahli` setelah dilakukan riset semantik menggunakan `pakar-entity-seo`.
- Mode otomatisasi orkestrasi diatur oleh skill `astro-autopilot`.
- **Alur Perintah Harian ("buat artikel apa kita hari ini"):**
  1. Rujuk file `ROADMAP-KONTEN-90-HARI.md`, cari baris pertama yang berstatus `[ ] Belum Dibuat`.
  2. Ambil judul, slug, fokus masalah, dan target internal link.
  3. Jalankan skill `pakar-entity-seo` untuk ekstraksi kata kunci, pemetaan entitas, dan penyusunan outline E-E-A-T.
  4. Jalankan skill `penulis-ahli` untuk menulis artikel lengkap bebas kanibalisasi, humanis, dan GEO 2026.
  5. Perbarui status di `ROADMAP-KONTEN-90-HARI.md` menjadi `[x] Terbit (YYYY-MM-DD)` dan catat di `SUMBER-PENGETAHUAN.md`.
  6. Jalankan `npm run build` untuk memvalidasi build SSG Astro.

## Perintah Penting
- `npm run dev`: Menjalankan local development server.
- `npm run build`: Menghasilkan gambar 4:3 & OG otomatis lalu memvalidasi build SSG Astro (`astro build`).
- `npm run preview`: Memeriksa hasil build lokal.


---

## Deployment Target

- **Platform:** DomaiNesia (cPanel Addon Domain)
- **Target Path:** `/home/apitowpc/pijatpanggilanpalembang/`
- **Catatan:** Document root untuk domain `pijatpanggilanpalembang.web.id` adalah folder `pijatpanggilanpalembang` (tanpa ekstensi `.web.id`). Folder `pijatpanggilanpalembang.web.id` di server hanya salinan lama dan tidak serves traffic publik. Karena nama folder tanpa titik tidak bisa dideteksi otomatis oleh script deploy, flag `--target-dir` selalu wajib dipakai.
- **Metode:** Gunakan skill `cpanel-domainesia`. Perintah cepat: `npm run deploy`
