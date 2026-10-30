# Arsitektur SILO Website: Pijat Panggilan Palembang

Berdasarkan riset kata kunci dan pemetaan entitas pada `RISET-KEYWORD-PIJAT-PALEMBANG.md`, berikut adalah rancangan arsitektur SILO website. Arsitektur ini dirancang untuk mendistribusikan *link equity* secara optimal, mencegah kanibalisasi kata kunci, dan memaksimalkan konversi lokal (Local SEO Palembang).

---

## 1. Diagram Hierarki Arsitektur SILO

```text
HOMEPAGE (/)
├── SILO 1: LAYANAN UTAMA (/layanan/)
│   ├── /layanan/pijat-tradisional/
│   ├── /layanan/pijat-refleksi/
│   ├── /layanan/pijat-panggilan-ke-rumah/
│   ├── /layanan/pijat-panggilan-hotel-24-jam/
│   └── /layanan/body-scrub-kerokan/
│
├── SILO 2: PREFERENSI TERAPIS (/terapis/)
│   ├── /terapis/pria/
│   └── /terapis/wanita/
│
├── SILO 3: AREA JANGKAUAN LOKAL (/area/)
│   ├── /area/ilir-timur/
│   ├── /area/ilir-barat/
│   ├── /area/sukarami-bandara/
│   ├── /area/kemuning-sako-kalidoni/
│   └── /area/seberang-ulu-jakabaring/
│
├── SILO 4: BLOG & EDUKASI KESEHATAN (/blog/)
│   ├── KLASTER PANDUAN TRANSAKSIONAL:
│   │   ├── /blog/tarif-pijat-panggilan-palembang/
│   │   ├── /blog/tips-memilih-pijat-panggilan-aman-keluarga/
│   │   ├── /blog/manfaat-pijat-capek-setelah-perjalanan/
│   │   └── /blog/terapi-pegal-pinggang-kebugaran-pria/
│   │
│   └── KLASTER MODALITAS & TEKNIK TERAPI:
│       ├── /blog/perbedaan-shiatsu-vs-pijat-tradisional/
│       ├── /blog/mengenal-swedish-massage-relaksasi/
│       ├── /blog/balinese-massage-vs-urut-tradisional/
│       ├── /blog/manfaat-dry-massage-tanpa-minyak/
│       ├── /blog/hot-stone-therapy-vs-kerokan-masuk-angin/
│       ├── /blog/titik-totok-wajah-pereda-migrain/
│       └── /blog/kombinasi-refleksi-dan-lulur-body-scrub/
│
└── HALAMAN TRUST & TRANSAKSI
    ├── /tarif/
    ├── /tentang-kami/
    ├── /kontak/ (Pemesanan WhatsApp)
    └── /syarat-ketentuan/ (Kode Etik & SOP Keamanan)
```

---

## 2. Rincian Silo, Target URL, & Distribusi Kata Kunci

### TINGKAT 0: HOMEPAGE (ROOT PILLAR)
- **Target URL:** `/`
- **Intensi:** Broad Commercial & Brand Authority
- **Target Kata Kunci:**
  - `pijat panggilan palembang` (Primary 1)
  - `massage panggilan palembang profesional`
  - `pijat palembang terdekat`
  - `jasa pijat panggilan palembang`
- **Fokus Konten:** Penjelasan ringkas keunggulan (terapis tersertifikasi BNSP, berizin STPT, higienis bawa matras sendiri, standby 24 jam), cuplikan 4 pilar layanan, ulasan pelanggan, area jangkauan Palembang, dan tombol CTA WhatsApp pemesanan cepat.
- **Schema.org:** `HealthAndBeautyBusiness`, `LocalBusiness`.

---

### SILO 1: LAYANAN UTAMA (MONEY PAGES)
Hub URL: `/layanan/` (Menjelaskan standar SOP, sterilisasi alat, opsi set matras vs tanpa matras).

#### 1. Pillar Layanan: Pijat Tradisional Full Body & Urut Nusantara
- **Target URL:** `/layanan/pijat-tradisional/`
- **Target Kata Kunci:**
  - `pijat tradisional palembang`
  - `tukang urut palembang`
  - `pijat urut palembang`
  - `pijat urut tradisional palembang`
  - `pijat full body panggilan palembang`
  - `tukang urut capek dan keseleo tradisional di palembang`
  - `jasa urut tradisional palembang terpercaya`
  - `pijat urut capek dan pegal linu palembang`
- **Fokus Konten:** Teknik urut Nusantara (effleurage & petrissage), penanganan pegal linu, kelelahan kerja fisik berat, opsi minyak rempah hangat/GPU/zaitun, durasi (60, 90, 120 menit).
- **Schema.org:** `Service` (sub-type: `Traditional Body Massage`).

