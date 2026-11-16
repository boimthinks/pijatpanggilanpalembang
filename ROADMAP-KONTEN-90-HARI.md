# ROADMAP-KONTEN-90-HARI.md — Perencanaan Editorial Harian (Bebas Kanibalisasi)

Dokumen ini adalah panduan editorial harian (1 artikel per hari selama 90 hari) untuk website **Sriwijaya Massage Palembang**. 

---

## Aturan Alur Kerja Otomatis AI Agent

Ketika pengguna memberikan instruksi semacam:
> *"Buat artikel apa kita hari ini?"* atau sejenisnya.

AI Agent **WAJIB** menjalankan urutan alur kerja berikut secara disiplin:

1. **Cek Progres & Status:**
   - Buka file ini (`ROADMAP-KONTEN-90-HARI.md`).
   - Periksa daftar artikel di `src/content/blog/` dan cari baris pertama yang berstatus `[ ] Belum Dibuat`.
   - Ambil nomor hari, target slug, rencana judul, fokus masalah, dan target internal link untuk hari tersebut.
2. **Jalankan Skill `pakar-entity-seo`:**
   - Gunakan judul dan topik tersebut untuk melakukan riset semantik, ekstraksi LSI / secondary keyword, pemetaan entitas Schema.org, serta pembuatan outline E-E-A-T.
3. **Jalankan Skill `penulis-ahli`:**
   - Gunakan hasil riset semantik dari `pakar-entity-seo` untuk menulis artikel lengkap berbahasa Indonesia dengan gaya humanis, non-komoditas, dan ramah Google GEO 2026.
   - Pastikan artikel memasang internal link tepat ke target halaman yang sudah ditentukan pada tabel roadmap.
4. **Validasi & Update Status:**
   - Simpan artikel ke `src/content/blog/{slug}.md`.
   - Ubah tanda status di dokumen ini dari `[ ] Belum Dibuat` menjadi `[x] Terbit (YYYY-MM-DD)`.
   - Tambahkan artikel baru ke daftar artikel terbit di `SUMBER-PENGETAHUAN.md`.
   - Jalankan `npm run build` untuk memvalidasi aset visual dan build Astro.

---

## Aturan Pencegahan Kanibalisasi Kata Kunci (Strict Topical Silo)

- **Halaman Layanan (`/layanan/*`)**: Pemegang tunggal intensi **transaksional & komersial** (`pijat panggilan palembang`, `tarif pijat panggilan`, `jasa urut`).
- **Halaman Area (`/area/*`)**: Pemegang tunggal intensi **geografis transaksional** (`pijat panggilan ilir timur`, `pijat panggilan sukarami`).
- **Artikel Blog (`/blog/*`)**: Khusus intensi **informasional & edukatif** (penyebab, pertolongan pertama, mekanisme otot, komparasi teknik, tips kebugaran). Blog bertindak sebagai *feeder* otoritas yang mengalirkan link kontekstual ke halaman layanan terkait.

---

## Tabel Roadmap Konten 90 Hari

### BULAN 1 (Hari 01 – 30): Edukasi Anatomi, Modalitas, & Mekanisme Fisiologis Tubuh