#### 2. Pillar Layanan: Pijat Refleksi Kaki & Tubuh
- **Target URL:** `/layanan/pijat-refleksi/`
- **Target Kata Kunci:**
  - `pijat refleksi panggilan rumah palembang`
  - `terapis pijat refleksi panggilan kantor dan perumahan di ilir barat palembang`
  - `dry massage panggilan palembang`
- **Fokus Konten:** Titik akupresur telapak kaki (plantar reflexology), pelancaran peredaran darah, opsi dry massage tanpa minyak untuk area kantor/perumahan.
- **Schema.org:** `Service` (sub-type: `Home Service Reflexology`).

#### 3. Pillar Layanan: Pijat Panggilan ke Rumah & Kost (Home Service)
- **Target URL:** `/layanan/pijat-panggilan-ke-rumah/`
- **Target Kata Kunci:**
  - `pijat panggilan ke rumah palembang`
  - `jasa urut panggilan ke rumah terdekat palembang`
  - `massage panggilan kos dan apartemen palembang`
  - `jasa pijat panggilan ke rumah bawa matras lipat sendiri palembang`
  - `tarif pijat panggilan 2 orang group massage bergantian di palembang`
- **Fokus Konten:** Keunggulan home service: privasi maksimal, opsi terapis bawa matras lipat steril + linen spray, melayani rumah tapak, apartemen, kos, dan paket group massage 2 orang bergantian.
- **Schema.org:** `Service` (channel: `HomeDelivery`).

#### 4. Pillar Layanan: Pijat Panggilan Hotel 24 Jam
- **Target URL:** `/layanan/pijat-panggilan-hotel-24-jam/`
- **Target Kata Kunci:**
  - `pijat panggilan palembang 24 jam`
  - `massage panggilan palembang 24 jam`
  - `jasa pijat panggilan hotel palembang`
  - `jasa pijat panggilan palembang ke hotel bintang 24 jam fast respon`
  - `nomor telepon pijat panggilan malam hari palembang`
- **Fokus Konten:** Layanan panggilan cepat (30-45 menit tiba di hotel Aryaduta, The Zuri, Aston, Wyndham, Novotel, dll.), etika terapis rapi & sopan, melayani tamu bisnis & wisatawan malam hari.
- **Schema.org:** `Service` (hoursAvailable: `Mo-Su 00:00-24:00`).

#### 5. Pillar Layanan: Relaksasi Lulur, Scrub & Kerokan
- **Target URL:** `/layanan/body-scrub-kerokan/`
- **Target Kata Kunci:**
  - `jasa pijat dan kerokan panggilan palembang`
  - `pijat lulur dan scrub panggilan palembang`
  - `order massage full body dan totok wajah panggilan kos di palembang`
  - `tukang urut capek dan masuk angin panggilan ke rumah di kemuning palembang`
- **Fokus Konten:** Paket kombo kebugaran tradisional: lulur zaitun Mustika Ratu, kerokan punggung higienis koin khusus + minyak kayu putih, dan totok wajah relaksasi.
- **Schema.org:** `Service` (add-on packages).

---

### SILO 2: PREFERENSI TERAPIS & GENDER (PRIVACY & SEGMENTATION)
Hub URL: `/terapis/` (Transparansi kualifikasi tim, kode etik ketat no-vitalitas, standar sertifikasi BNSP).

#### 1. Sub-Silo: Layanan Terapis Pria
- **Target URL:** `/terapis/pria/`
- **Target Kata Kunci:**
  - `pijat panggilan palembang terapis pria`
  - `pijat pria palembang`
  - `tukang urut pria panggilan ke rumah di palembang`
  - `terapis massage pria profesional palembang`
  - `jasa pijat capek bertenaga terapis pria palembang`
  - `pijat kebugaran khusus pria di palembang`
- **Fokus Konten:** Khusus bagi pelanggan pria yang membutuhkan tekanan pijat bertenaga kuat untuk relaksasi otot berat, pekerja kantor, dan atlet/olahragawan.
- **Schema.org:** `Person` / `Employee` (gender: Male).

#### 2. Sub-Silo: Layanan Terapis Wanita
- **Target URL:** `/terapis/wanita/`
- **Target Kata Kunci:**
  - `pijat panggilan palembang terapis wanita`
  - `pijat palembang wanita`
  - `jasa pijat panggilan khusus wanita palembang`
  - `terapis wanita panggilan ke rumah palembang muslimah`
  - `spa panggilan khusus wanita di palembang`