| Hari | Status | Target Slug & Rencana Judul | Fokus Masalah / Entitas | Target Internal Link |
|---|---|---|---|---|
| **01** | `[x] Terbit (2026-11-07)` | `perbedaan-shiatsu-vs-pijat-tradisional`<br>Perbedaan Shiatsu dan Pijat Tradisional: Mana yang Lebih Tepat untuk Otot Kaku Kronis? | Titik meridian tekan vs manipulasi alur serat otot | `/layanan/pijat-tradisional/` |
| **02** | `[x] Terbit (2026-11-13)` | `mengenal-swedish-massage-relaksasi`<br>Mengenal Teknik Swedish Massage: Mengapa Gerakan Effleurage Efektif Meredakan Stres dan Insomnia? | Ritme usapan ritmis & stimulasi saraf parasimpatis | `/layanan/pijat-panggilan-ke-rumah/` |
| **03** | `[x] Terbit (2026-11-14)` | `balinese-massage-vs-urut-tradisional`<br>Balinese Massage vs Urut Tradisional: Perbedaan Formula Minyak Aromaterapi dan Kedalaman Tekanan | Karakter minyak atsiri tropis vs minyak rempah hangat lokal | `/layanan/pijat-tradisional/` |
| **04** | `[x] Terbit (2026-11-16)` | `manfaat-dry-massage-tanpa-minyak`<br>Solusi Badan Pegal Tanpa Tubuh Lengket: Panduan Menikmati Dry Massage Berpakaian Lengkap | Akupresur tanpa media pelicin untuk kost/kantor | `/layanan/pijat-refleksi/` |
| **05** | `[ ] Belum Dibuat` | `hot-stone-therapy-vs-kerokan-masuk-angin`<br>Batu Vulkanik Panas vs Kerokan Koin: Membedah Reaksi Vasodilatasi Pembuluh Darah Saat Masuk Angin | Perbedaan pelebaran pori-pori vs petekie kapiler darah | `/layanan/body-scrub-kerokan/` |
| **06** | `[ ] Belum Dibuat` | `titik-totok-wajah-pereda-migrain`<br>Peta Titik Totok Akupresur Wajah untuk Meredakan Ketegangan Mata dan Sakit Kepala Berdenyut | Titik Taiyang, Yintang, dan drainase limfatik wajah | `/layanan/body-scrub-kerokan/` |
| **07** | `[ ] Belum Dibuat` | `kombinasi-refleksi-dan-lulur-body-scrub`<br>Manfaat Ganda Eksfoliasi Kulit Mati dan Stimulasi Refleksi Kaki dalam Satu Sesi Terapi | Butiran lulur zaitun & stimulasi saraf telapak kaki | `/layanan/body-scrub-kerokan/` |
| **08** | `[ ] Belum Dibuat` | `tips-aman-memilih-jasa-pijat-hotel`<br>Cara Membedakan Penyedia Pijat Panggilan Hotel Resmi vs Indikasi Modus Penipuan Transfer DP | Identifikasi reputasi digital, legalitas, dan no-DP | `/layanan/pijat-panggilan-hotel-24-jam/` |
| **09** | `[ ] Belum Dibuat` | `mengatasi-leher-kaku-salah-bantal`<br>Pertolongan Pertama Mengatasi Leher Kaku Akibat Salah Bantal Tanpa Memaksa Menoleh Ekstrem | Spasme otot trapezius, kompres hangat, akupresur | `/layanan/pijat-tradisional/` |
| **10** | `[ ] Belum Dibuat` | `standar-higienitas-matras-portabel`<br>Mengapa Pemijatan di Kasur Terlalu Empuk Bikin Pinggang Sakit? Keunggulan Matras Portabel Khusus | Densitas busa penopang tulang punggung vs kasur busa | `/layanan/pijat-panggilan-ke-rumah/` |
| **11** | `[ ] Belum Dibuat` | `refleksi-kaki-asam-urat-pantangan`<br>Kapan Penderita Asam Urat Boleh Refleksi Kaki? Kenali Fase Remisi vs Fase Radang Akut | Peringatan area sendi bengkak (kontraindikasi) | `/layanan/pijat-refleksi/` |
| **12** | `[ ] Belum Dibuat` | `kontraindikasi-pijat-tubuh-medis`<br>5 Kondisi Tubuh yang Mutlak Tidak Boleh Dipijat: Trombosis, Luka Bakar, hingga Demam Tinggi | Batasan medis terapi manual dan keselamatan | `/syarat-ketentuan/` |
| **13** | `[ ] Belum Dibuat` | `warna-bekas-kerokan-makna-kesehatan`<br>Warna Merah Pekat Saat Dikerok: Benarkah Tanda Angin Banyak atau Sekadar Pecahnya Kapiler Kulit? | Mekanisme petekie, eritema kulit, dan minyak rempah | `/layanan/body-scrub-kerokan/` |
| **14** | `[ ] Belum Dibuat` | `tata-cara-pijat-bergantian-pasangan`<br>Etika dan Pembagian Durasi Efektif Saat Mengambil Paket Group Massage Bersama Pasangan | Manajemen energi terapis & efisiensi waktu 2 jam | `/layanan/pijat-panggilan-ke-rumah/` |
| **15** | `[ ] Belum Dibuat` | `peran-sertifikasi-bnsp-terapis`<br>Apa yang Diuji dalam Uji Kompetensi Terapis Spa BNSP? Jaminan Kenyamanan Anatomi Tubuh | Standar anatomi fisiologi dan higienitas terapis | `/tentang-kami/` |
| **16** | `[ ] Belum Dibuat` | `karakteristik-minyak-pijat-zaitun-vco`<br>Memilih Minyak Urut Sesuai Tipe Kulit: Perbandingan Minyak Zaitun Alami, VCO, dan Minyak Rempah | Daya serap pori-pori, kehangatan, dan komedogenik | `/layanan/pijat-tradisional/` |
| **17** | `[ ] Belum Dibuat` | `mengatasi-punggung-pegal-sopir-jarak-jauh`<br>Gejala Driver's Back Fatigue: Peregangan Mandiri untuk Pengemudi Lintas Kota Sebelum Pijat | Penekanan otot gluteus dan bantalan lumbal L4-L5 | `/terapis/pria/` |
| **18** | `[ ] Belum Dibuat` | `kenyamanan-privasi-layanan-pijat-wanita`<br>Pentingnya Menjaga Batasan Aurat dan Kenyamanan Psikis Bagi Muslimah Saat Terapi Tubuh | SOP draping kain penutup steril & terapis sesama jenis | `/terapis/wanita/` |
| **19** | `[ ] Belum Dibuat` | `perbedaan-sistem-tarif-all-in-vs-ongkir-pisah`<br>Mengapa Sistem Tarif All-in Tanpa Biaya Tambahan Lebih Disukai Konsumen Modern? | Transparansi transaksi finansial & kepastian harga | `/tarif/` |
| **20** | `[ ] Belum Dibuat` | `mengapa-terasa-haus-setelah-pijat`<br>Mengapa Tubuh Terasa Sangat Haus dan Lapar Usai Sesi Pijat Tubuh Menyeluruh? | Pelepasan asam laktat & metabolisme cairan sel | `/layanan/pijat-tradisional/` |
| **21** | `[ ] Belum Dibuat` | `teknik-effleurage-vs-petrissage`<br>Membedakan Usapan Menenangkan (Effleurage) dan Remasan Pengurai Gumpalan Otot (Petrissage) | Teknik dasar manipulasi urut tradisional | `/layanan/pijat-tradisional/` |
| **22** | `[ ] Belum Dibuat` | `titik-refleksi-tumit-plantar-fasciitis`<br>Nyeri Menusuk di Telapak Kaki Saat Langkah Pertama di Pagi Hari? Waspadai Plantar Fasciitis | Peregangan tendon Achilles dan akupresur tumit | `/layanan/pijat-refleksi/` |
| **23** | `[ ] Belum Dibuat` | `bahaya-minyak-panas-berlebihan`<br>Mengapa Pemakaian Minyak Gosok yang Terlalu Panas Justru Mengiritasi Kulit Saat Dipijat? | Reaksi peradangan epidermis akibat minyak kimia | `/layanan/pijat-tradisional/` |
| **24** | `[ ] Belum Dibuat` | `rekomendasi-posisi-tidur-pasca-pijat`<br>Posisi Tidur Paling Ideal Pasca Menjalani Sesi Pijat Tubuh untuk Mempercepat Relaksasi Otot | Penjajaran tulang belakang dengan ganjalan bantal | `/layanan/pijat-panggilan-ke-rumah/` |
| **25** | `[ ] Belum Dibuat` | `cedera-delayed-onset-muscle-soreness-doms`<br>Mengenal DOMS Pasca Latihan Fisik Berat: Kapan Otot Boleh Diurut dan Kapan Cukup Istirahat? | Perbedaan robekan mikroskopis otot vs pegal biasa | `/terapis/pria/` |
| **26** | `[ ] Belum Dibuat` | `persiapan-ruangan-rumah-untuk-pijat`<br>Mengatur Suhu Kamar, Sirkulasi Udara, dan Pencahayaan untuk Suasana Relaksasi Pijat Maksimal | Pengaruh stimulasi sensorik terhadap gelombang otak | `/layanan/pijat-panggilan-ke-rumah/` |
| **27** | `[ ] Belum Dibuat` | `pijat-sebelum-vs-sesudah-makan`<br>Berapa Jeda Waktu Aman Antara Selesai Makan Berat dengan Memulai Sesi Pemijatan Tubuh? | Tekanan diafragma perut & distribusi peredaran darah | `/layanan/pijat-tradisional/` |
| **28** | `[ ] Belum Dibuat` | `mengatasi-kram-betis-tengah-malam`<br>Penyebab Kram Otot Betis Tiba-Tiba Saat Tidur Nyenyak dan Cara Meregangkannya Seketika | Ketidakseimbangan elektrolit dan spasme gastrocnemius | `/layanan/pijat-refleksi/` |
| **29** | `[ ] Belum Dibuat` | `mandi-air-hangat-sebelum-atau-sesudah-pijat`<br>Haruskah Mandi Air Hangat Sebelum atau Sesudah Pemijatan? Simak Tinjauan Fisiologisnya | Efek membuka pori-pori vs penyerapan sisa minyak | `/layanan/pijat-tradisional/` |
| **30** | `[ ] Belum Dibuat` | `titik-refleksi-saluran-cerna`<br>Menstimulasi Titik Refleksi Telapak Kaki untuk Membantu Menetralkan Gas dan Begah di Lambung | Refleks lambung, duodenum, dan usus besar kaki | `/layanan/pijat-refleksi/` |