- **Fokus Konten:** Jaminan privasi dan kenyamanan 100% untuk kaum wanita, ibu rumah tangga, dan pelanggan muslimah (layanan wanita oleh terapis wanita).
- **Schema.org:** `Person` / `Employee` (gender: Female).

---

### SILO 3: AREA JANGKAUAN LOKAL (GEO-TARGETING SILO)
Hub URL: `/area/` (Peta cakupan 16 kecamatan di Kota Palembang bebas ongkir / transparan).

#### 1. Halaman Area: Ilir Timur & Pusat Kota
- **Target URL:** `/area/ilir-timur/`
- **Target Kata Kunci:**
  - `pijat panggilan palembang ilir timur`
  - `pijat panggilan rajawali palembang`
  - `pijat panggilan terdekat jalan sudirman palembang`
  - `order massage panggilan ke apartemen rajawali palembang malam hari`
- **Coverage:** Ilir Timur I, Ilir Timur II, Ilir Timur III, Koridor Jl. Jend Sudirman, Veteran, Rajawali.

#### 2. Halaman Area: Ilir Barat & Residensial Elit
- **Target URL:** `/area/ilir-barat/`
- **Target Kata Kunci:**
  - `pijat panggilan palembang ilir barat`
  - `biaya jasa pijat capek panggilan ke rumah di palembang ilir`
  - `pijat panggilan tengah malam di ilir barat palembang`
- **Coverage:** Ilir Barat I, Ilir Barat II, Demang Lebar Daun, Bukit Besar, Kawasan Perumahan Polygon.

#### 3. Halaman Area: Sukarami & Bandara SMB II
- **Target URL:** `/area/sukarami-bandara/`
- **Target Kata Kunci:**
  - `pijat panggilan palembang sukarami`
  - `tukang pijat panggilan terdekat sukarami palembang`
  - `massage terdekat dari bandara smb ii palembang`
  - `pesan tukang urut profesional panggilan ke rumah perumahan sukarami palembang`
- **Coverage:** Sukarami, Alang-Alang Lebar, Talang Kelapa, CitraGrand City, Kebun Bunga.

#### 4. Halaman Area: Kemuning, Sako, Kalidoni
- **Target URL:** `/area/kemuning-sako-kalidoni/`
- **Target Kata Kunci:**
  - `jasa pijat panggilan aman profesional keluarga di palembang kalidoni sako`
  - `tukang urut capek dan masuk angin panggilan ke rumah di kemuning palembang`
- **Coverage:** Kemuning, Sekip, Pipa Reja, Sako Kenten, Pusri, Kalidoni.

#### 5. Halaman Area: Seberang Ulu & Jakabaring
- **Target URL:** `/area/seberang-ulu-jakabaring/`
- **Target Kata Kunci:**
  - `massage panggilan seberang ulu palembang`
  - `pijat panggilan hotel dekat jakabaring sport city`
- **Coverage:** Seberang Ulu I, Seberang Ulu II, Plaju, Jakabaring, OPI Mall area.

---

### SILO 4: BLOG & TOPICAL AUTHORITY (INFORMATIONAL / GEO AI)
Hub URL: `/blog/` (Pusat edukasi kebugaran keluarga & artikel panduan).

#### Klaster A: Panduan Konsumen & Edukasi Praktis
1. `/blog/tarif-pijat-panggilan-palembang/`
   - *Keywords:* `info harga pijat di palembang`, `tarif pijat panggilan palembang per jam`, `biaya terapis pijat tradisional panggilan palembang tanpa biaya transport tambahan`.
   - *CTA Internal Link:* Mengarah ke `/tarif/` dan `/layanan/pijat-panggilan-ke-rumah/`.
2. `/blog/tips-memilih-pijat-panggilan-aman-keluarga/`
   - *Keywords:* `jasa urut tradisional palembang terpercaya`, `rekomendasi pijat urut capek panggilan pria dan wanita di palembang`.
   - *CTA Internal Link:* Mengarah ke `/tentang-kami/` dan `/syarat-ketentuan/`.
3. `/blog/manfaat-pijat-capek-setelah-perjalanan/`
   - *Keywords:* `daftar tempat pijat terbaik di palembang`, `ulasan jasa massage di kota palembang`, `massage terdekat dari bandara smb ii palembang`.
   - *CTA Internal Link:* Mengarah ke `/layanan/pijat-panggilan-hotel-24-jam/` dan `/area/sukarami-bandara/`.