---

### BULAN 2 (Hari 31 – 60): Studi Kasus Gaya Hidup, Aktivitas Lapangan, & Solusi Keluhan

| Hari | Status | Target Slug & Rencana Judul | Fokus Masalah / Entitas | Target Internal Link |
|---|---|---|---|---|
| **31** | `[ ] Belum Dibuat` | `mengatasi-pegal-macet-jalur-sudirman-ampera`<br>Tips Menjaga Otot Leher dan Pinggang Tidak Kaku Saat Terjebak Macet di Pusat Kota | Ergonomi postur menyetir stop-and-go di jam sibuk | `/layanan/pijat-tradisional/` |
| **32** | `[ ] Belum Dibuat` | `pemulihan-otot-pelari-jakabaring`<br>Protokol Pemulihan Cedera Otot Ringan Pasca Lari Jarak Jauh di Lintasan Jakabaring | Pemulihan hamstring, quadriceps, dan pendinginan | `/terapis/pria/` |
| **33** | `[ ] Belum Dibuat` | `tips-relaksasi-transit-panjang-bandara-smb2`<br>Mengatasi Travel Fatigue dan Sendi Kaku Akibat Duduk Berjam-jam di Ruang Tunggu Bandara | Sirkulasi vena tungkai bawah dan peregangan kabin | `/layanan/pijat-panggilan-hotel-24-jam/` |
| **34** | `[ ] Belum Dibuat` | `mengatasi-ketegangan-mata-pekerja-wfh`<br>Gejala Computer Vision Syndrome dan Cara Melemaskan Otot Leher Belakang Pekerja Digital | Ketegangan suboksipital akibat layar monitor | `/layanan/pijat-refleksi/` |
| **35** | `[ ] Belum Dibuat` | `merawat-otot-pinggang-pekerja-gudang-bongkar-muat`<br>Teknik Mengangkat Beban yang Benar untuk Menghindari Keseleo Pinggang Akut | Mekanika tubuh mengangkat barang & kompresi sendi | `/terapis/pria/` |
| **36** | `[ ] Belum Dibuat` | `efek-begadang-terhadap-kekakuan-otot-bahu`<br>Mengapa Tubuh yang Sering Kurang Tidur Menghasilkan Otot Bahu Keras Seperti Batu? | Hormon kortisol, ketegangan otot involunter | `/layanan/pijat-tradisional/` |
| **37** | `[ ] Belum Dibuat` | `tips-kebugaran-tubuh-pasca-panen-atau-kebun`<br>Mengatasi Badan Remuk Akibat Kerja Fisik Membungkuk Seharian: Kapan Tubuh Butuh Istirahat Total? | Pemulihan asam laktat & hidrasi cairan tubuh | `/layanan/pijat-tradisional/` |
| **38** | `[ ] Belum Dibuat` | `menjaga-kelembapan-kulit-di-kamar-ber-ac`<br>Bahaya Kulit Kering dan Pecah-Pecah Akibat AC Dingin: Mengapa Perlu Nutrisi Minyak Alami? | Perlindungan lipid skin barrier dengan zaitun | `/layanan/body-scrub-kerokan/` |
| **39** | `[ ] Belum Dibuat` | `etika-pemesanan-pijat-kamar-hotel-malam-hari`<br>Hal yang Perlu Disiapkan Tamu Kamar Hotel Sebelum Terapis Tiba untuk Mempercepat Sesi | Penerimaan tamu resepsionis, privasi, dan ketenangan | `/layanan/pijat-panggilan-hotel-24-jam/` |
| **40** | `[ ] Belum Dibuat` | `mengatasi-kaki-bengkak-ibu-hamil-trimester-akhir`<br>Kaki Bengkak Menjelang Persalinan: Area Mana yang Aman Dielus dan Mana Titik Terlarang? | Titik rawan induksi rahim (SP6) vs drainase limfatik | `/terapis/wanita/` |
| **41** | `[ ] Belum Dibuat` | `mengapa-tidak-boleh-pijat-saat-tekanan-darah-tinggi`<br>Hubungan Tekanan Darah Hipertensi Berat dengan Risiko Pijat Refleksi Keras | Lonjakan curah jantung dan kontraindikasi vaskular | `/syarat-ketentuan/` |
| **42** | `[ ] Belum Dibuat` | `tips-meredakan-pegal-punggung-pengendara-motor-matic`<br>Mengapa Pengendara Motor Matic Lebih Rawan Mengalami Nyeri Bokong Dibandingkan Motor Bebek? | Distribusi tumpuan panggul pada jok motor | `/terapis/pria/` |
| **43** | `[ ] Belum Dibuat` | `bahaya-terlalu-sering-dikerok-pada-area-yang-sama`<br>Apakah Kulit Punggung Boleh Dikerok Berkali-kali dalam Seminggu? Waspadai Kerusakan Jaringan | Regenerasi kapiler darah dan elastisitas kulit | `/layanan/body-scrub-kerokan/` |
| **44** | `[ ] Belum Dibuat` | `mengenal-trigger-finger-dan-solusi-akupresurnya`<br>Jari Tangan Tiba-Tiba Tersangkut Saat Ditekuk? Penjelasan Cedera Tendon Akibat Main Gadget | Radang selubung tendon fleksor jari tangan | `/layanan/pijat-refleksi/` |
| **45** | `[ ] Belum Dibuat` | `meredakan-pegal-betis-setelah-memakai-high-heels`<br>Perubahan Struktur Sudut Kaki Akibat Sepatu Tumit Tinggi dan Cara Mengembalikan Lenturnya | Pemendekan tendon Achilles dan penekanan metatarsal | `/terapis/wanita/` |
| **46** | `[ ] Belum Dibuat` | `efek-pijat-relaksasi-terhadap-penurunan-kecemasan`<br>Bagaimana Sentuhan Pijat Berirama Membantu Menurunkan Detak Jantung dan Rasa Panik? | Stimulasi saraf vagus dan produksi hormon oksitosin | `/layanan/pijat-tradisional/` |
| **47** | `[ ] Belum Dibuat` | `perbedaan-pijat-kebugaran-pria-vs-vitalitas`<br>Edukasi Anatomi: Mengapa Kebugaran Fisik Pria Cukup Dirawat Melalui Otot Pinggang dan Paha Dalam? | Membongkar mitos pijat organ vital & keamanan saraf | `/terapis/pria/` |
| **48** | `[ ] Belum Dibuat` | `tips-menghilangkan-daki-membandel-dengan-lulur`<br>Teknik Menggosok Lulur Tradisional yang Benar Tanpa Melukai Lapisan Kulit Sensitif | Menunggu setengah kering sebelum digosok melingkar | `/layanan/body-scrub-kerokan/` |
| **49** | `[ ] Belum Dibuat` | `mengatasi-kaku-otot-setelah-bersepeda-jauh`<br>Mengapa Otot Leher dan Pinggul Bawah Kaku Pasca Gowes? Panduan Terapi Pelemasan Mandiri | Hip-flexor kaku dan ekstensi leher berkepanjangan | `/layanan/pijat-tradisional/` |
| **50** | `[ ] Belum Dibuat` | `manfaat-totok-wajah-untuk-kesegaran-pria`<br>Totok Akupresur Wajah untuk Pria: Meredakan Ketegangan Rahang Akibat Kebiasaan Menggertakkan Gigi | Mengendurkan otot masseter dan melancarkan darah | `/layanan/body-scrub-kerokan/` |
| **51** | `[ ] Belum Dibuat` | `mengapa-tidak-boleh-memijat-langsung-tulang-belakang`<br>Bahaya Fatal Menekan Tulang Belakang Secara Langsung: Mengapa Pijat Hanya Berfokus di Otot Sekitarnya? | Perlindungan bantalan discus & serabut saraf spinal | `/layanan/pijat-tradisional/` |
| **52** | `[ ] Belum Dibuat` | `perawatan-tubuh-calon-pengantin-sebelum-akad`<br>Berapa Hari Sebelum Acara Pernikahan Waktu Paling Pas Melakukan Pijat Lulur Relaksasi? | Menghindari kemerahan kulit & mematangkan relaksasi | `/terapis/wanita/` |
| **53** | `[ ] Belum Dibuat` | `mengapa-badan-bisa-demam-pasca-dipijat-terlalu-keras`<br>Mengenal Istilah Healing Crisis: Mengapa Tekanan Pijat Berlebihan Bisa Memicu Meriang? | Mioglobinuria ringan dan pelepasan toksin berlebih | `/layanan/pijat-tradisional/` |
| **54** | `[ ] Belum Dibuat` | `cara-meringankan-gejala-sciatica-di-rumah`<br>Nyeri Menjalar dari Bokong Hingga Paha Belakang? Latihan Ringan Pereda Tekanan Saraf Sciatic | Peregangan otot piriformis secara bertahap | `/terapis/pria/` |
| **55** | `[ ] Belum Dibuat` | `manfaat-minum-air-hangat-rempah-pasca-terapi`<br>Khasiat Rebusan Jahe dan Serai Hangat Pasca Sesi Terapi Urut Tradisional | Membantu sirkulasi darah dan detoksifikasi alami | `/layanan/pijat-tradisional/` |
| **56** | `[ ] Belum Dibuat` | `mengatasi-pegal-lengan-akibat-menggendong-anak`<br>Keluhan Pundak Ibu Rumah Tangga: Cara Meredakan Ketegangan Otot Bahu Tanpa Obat | Beban asimetris panggul dan bahu saat menggendong | `/terapis/wanita/` |
| **57** | `[ ] Belum Dibuat` | `perbedaan-pijat-refleksi-dengan-totok-darah`<br>Memahami Batas Keamanan Terapi Alternatif: Mengapa Akupresur Lembut Lebih Direkomendasikan? | Bahaya penyumbatan pembuluh darah buatan | `/layanan/pijat-refleksi/` |
| **58** | `[ ] Belum Dibuat` | `menjaga-kondisi-tubuh-tetap-bugar-saat-musim-pancaroba`<br>Mengapa Suhu Lembap dan Hujan Bikin Sendi Tulang Terasa Linu? Peran Terapi Hangat | Barometrik udara dingin dan sensitivitas cairan sinovial | `/layanan/body-scrub-kerokan/` |
| **59** | `[ ] Belum Dibuat` | `mengatasi-kram-otot-perut-karena-batuk-berkepanjangan`<br>Otot Rusuk dan Perut Pegal Akibat Batuk Keras: Titik Relaksasi Dada yang Aman | Otot interkostal dan diafragma yang lelah | `/layanan/pijat-tradisional/` |
| **60** | `[ ] Belum Dibuat` | `mengapa-terapis-profesional-tidak-boleh-membunyikan-sendi`<br>Risiko Manuver 'Kretek' Sembarangan Tanpa Kompetensi Radiologi Tulang | Resiko subluksasi sendi dan pergeseran diskus | `/syarat-ketentuan/` |