4. `/blog/terapi-pegal-pinggang-kebugaran-pria/` (Solusi Edukasi Kueri Vitalitas)
   - *Keywords:* `pijat refleksi saraf pinggang dan stamina pria di palembang`, `terapi saraf kejepit dan pegal pinggang pria palembang`, `edukasi perbedaan pijat kebugaran pria vs pengobatan vitalitas`.
   - *CTA Internal Link:* Mengarah ke `/terapis/pria/` dan `/layanan/pijat-tradisional/`.
5. `/blog/keseleo-dan-terkilir-kapan-boleh-diurut/` (Edukasi Medis & Anti-Malpraktik)
   - *Keywords:* `tukang urut keseleo palembang`, `tukang urut terkilir palembang`, `rekomendasi tukang urut terkilir dan keseleo berpengalaman di palembang`.
   - *Fokus:* Panduan kapan cedera boleh diurut (fase pemulihan otot kaku) vs pertolongan pertama RICE (fase akut bengkak/radang).
   - *CTA Internal Link:* Mengarah ke `/layanan/pijat-tradisional/`.

#### Klaster B: Edukasi Modalitas & Ragam Teknik Pijat (Bahan Komparasi)
1. `/blog/perbedaan-shiatsu-vs-pijat-tradisional/`
   - *Fokus:* Membedakan teknik akupresur meridian Jepang (Shiatsu/Seitai) dengan usapan berirama urut tradisional. Solusi untuk otot kaku tanpa trauma minyak.
   - *CTA Internal Link:* Mengarah ke `/layanan/pijat-tradisional/` dan `/terapis/pria/`.
2. `/blog/mengenal-swedish-massage-relaksasi/`
   - *Fokus:* Pijatan usapan lembut (effleurage ritmis) untuk meredakan stres mental dan insomnia, tanpa rasa sakit.
   - *CTA Internal Link:* Mengarah ke `/layanan/pijat-panggilan-ke-rumah/`.
3. `/blog/balinese-massage-vs-urut-tradisional/`
   - *Fokus:* Khasiat perpaduan minyak esensial aromaterapi tropis (kamboja/cendana) dengan peregangan otot dalam untuk meredakan nyeri sendi.
   - *CTA Internal Link:* Mengarah ke `/layanan/pijat-tradisional/`.
4. `/blog/manfaat-dry-massage-tanpa-minyak/`
   - *Fokus:* Pijatan akupresur dan peregangan ala Thai Massage dengan pakaian lengkap, praktis untuk penghuni kost, kantor, atau tamu hotel yang tidak ingin tubuh lengket.
   - *CTA Internal Link:* Mengarah ke `/layanan/pijat-refleksi/`.
5. `/blog/hot-stone-therapy-vs-kerokan-masuk-angin/`
   - *Fokus:* Komparasi terapi batu vulkanik hangat dan koin kerokan higienis untuk melarutkan gas masuk angin dan meriang.
   - *CTA Internal Link:* Mengarah ke `/layanan/body-scrub-kerokan/`.
6. `/blog/titik-totok-wajah-pereda-migrain/`
   - *Fokus:* Titik akupresur kepala dan sinus untuk meredakan ketegangan mata lelah bekerja di depan layar komputer.
   - *CTA Internal Link:* Mengarah ke `/layanan/body-scrub-kerokan/`.
7. `/blog/kombinasi-refleksi-dan-lulur-body-scrub/`
   - *Fokus:* Manfaat ganda melancarkan sirkulasi darah organ vital sekaligus eksfoliasi kulit mati dengan butiran zaitun alami.
   - *CTA Internal Link:* Mengarah ke `/layanan/body-scrub-kerokan/` dan `/terapis/wanita/`.

---

## 3. Aturan Internal Linking (Link Architecture)

1. **Aturan Silo Tertutup (Strict Topical Silo):**
   - Artikel blog dalam topik kebugaran pria (`/blog/terapi-pegal-pinggang...`) hanya memberikan in-text link ke `/terapis/pria/` dan `/layanan/pijat-tradisional/`.
   - Halaman area (`/area/sukarami-bandara/`) memberikan link ke layanan hotel (`/layanan/pijat-panggilan-hotel-24-jam/`) dan home service (`/layanan/pijat-panggilan-ke-rumah/`).
2. **Breadcrumb Otomatis:**
   - Semua sub-halaman wajib memiliki BreadcrumbList Schema (`Home > Layanan > Pijat Tradisional`).
3. **Anchor Text Variatif:**
   - Menggunakan variasi long-tail keywords yang alami tanpa spamming exact match berlebihan.
4. **CTA Konsisten:**
   - Setiap halaman memiliki satu Sticky Button WhatsApp dengan template pesan kontekstual (misal di halaman hotel: *"Halo admin, saya mau order pijat hotel di The Zuri Palembang jam..."*).