---

### BULAN 3 (Hari 61 – 90): Keluhan Kronis, Perawatan Khusus, & Pertanyaan Kritis Pasien

| Hari | Status | Target Slug & Rencana Judul | Fokus Masalah / Entitas | Target Internal Link |
|---|---|---|---|---|
| **61** | `[ ] Belum Dibuat` | `perbedaan-pegal-linu-otot-vs-gejala-rematik`<br>Membedakan Pegal Kelelahan Kerja dengan Peradangan Sendi Rematik Kronis | Kaku pagi hari berkepanjangan vs capek aktivitas | `/layanan/pijat-tradisional/` |
| **62** | `[ ] Belum Dibuat` | `terapi-akupresur-meredakan-cegukan-tak-kunjung-henti`<br>Titik Pijat Akupresur Sederhana untuk Menormalkan Kembali Spasme Otot Diafragma | Penekanan titik saraf phrenic di pangkal leher | `/layanan/pijat-refleksi/` |
| **63** | `[ ] Belum Dibuat` | `mengatasi-kaku-pada-rahang-akibat-kebiasaan-bruxism`<br>Sering Menggertakkan Gigi Saat Tidur? Relaksasi Otot Pipi dan Pelipis Sebelum Tidur | Ketegangan sendi temporomandibular (TMJ) | `/layanan/body-scrub-kerokan/` |
| **64** | `[ ] Belum Dibuat` | `menjaga-fleksibilitas-otot-lansia-secara-aman`<br>Panduan Merawat Orang Tua: Mengapa Usapan Ringan Jauh Lebih Bermanfaat daripada Remasan Keras? | Kerapuhan kapiler darah dan massa otot usia lanjut | `/layanan/pijat-panggilan-ke-rumah/` |
| **65** | `[ ] Belum Dibuat` | `meringankan-keluhan-carpal-tunnel-syndrome`<br>Ujung Jari Sering Kesemutan dan Kebas? Latihan Peregangan Pergelangan Tangan | Penekanan terowongan karpal pada pergelangan | `/layanan/pijat-refleksi/` |
| **66** | `[ ] Belum Dibuat` | `mengapa-minyak-zaitun-bagus-untuk-kulit-kering`<br>Kandungan Asam Oleat dan Skualen Alami Minyak Zaitun untuk Menutrisi Kulit Tubuh | Kelembapan mendalam dan sifat non-iritatif | `/layanan/body-scrub-kerokan/` |
| **67** | `[ ] Belum Dibuat` | `mengatasi-pegal-telapak-kaki-pasca-berdiri-8-jam`<br>Solusi Kaki Berat untuk SPG dan Pekerja Ritel: Rendaman Garam Hangat dan Akupresur Mandiri | Penumpukan darah vena di tungkai dan pemulihan | `/layanan/pijat-refleksi/` |
| **68** | `[ ] Belum Dibuat` | `peran-aromaterapi-lavender-dalam-mengurangi-insomnia`<br>Khasiat Senyawa Linalool pada Minyak Aromaterapi untuk Mempercepat Gelombang Tidur Nyenyak | Reseptor GABA otak dan relaksasi sistem saraf | `/layanan/pijat-panggilan-ke-rumah/` |
| **69** | `[ ] Belum Dibuat` | `bahaya-memijat-benjolan-lipoma-atau-varises`<br>Mengapa Tonjolan Pembuluh Darah Varises di Betis Tidak Boleh Ditekan Keras? | Risiko ruptur pembuluh darah vena dan emboli | `/syarat-ketentuan/` |
| **70** | `[ ] Belum Dibuat` | `mengatasi-kram-perut-kembung-pada-anak-remaja`<br>Teknik Usapan Pijat I-L-U pada Perut untuk Melancarkan Pembuangan Gas Tanpa Tekanan Keras | Arah kolon asenden, transversum, dan desenden | `/layanan/pijat-panggilan-ke-rumah/` |
| **71** | `[ ] Belum Dibuat` | `mengapa-setelah-pijat-badan-bisa-terasa-enteng`<br>Pelepasan Hormon Endorfin dan Pembuangan Asam Laktat: Sains di Balik Tubuh yang Terasa Segar | Vasodilatasi kapiler dan penurunan hormon stres | `/layanan/pijat-tradisional/` |
| **72** | `[ ] Belum Dibuat` | `tips-menghindari-kulit-iritasi-akibat-minyak-urut`<br>Cara Melakukan Uji Tempel (Patch Test) Sederhana Sebelum Menggunakan Minyak Urut Rempah | Pencegahan dermatitis kontak alergi pada kulit | `/layanan/pijat-tradisional/` |
| **73** | `[ ] Belum Dibuat` | `mengatasi-otot-kaku-pasca-renovasi-rumah`<br>Badan Terasa Remuk Setelah Mengecat Tembok atau Angkat Perabot: Panduan Istirahat Efektif | Ketegangan otot deltoid dan latissimus dorsi | `/terapis/pria/` |
| **74** | `[ ] Belum Dibuat` | `mengapa-pijat-tidak-boleh-saat-kondisi-mabuk-alkohol`<br>Bahaya Kombinasi Pelebaran Darah Akibat Alkohol dan Terapi Pijat Tubuh | Risiko hipotensi mendadak dan kehilangan kesadaran | `/syarat-ketentuan/` |
| **75** | `[ ] Belum Dibuat` | `meredakan-ketegangan-otot-tulang-ekor-akibat-duduk`<br>Bantalan Duduk Terlalu Keras Bikin Tulang Ekor Nyeri? Peregangan Otot Dasar Panggul | Coccydynia ringan dan peredaan tekanan duduk | `/terapis/pria/` |
| **76** | `[ ] Belum Dibuat` | `manfaat-gerakan-tapotement-dalam-pijat`<br>Mengenal Ketukan Ringan Berirama (Tapotement): Stimulasi Saraf untuk Mengembalikan Tonus Otot | Ketukan jari telungkup untuk stimulasi refleks saraf | `/layanan/pijat-tradisional/` |
| **77** | `[ ] Belum Dibuat` | `tips-menjaga-kebugaran-tubuh-pasca-perjalanan-kereta`<br>Duduk Monoton Sepanjang Perjalanan Kereta Api: Cara Melancarkan Aliran Darah Kaki | Pencegahan sindrom kelas ekonomi dan statis vena | `/layanan/pijat-refleksi/` |
| **78** | `[ ] Belum Dibuat` | `mengapa-kulit-tidak-boleh-langsung-dicuci-air-es-pasca-pijat`<br>Bahaya Suhu Kontras Mendadak terhadap Pori-pori dan Pembuluh Darah Kulit | Kejutan termal kapiler darah dan keram otot | `/layanan/pijat-tradisional/` |
| **79** | `[ ] Belum Dibuat` | `mengatasi-kaku-pada-otot-tangan-penjahit-atau-perajin`<br>Gerakan Halus Berulang Bikin Jari Pegal: Terapi Akupresur Telapak Tangan Pereda Ketegangan | Kelelahan otot interoseus dan tenar tangan | `/layanan/pijat-refleksi/` |
| **80** | `[ ] Belum Dibuat` | `perbedaan-pijat-olahraga-sebelum-vs-sesudah-pertandingan`<br>Pre-Event Massage vs Post-Event Massage: Membedakan Pemanasan Otot Cepat dengan Relaksasi | Irama cepat menaikkan suhu vs lambat drainase asam | `/terapis/pria/` |
| **81** | `[ ] Belum Dibuat` | `mengapa-tidak-boleh-menahan-napas-saat-dipijat`<br>Pentingnya Mengatur Napas Perut: Mengapa Menahan Napas Justru Membuat Otot Makin Kaku? | Aktivasi respons lawan-atau-lari (fight-or-flight) | `/layanan/pijat-tradisional/` |
| **82** | `[ ] Belum Dibuat` | `cara-meringankan-keluhan-migrain-dengan-kompres-dan-refleksi`<br>Kombinasi Kompres Dingin di Dahi dan Titik Refleksi Jempol Kaki untuk Menetralkan Nyeri Kepala | Refleks saraf kranial dan penurunan pulsasi vaskular | `/layanan/pijat-refleksi/` |
| **83** | `[ ] Belum Dibuat` | `merawat-elastisitas-kulit-perut-pasca-melahirkan`<br>Kapan Ibu Pasca Bersalin Boleh Mulai Terapi Pijat Lembut dan Lulur Tradisional? | Pemulihan jahitan sesar/normal dan rahim | `/terapis/wanita/` |
| **84** | `[ ] Belum Dibuat` | `mengapa-tidak-dianjurkan-minum-kopi-pekat-sebelum-pijat`<br>Efek Kafein Terhadap Ketegangan Saraf Otonom: Membuat Tubuh Sulit Masuk Fase Rileks | Vasokonstriksi pembuluh darah oleh zat kafein | `/layanan/pijat-tradisional/` |
| **85** | `[ ] Belum Dibuat` | `meredakan-kaku-otot-dada-akibat-stres-pekerjaan`<br>Napas Terasa Dangkal dan Bahu Terangkat? Cara Melemaskan Otot Pektoralis Mayor | Otot bantu napas yang tegang akibat beban mental | `/layanan/pijat-tradisional/` |
| **86** | `[ ] Belum Dibuat` | `tips-menjaga-kebugaran-pinggang-saat-sering-naik-turun-tangga`<br>Beban Ekstra Lutut dan Sendi Panggul Saat Naik Tangga: Panduan Menjaga Fleksibilitas Sendi | Menghindari gesekan berlebih tulang patela | `/layanan/pijat-refleksi/` |
| **87** | `[ ] Belum Dibuat` | `mengapa-minyak-kelapa-murni-bagus-untuk-memijat-kulit-sensitif`<br>Asam Laurat dan Antioksidan VCO: Perlindungan Alami Bagi Kulit yang Mudah Kemerahan | Efek antimikroba dan kelembutan formula minyak alami | `/layanan/body-scrub-kerokan/` |
| **88** | `[ ] Belum Dibuat` | `cara-melemaskan-otot-rahang-dan-pelipis-saat-terkena-flu`<br>Sinusitas Ringan dan Rasa Berat di Wajah: Pijatan Lembut di Sekitar Pipi dan Alis | Drainase cairan limfatik sinus maksilaris | `/layanan/body-scrub-kerokan/` |
| **89** | `[ ] Belum Dibuat` | `memahami-reaksi-menggigil-ringan-saat-tubuh-mulai-rileks`<br>Mengapa Tubuh Terkadang Menggigil Sesaat Ketika Mulai Tertidur di Meja Terapi? | Penurunan laju metabolisme basal dan suhu inti tubuh | `/layanan/pijat-tradisional/` |
| **90** | `[ ] Belum Dibuat` | `indikator-kebugaran-fisik-kapan-tubuh-membutuhkan-istirahat-penuh`<br>Membedakan Sinyal Tubuh yang Cukup Diurut dengan Kondisi yang Butuh Cuti dan Tidur Panjang | Batas adaptasi stres fisiologis (general adaptation syndrome) | `/layanan/pijat-tradisional/` |
