export interface ServicePackage {
  name: string;
  duration: string;
  price: string;
  isPopular?: boolean;
  deliverables: string[];
}

export interface ServiceCostItem {
  component: string;
  specification: string;
  estimate: string;
}

export interface ServiceEquipment {
  name: string;
  brandOrType: string;
  sanitationStandard: string;
}

export interface ServiceVenueAnalysis {
  venueType: string;
  suitability: string;
  logisticsRequirement: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortDesc: string;
  heroImage: string; // Rasio 4:3 (800x600)
  metaTitle: string;
  metaDesc: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  packages: ServicePackage[];
  costBreakdown: ServiceCostItem[];
  equipmentSpecs: ServiceEquipment[];
  venueAnalysis: ServiceVenueAnalysis[];
  sopSteps: string[];
  k3Mitigation: string[];
  legalityNotes: string;
  faqs: ServiceFAQ[];
  spokeArticles: { title: string; url: string }[];
}

export const servicesData: ServiceData[] = [
  {
    slug: 'pijat-tradisional',
    title: 'Pijat Tradisional & Urut Nusantara Palembang',
    shortDesc: 'Terapi urut kebugaran seluruh tubuh dengan teknik effleurage dan petrissage untuk mengatasi badan pegal linu, kelelahan fisik, dan masuk angin.',
    heroImage: '/images/layanan-pijat-tradisional.webp',
    metaTitle: 'Pijat Tradisional Palembang 24 Jam | Tukang Urut Panggilan Resmi',
    metaDesc: 'Jasa pijat tradisional & urut capek pegal linu panggilan 24 jam ke rumah dan hotel Palembang. Terapis bersertifikat BNSP, izin STPT Dinkes, bebas ongkir.',
    primaryKeyword: 'pijat tradisional palembang',
    secondaryKeywords: [
      'tukang urut palembang',
      'pijat urut palembang',
      'pijat urut tradisional palembang',
      'pijat full body panggilan palembang',
      'jasa urut tradisional palembang terpercaya',
    ],
    packages: [
      {
        name: 'Paket Relaksasi Cepat',
        duration: '60 Menit',
        price: 'Rp 150.000',
        deliverables: [
          'Pijat urut punggung, pundak, dan leher',
          'Pelemasan otot pinggang belakang',
          'Pemijatan tangan dan telapak kaki dasar',
          'Minyak zaitun / aromaterapi alami',
        ],
      },
      {
        name: 'Paket Kebugaran Menyeluruh (Favorit)',
        duration: '90 Menit',
        price: 'Rp 200.000',
        isPopular: true,
        deliverables: [
          'Full body massage menyeluruh (ujung kepala hingga kaki)',
          'Teknik urut peredaan simpul urat kaku (petrissage)',
          'Terapi relaksasi otot dada dan betis',
          'Aplikasi minyak urut rempah hangat / VCO',
          'Peregangan sendi ringan pasca urut',
        ],
      },
      {
        name: 'Paket Deep Muscle & Kerokan',
        duration: '120 Menit',
        price: 'Rp 250.000',
        deliverables: [
          'Full body traditional massage intensif 90 menit',
          'Opsi tambahan kerokan punggung higienis atau totok wajah',
          'Aplikasi minyak kayu putih & balsem aromatik hangat',
          'Pelemasan saraf tulang belakang & panggul',
        ],
      },
    ],
    costBreakdown: [
      {
        component: 'Jasa Terapis Ahli Berlisensi',
        specification: 'Terapis kompeten standar sertifikasi BNSP',
        estimate: 'Termasuk dalam paket',
      },
      {
        component: 'Bahan Habis Pakai (Linen & Minyak)',
        specification: 'Minyak zaitun alami, disinfektan, tisu basah medis',
        estimate: 'Free / Disediakan Terapis',
      },
      {
        component: 'Biaya Transportasi Kota Palembang',
        specification: '16 Kecamatan (Ilir Timur, Ilir Barat, Sukarami, dll.)',
        estimate: 'Gratis (All-in)',
      },
      {
        component: 'Uang Muka / Booking Fee',
        specification: 'Sistem pembayaran pasca terapi (cash / transfer / QRIS)',
        estimate: 'Rp 0 (Tanpa DP)',
      },
    ],
    equipmentSpecs: [
      {
        name: 'Minyak Urut Alami',
        brandOrType: 'Mustika Ratu Minyak Zaitun / Virgin Coconut Oil (VCO)',
        sanitationStandard: 'Tersertifikasi BPOM, ramah kulit sensitif, bebas iritasi',
      },
      {
        name: 'Kain Penutup Badan',
        brandOrType: 'Kain Katun Lembut Higienis',
        sanitationStandard: 'Dicuci deterjen antibakteri suhu 60°C & disemprot linen spray',
      },
      {
        name: 'Antiseptik & Disinfektan',
        brandOrType: 'Hand Sanitizer Alkohol 70% Food Grade',
        sanitationStandard: 'Standar protokol kesehatan fasilitas spa resmi',
      },
    ],
    venueAnalysis: [
      {
        venueType: 'Rumah Tinggal / Hunian Residensial',
        suitability: 'Sangat Direkomendasikan',
        logisticsRequirement: 'Memerlukan ruangan privat dengan ventilasi/AC yang nyaman.',
      },
      {
        venueType: 'Kamar Hotel Berbintang',
        suitability: 'Sangat Praktis',
        logisticsRequirement: 'Terapis langsung menuju nomor kamar setelah lapor resepsionis.',
      },
      {
        venueType: 'Kamar Kos & Kontrakan',
        suitability: 'Sesuai untuk Mahasiswa / Pekerja',
        logisticsRequirement: 'Dapat memanfaatkan kasur atau lantai beralaskan matras lipat.',
      },
    ],
    sopSteps: [
      'Terapis tiba di lokasi pelanggan tepat waktu sesuai jadwal booking WhatsApp.',
      'Melakukan sanitasi tangan dengan hand sanitizer dan mengenakan pakaian seragam bersih.',
      'Konfirmasi keluhan fisik (otot tegang, kelelahan kerja, atau masuk angin) dan preferensi tekanan (ringan/sedang/kuat).',
      'Pelaksanaan sesi urut tradisional sesuai teknik anatomi standar tanpa menyentuh area terlarang.',
      'Sesi peregangan akhir, perapian perlengkapan, dan penerimaan pembayaran tanpa uang tip paksaan.',
    ],
    k3Mitigation: [
      'Pemeriksaan kontraindikasi awal: Terapis tidak melakukan manipulasi keras pada area memar parah, patah tulang, atau demam tinggi.',
      'Pencegahan alergi kulit dengan konfirmasi awal penggunaan jenis minyak aromaterapi.',
      'Jaminan keamanan: Terapis terverifikasi data KTP resmi dan bebas dari tindakan asusila.',
    ],
    legalityNotes: 'Layanan beroperasi di bawah kepatuhan Perwali Kota Palembang No. 97 Tahun 2011 tentang Pembinaan Usaha Pijat Urut Tradisional dan STPT Dinas Kesehatan Kota Palembang.',
    faqs: [
      {
        question: 'Apakah terapis pijat tradisional di Palembang bisa datang ke hotel tengah malam?',
        answer: 'Ya, layanan kami standby 24 jam penuh. Kami dapat menjangkau seluruh hotel berbintang di koridor Jalan Sudirman, R. Sukamto, Basuki Rahmat, dan sekitarnya dengan estimasi kedatangan 30-45 menit.',
      },
      {
        question: 'Apakah ada biaya tambahan untuk ongkos transport terapis?',
        answer: 'Tidak ada. Seluruh tarif yang tertera sudah all-in termasuk ongkos transportasi terapis untuk area dalam Kota Palembang.',
      },
      {
        question: 'Bagaimana cara meminta tekanan pijatan yang lebih kuat atau lebih lembut?',
        answer: 'Anda cukup memberitahu terapis di awal atau di tengah sesi. Terapis kami terlatih menyesuaikan ritme tekanan sesuai kenyamanan tubuh Anda.',
      },
      {
        question: 'Apakah saya bisa memilih terapis pria atau wanita?',
        answer: 'Bisa. Kami memiliki tim terapis pria dan wanita bersertifikat BNSP. Pelanggan wanita dilayani khusus oleh terapis wanita demi kenyamanan dan syar\'i.',
      },
      {
        question: 'Bagaimana jika badan saya terasa masuk angin parah?',
        answer: 'Anda dapat memilih Paket 120 Menit yang mencakup kombinasi pijat urut tradisional dan kerokan higienis dengan koin khusus serta minyak kayu putih.',
      },
      {
        question: 'Apakah harus membayar uang muka (DP) saat pemesanan?',
        answer: 'Tidak perlu DP sama sekali. Pembayaran dilakukan secara tunai, transfer, atau QRIS setelah sesi terapi selesai.',
      },
    ],
    spokeArticles: [
      { title: 'Panduan Tarif Pijat Panggilan Palembang Per Jam', url: '/blog/tarif-pijat-panggilan-palembang/' },
      { title: 'Keseleo dan Terkilir: Kapan Boleh Diurut?', url: '/blog/keseleo-dan-terkilir-kapan-boleh-diurut/' },
      { title: 'Tips Memilih Jasa Pijat Panggilan Aman dan Resmi', url: '/blog/tips-memilih-pijat-panggilan-aman/' },
    ],
  },
  {
    slug: 'pijat-refleksi',
    title: 'Pijat Refleksi Kaki & Dry Massage Palembang',
    shortDesc: 'Stimulasi titik akupresur telapak kaki dan peregangan tubuh bebas minyak untuk melancarkan sirkulasi darah tanpa membuat badan lengket.',
    heroImage: '/images/layanan-pijat-refleksi.webp',
    metaTitle: 'Pijat Refleksi Palembang Panggilan | Dry Massage & Akupresur Kaki',
    metaDesc: 'Layanan pijat refleksi kaki & dry massage panggilan ke rumah dan kantor di Palembang. Melancarkan sirkulasi darah tanpa minyak, praktis & profesional.',
    primaryKeyword: 'pijat refleksi panggilan rumah palembang',
    secondaryKeywords: [
      'dry massage panggilan palembang',
      'terapis pijat refleksi panggilan kantor palembang',
      'refleksi kaki terdekat palembang',
      'massage relaksasi tanpa minyak palembang',
    ],
    packages: [
      {
        name: 'Foot Reflexology Fokus Kaki',
        duration: '60 Menit',
        price: 'Rp 140.000',
        deliverables: [
          'Perendaman kaki air hangat & antiseptik',
          'Penekanan titik zona refleks plantar kaki kanan & kiri',
          'Pelemasan betis dan pergelangan kaki',
          'Aplikasi lotion pelembap aromaterapi',
        ],
      },
      {
        name: 'Refleksi Komplit & Punggung (Favorit)',
        duration: '90 Menit',
        price: 'Rp 190.000',
        isPopular: true,
        deliverables: [
          'Refleksi titik saraf kaki 60 menit',
          'Pijat akupresur punggung dan pundak duduk/tengkurap 30 menit',
          'Peregangan jari tangan dan leher',
          'Bebas rasa lengket, cocok untuk jam istirahat kerja',
        ],
      },
      {
        name: 'Dry Massage Thai Style Full Body',
        duration: '90 Menit',
        price: 'Rp 210.000',
        deliverables: [
          'Pijatan seluruh tubuh tanpa minyak (pakaian lengkap)',
          'Teknik peregangan sendi postural & yoga pasif',
          'Penekanan meridian energi punggung dan paha',
          'Sangat cocok di ruangan ber-AC atau kantor',
        ],
      },
    ],
    costBreakdown: [
      { component: 'Terapis Refleksi Bersertifikat', specification: 'Menguasai peta zona saraf reflesi kaki', estimate: 'Termasuk dalam paket' },
      { component: 'Stick Akupresur & Krim Refleksi', specification: 'Bahan steril non-alergenik', estimate: 'Disediakan' },
      { component: 'Biaya Kedatangan ke Lokasi', specification: 'Seluruh area Kota Palembang', estimate: 'Gratis Transport' },
      { component: 'Booking & Reservasi', specification: 'Via WhatsApp 24 Jam', estimate: 'Rp 0 Tanpa DP' },
    ],
    equipmentSpecs: [
      { name: 'Krim / Lotion Refleksi', brandOrType: 'Viva Massage Cream / Peppermint Lotion', sanitationStandard: 'Segel resmi BPOM' },
      { name: 'Tongkat Akupresur Kayu Halus', brandOrType: 'Kayu Mahoni Halus Ergonomis', sanitationStandard: 'Didesinfeksi alkohol 70% setiap sesi' },
      { name: 'Handuk Alas Higienis', brandOrType: 'Handuk Microfiber Steril', sanitationStandard: 'Sekali pakai langsung ganti' },
    ],
    venueAnalysis: [
      { venueType: 'Ruang Kantor / Tempat Kerja', suitability: 'Sangat Cocok', logisticsRequirement: 'Bisa dilakukan di kursi kerja atau sofa santai.' },
      { venueType: 'Kamar Hotel / Penginapan', suitability: 'Sangat Nyaman', logisticsRequirement: 'Bisa dilakukan di sofa santai atau tempat tidur.' },
      { venueType: 'Rumah / Kost', suitability: 'Ideal', logisticsRequirement: 'Fleksibel sambil menonton televisi atau istirahat.' },
    ],
    sopSteps: [
      'Pembersihan kaki pelanggan menggunakan handuk hangat antiseptik.',
      'Identifikasi keluhan utama (migrain, susah tidur, asam urat, atau kelelahan betis).',
      'Pemijatan teratur dari zona ginjal, saluran kemih, kepala, hingga sistem pencernaan.',
      'Pemberian tekanan seimbang tanpa memaksakan ambang rasa sakit.',
      'Peregangan relaksasi jari-jemari dan anjuran minum air putih pasca terapi.',
    ],
    k3Mitigation: [
      'Menghindari stimulasi titik rahim pada pelanggan yang sedang hamil trimester awal.',
      'Penyesuaian tekanan ekstra lembut pada penderita diabetes atau lansia.',
    ],
    legalityNotes: 'Seluruh teknik mengacu pada kurikulum baku Pengobatan Tradisional Kebugaran Kemenkes dan sertifikasi BNSP Spa.',
    faqs: [
      { question: 'Apakah dry massage harus melepas pakaian?', answer: 'Tidak. Dry massage dilakukan dengan mengenakan pakaian santai yang longgar tanpa menggunakan minyak sama sekali.' },
      { question: 'Apakah pijat refleksi kaki sakit?', answer: 'Terapis akan menyesuaikan tekanan. Jika ada titik tertentu yang terasa nyeri, itu menandakan adanya ketegangan pada zona organ terkait.' },
      { question: 'Apakah layanan ini bisa dipanggil ke kantor di Palembang?', answer: 'Bisa. Banyak karyawan kantor memesan sesi refleksi atau dry massage saat jam istirahat atau lembur kerja.' },
      { question: 'Berapa lama waktu tunggu terapis datang?', answer: 'Rata-rata 30-45 menit untuk kawasan pusat kota dan 45-60 menit untuk kawasan pinggiran Palembang.' },
      { question: 'Apakah bermanfaat untuk penderita insomnia?', answer: 'Sangat efektif. Stimulasi titik solar plexus dan saraf kepala pada telapak kaki merangsang pelepasan hormon endorfin dan relaksasi.' },
      { question: 'Apakah ada paket hemat untuk 2 orang?', answer: 'Ya, Anda bisa memesan sesi bergantian untuk 2 orang dengan diskon bundling WhatsApp.' },
    ],
    spokeArticles: [
      { title: 'Manfaat Dry Massage Tanpa Minyak untuk Pekerja', url: '/blog/manfaat-pijat-capek-perjalanan/' },
      { title: 'Kombinasi Refleksi dan Lulur Body Scrub', url: '/blog/tarif-pijat-panggilan-palembang/' },
    ],
  },
  {
    slug: 'pijat-panggilan-ke-rumah',
    title: 'Pijat Panggilan ke Rumah & Kost Palembang (Bawa Matras Sendiri)',
    shortDesc: 'Layanan home service eksklusif yang mengutamakan kebersihan dan kenyamanan hunian Anda, dilengkapi matras lipat portabel dan sprei steril sekali pakai.',
    heroImage: '/images/layanan-pijat-panggilan-ke-rumah.webp',
    metaTitle: 'Pijat Panggilan ke Rumah Palembang | Home Service Bawa Matras',
    metaDesc: 'Jasa pijat panggilan ke rumah & kost di Palembang. Higienis bawa matras lipat sendiri, sprei disposable, tanpa mengotori tempat tidur Anda. Bebas ongkir.',
    primaryKeyword: 'pijat panggilan ke rumah palembang',
    secondaryKeywords: [
      'jasa urut panggilan ke rumah terdekat palembang',
      'massage panggilan kos dan apartemen palembang',
      'jasa pijat panggilan bawa matras lipat sendiri palembang',
      'tarif pijat panggilan 2 orang group massage bergantian palembang',
    ],
    packages: [
      {
        name: 'Home Service Standar',
        duration: '90 Menit',
        price: 'Rp 200.000',
        deliverables: [
          'Full body massage relaksasi tradisional di kasur pelanggan',
          'Kain alas bersih & kain penutup tubuh',
          'Minyak aromaterapi zaitun alami',
          'Bebas biaya transportasi ke seluruh perumahan',
        ],
      },
      {
        name: 'Home Service VIP Bawa Matras Sendiri',
        duration: '90 Menit',
        price: 'Rp 240.000',
        isPopular: true,
        deliverables: [
          'Terapis membawa matras lipat busa tebal higienis',
          'Sprei sekali pakai (disposable non-woven sheet)',
          'Linen spray wangi menenangkan lavender',
          'Kasur/lantai rumah Anda tetap 100% bersih tanpa noda minyak',
          'Full body massage menyeluruh 90 menit',
        ],
      },
      {
        name: 'Group Massage Keluarga (2 Orang Bergantian)',
        duration: '120 Menit (2x 60 Menit)',
        price: 'Rp 280.000',
        deliverables: [
          '1 Terapis melayani 2 orang anggota keluarga bergantian',
          'Pilihan fokus punggung, kaki, atau full body singkat',
          'Sangat hemat untuk pasangan suami-istri atau rekan kos',
          'Termasuk minyak aromaterapi & transport all-in',
        ],
      },
    ],
    costBreakdown: [
      { component: 'Terapis Handal & Berseragam', specification: 'Pria/Wanita tersertifikasi BNSP', estimate: 'Termasuk' },
      { component: 'Matras Lipat Busa & Sprei Disposable', specification: 'Cover kulit desinfeksi + sprei medis sekali pakai', estimate: 'Paket VIP' },
      { component: 'Ongkos Transportasi', specification: 'Seluruh perumahan di Palembang', estimate: 'Gratis All-in' },
      { component: 'Jaminan Kebersihan', specification: 'Lantai/kasur bebas noda minyak', estimate: '100% Terjamin' },
    ],
    equipmentSpecs: [
      { name: 'Matras Lipat Portabel', brandOrType: 'High Density Foam Tebal 6cm', sanitationStandard: 'Dibersihkan cairan disinfektan medis sebelum & sesudah sesi' },
      { name: 'Sprei Sekali Pakai', brandOrType: 'Non-woven Medical Disposable Sheet', sanitationStandard: 'Baru dibuka dari plastik segel di depan pelanggan' },
      { name: 'Aromatic Linen Spray', brandOrType: 'Lavender & Tea Tree Essential Spray', sanitationStandard: 'Membunuh 99.9% kuman dan mengharumkan ruangan' },
    ],
    venueAnalysis: [
      { venueType: 'Kompleks Perumahan Tapak', suitability: 'Sangat Sesuai', logisticsRequirement: 'Ruang tamu atau kamar tidur keluarga.' },
      { venueType: 'Kamar Kost Mahasiswa/Karyawan', suitability: 'Sangat Praktis', logisticsRequirement: 'Matras lipat portabel hemat tempat dapat diletakkan di lantai.' },
      { venueType: 'Unit Apartemen (Rajawali, dll.)', suitability: 'Eksklusif', logisticsRequirement: 'Akses lift mudah dengan tas peralatan portabel rapi.' },
    ],
    sopSteps: [
      'Terapis membawa tas peralatan portabel rapi, tidak mencolok, dan menjaga privasi lingkungan hunian.',
      'Meminta izin memasang matras lipat dan sprei disposable di sudut ruangan yang disepakati.',
      'Melakukan sesi pijat dengan penuh ketenangan tanpa mengganggu kenyamanan anggota keluarga lain.',
      'Menggulung dan membuang sprei disposable ke tempat sampah serta membersihkan area kerja.',
      'Menerima pembayaran langsung tanpa biaya tambahan di luar nota WhatsApp.',
    ],
    k3Mitigation: [
      'Protokol privasi keluarga: Terapis wajib bersikap sopan, tidak merokok, dan menjaga tutur kata di dalam rumah pelanggan.',
      'Perlindungan properti: Minyak tidak akan menetes ke karpet atau lantai kayu pelanggan.',
    ],
    legalityNotes: 'SOP terstandarisasi untuk kenyamanan hunian dan etika bertamu yang santun.',
    faqs: [
      { question: 'Apakah terapis membawa matras sendiri?', answer: 'Ya, jika Anda memesan Paket VIP Bawa Matras, terapis kami akan membawa matras lipat bersih dan sprei sekali pakai sehingga kasur Anda tetap higienis.' },
      { question: 'Bisa dipanggil ke kos-kosan mahasiswa atau karyawan?', answer: 'Bisa. Kami sering melayani panggilan ke kost-kostan di area Ilir Barat, Bukit Besar, dan Sukarami.' },
      { question: 'Apakah aman untuk keluarga dan anak-anak?', answer: 'Sangat aman. Kami adalah penyedia jasa resmi murni kebugaran keluarga dengan rekam jejak terapis yang terverifikasi.' },
      { question: 'Apakah bisa memesan untuk 2 orang sekaligus dalam satu hari?', answer: 'Bisa, Anda bisa memesan Paket Group Massage untuk 2 orang bergantian atau meminta 2 terapis datang bersamaan.' },
      { question: 'Apakah ada biaya tambahan parkir atau bensin?', answer: 'Tidak ada biaya tersembunyi. Semua harga yang disepakati via WhatsApp adalah harga final.' },
      { question: 'Jam berapa layanan ke rumah paling lambat bisa dipesan?', answer: 'Layanan ke rumah kami layani 24 jam penuh. Anda bisa memesan pagi, siang, sore, maupun malam hari.' },
    ],
    spokeArticles: [
      { title: 'Tips Memilih Jasa Pijat Panggilan Aman untuk Rumah', url: '/blog/tips-memilih-pijat-panggilan-aman/' },
      { title: 'Daftar Tarif Pijat Panggilan Palembang Per Jam', url: '/blog/tarif-pijat-panggilan-palembang/' },
    ],
  },
  {
    slug: 'pijat-panggilan-hotel-24-jam',
    title: 'Pijat Panggilan Hotel 24 Jam Palembang (Standby Cepat)',
    shortDesc: 'Solusi relaksasi eksklusif bagi tamu hotel berbintang dan wisatawan di Palembang. Terapis profesional berpenampilan rapi tiba dalam 30-45 menit.',
    heroImage: '/images/layanan-pijat-panggilan-hotel-24-jam.webp',
    metaTitle: 'Pijat Panggilan Hotel Palembang 24 Jam | Tiba 30 Menit Tanpa DP',
    metaDesc: 'Jasa pijat panggilan hotel bintang & apartemen 24 jam di Palembang. Respon cepat tiba 30-45 menit, terapis rapi & sopan, bayar setelah selesai terapi.',
    primaryKeyword: 'pijat panggilan hotel palembang',
    secondaryKeywords: [
      'pijat panggilan palembang 24 jam fast respon',
      'massage hotel palembang tiba 30 menit',
      'pijat panggilan malam hari palembang tanpa dp',
      'jasa pijat panggilan hotel bintang palembang',
    ],
    packages: [
      {
        name: 'Hotel Express Relaksasi',
        duration: '60 Menit',
        price: 'Rp 200.000',
        deliverables: [
          'Full body massage cepat pemulihan lelah perjalanan',
          'Fokus leher, pundak, punggung, dan betis',
          'Minyak aromaterapi kualitas premium',
          'Tiba dalam 30-45 menit di hotel Anda',
        ],
      },
      {
        name: 'Hotel Deluxe Kebugaran (Paling Diminati)',
        duration: '90 Menit',
        price: 'Rp 250.000',
        isPopular: true,
        deliverables: [
          'Full body traditional massage intensif',
          'Pelemasan otot pinggang dan panggul kaku akibat duduk lama di pesawat/mobil',
          'Refleksi telapak kaki pemulihan stamina',
          'Pilihan aromaterapi lavender/citrus menyegarkan',
        ],
      },
      {
        name: 'Hotel Executive VIP Treatment',
        duration: '120 Menit',
        price: 'Rp 300.000',
        deliverables: [
          'Kombinasi full body massage 90 menit',
          'Tambahan totok wajah relaksasi mata lelah / kerokan higienis',
          'Peregangan relaksasi total sebelum tidur nyenyak',
          'Kenyamanan maksimal pasca perjalanan bisnis',
        ],
      },
    ],
    costBreakdown: [
      { component: 'Terapis Berpengalaman Hotel Bintang', specification: 'Etika sopan, rapi, dan berseragam', estimate: 'Termasuk' },
      { component: 'Kecepatan Kedatangan (Fast On-Call)', specification: '30-45 Menit di hotel pusat kota', estimate: 'Prioritas Armada' },
      { component: 'Ongkos Transportasi', specification: 'Seluruh hotel bintang di Palembang', estimate: 'Gratis All-in' },
      { component: 'Sistem Pembayaran', specification: 'Bayar di kamar pasca terapi (Cash/QRIS/Transfer)', estimate: 'Rp 0 Tanpa DP' },
    ],
    equipmentSpecs: [
      { name: 'Minyak Urut Non-Staining', brandOrType: 'Minyak Alami Tidak Membekas di Linen Hotel', sanitationStandard: 'Aman untuk sprei hotel bintang 4 & 5' },
      { name: 'Seragam & ID Card Terapis', brandOrType: 'Polo Shirt Rapi & Tanda Pengenal Resmi', sanitationStandard: 'Memenuhi SOP keamanan resepsionis hotel' },
      { name: 'Aromaterapi Diffuser Portabel', brandOrType: 'Essential Oil Lavender Calming', sanitationStandard: 'Membantu mengatasi jet lag dan insomnia' },
    ],
    venueAnalysis: [
      { venueType: 'Hotel Bintang Sudirman & Sukamto', suitability: 'Sangat Cepat', logisticsRequirement: 'The Zuri, Aryaduta, Aston, Novotel (Tiba 20-35 Menit).' },
      { venueType: 'Hotel Kawasan Demang & Bandara', suitability: 'Standby Cepat', logisticsRequirement: 'Harper Palembang, Santika Bandara (Tiba 30-45 Menit).' },
      { venueType: 'Hotel & Wisma Kawasan Jakabaring', suitability: 'Mudah Diakses', logisticsRequirement: 'Wyndham Opi Mall & hotel sekitarnya (Tiba 35-45 Menit).' },
    ],
    sopSteps: [
      'Pelanggan mengirimkan nama hotel, nomor kamar, dan jenis paket melalui WhatsApp 24 jam.',
      'Admin mengonfirmasi ketersediaan dan foto/profil terapis terdekat.',
      'Terapis tiba di lobi hotel, melapor sesuai aturan resepsionis, dan menuju ke kamar pelanggan.',
      'Sesi pijat dijalankan dengan ketenangan penuh tanpa kebisingan.',
      'Pembayaran dilakukan setelah selesai tanpa ada tagihan ongkos tak terduga.',
    ],
    k3Mitigation: [
      'Kepatuhan ketat terhadap aturan hotel berbintang mengenai keamanan dan ketertiban tamu.',
      'Pemeriksaan identitas tamu untuk memastikan kenyamanan dan keamanan bersama.',
    ],
    legalityNotes: 'Layanan resmi yang diakui dan kerap dipanggil oleh tamu-tamu instansi pemerintah maupun korporasi.',
    faqs: [
      { question: 'Apakah bisa memesan pada jam 1 atau 2 dini hari?', answer: 'Bisa. Terapis on-call kami standby 24 jam penuh melayani tamu hotel yang baru mendarat larut malam atau mengalami jet lag.' },
      { question: 'Apakah terapis bisa langsung naik ke kamar hotel?', answer: 'Tergantung kebijakan kartu akses lift masing-masing hotel. Jika lift menggunakan kartu akses, Anda dapat menjemput terapis di lobi atau meminta izin resepsionis.' },
      { question: 'Apakah minyak pijat akan mengotori kasur hotel?', answer: 'Tidak. Kami menggunakan minyak zaitun alami khusus yang mudah menyerap di kulit dan terapis selalu membawa kain pelapis pelindung.' },
      { question: 'Bagaimana cara pembayarannya jika tidak membawa uang tunai?', answer: 'Terapis kami menyediakan QRIS dinamis yang bisa di-scan melalui BCA, Mandiri, BRI, BNI, GoPay, OVO, atau transfer bank langsung.' },
      { question: 'Apakah ada jaminan terapis tidak meminta biaya tambahan?', answer: 'Ada garansi penuh. Tarif yang disetujui di WhatsApp adalah tarif all-in. Dilarang keras bagi terapis meminta biaya tambahan.' },
      { question: 'Berapa lama terapis sampai di hotel The Zuri atau Aryaduta?', answer: 'Rata-rata terapis tiba dalam waktu 25 hingga 35 menit karena armada terapis kami tersebar di koridor pusat kota.' },
    ],
    spokeArticles: [
      { title: 'Manfaat Pijat Capek Setelah Perjalanan Jauh di Palembang', url: '/blog/manfaat-pijat-capek-perjalanan/' },
      { title: 'Panduan Memilih Jasa Pijat Panggilan Aman di Hotel', url: '/blog/tips-memilih-pijat-panggilan-aman/' },
    ],
  },
  {
    slug: 'body-scrub-kerokan',
    title: 'Paket Kombo Body Scrub Lulur, Kerokan & Totok Wajah',
    shortDesc: 'Kombinasi perawatan tradisional lengkap untuk meremajakan kulit kusam, melegakan masuk angin meriang, serta meredakan sakit kepala dan stres.',
    heroImage: '/images/layanan-body-scrub-kerokan.webp',
    metaTitle: 'Paket Lulur, Kerokan & Totok Wajah Palembang | Spa Panggilan',
    metaDesc: 'Jasa lulur body scrub zaitun, kerokan higienis masuk angin & totok wajah panggilan di Palembang. Perawatan kulit dan kebugaran komplit di rumah Anda.',
    primaryKeyword: 'jasa pijat dan kerokan panggilan palembang',
    secondaryKeywords: [
      'pijat lulur dan scrub panggilan palembang',
      'order massage full body dan totok wajah panggilan kos palembang',
      'tukang urut capek dan masuk angin panggilan rumah kemuning palembang',
    ],
    packages: [
      {
        name: 'Paket Masuk Angin Tuntas (Pijat + Kerokan)',
        duration: '90 Menit',
        price: 'Rp 220.000',
        deliverables: [
          'Full body massage pelemasan otot pegal 60 menit',
          'Kerokan punggung higienis koin khusus + minyak kayu putih 30 menit',
          'Penghangatan tubuh dengan balsem herbal',
          'Sangat manjur untuk tubuh meriang, kembung, dan dingin',
        ],
      },
      {
        name: 'Paket Glow & Relax (Pijat + Lulur Body Scrub)',
        duration: '120 Menit',
        price: 'Rp 260.000',
        isPopular: true,
        deliverables: [
          'Full body massage aromaterapi relaksasi 75 menit',
          'Aplikasi lulur Mustika Ratu Zaitun ke seluruh tubuh 45 menit',
          'Eksfoliasi pengangkatan sel kulit mati & daki',
          'Pembersihan tubuh dengan handuk hangat steril',
          'Kulit menjadi halus, cerah, dan harum alami',
        ],
      },
      {
        name: 'Paket Royal All-in-One Kebugaran',
        duration: '120 Menit',
        price: 'Rp 280.000',
        deliverables: [
          'Full body massage tradisional 60 menit',
          'Totok wajah akupresur pereda migrain & mata lelah 30 menit',
          'Pilihan: Kerokan higienis atau Body scrub zaitun 30 menit',
          'Paket relaksasi paling komplit untuk tubuh bugar paripurna',
        ],
      },
    ],
    costBreakdown: [
      { component: 'Terapis Spa & Estetika Terlatih', specification: 'Terampil teknik scrub dan akupresur wajah', estimate: 'Termasuk' },
      { component: 'Scrub Lulur Herbal Asli', specification: 'Mustika Ratu Zaitun Body Scrub 100% Original', estimate: 'Disediakan' },
      { component: 'Alat Kerokan Higienis', specification: 'Koin kerokan tepi tumpul steril', estimate: 'Disediakan' },
      { component: 'Ongkos Transportasi', specification: 'Seluruh area Kota Palembang', estimate: 'Gratis All-in' },
    ],
    equipmentSpecs: [
      { name: 'Lulur Body Scrub', brandOrType: 'Mustika Ratu Zaitun Herbal', sanitationStandard: 'Wadah tersegel higienis, lembut dan tidak melukai kulit' },
      { name: 'Alat Kerokan Medis', brandOrType: 'Koin Kuningan / Keramik Tepi Halus Tumpul', sanitationStandard: 'Disterilisasi alkohol 70% sebelum diaplikasikan' },
      { name: 'Pembersih Wajah & Susu Pembersih', brandOrType: 'Viva Milk Cleanser & Face Tonic', sanitationStandard: 'Menyegarkan pori-pori wajah pasca totok' },
    ],
    venueAnalysis: [
      { venueType: 'Kamar Mandi / Kamar Tidur Rumah', suitability: 'Sangat Sesuai', logisticsRequirement: 'Dekat kamar mandi untuk membilas lulur scrub.' },
      { venueType: 'Kamar Hotel Berbintang', suitability: 'Nyaman', logisticsRequirement: 'Handuk hangat hotel dapat dimanfaatkan untuk bilasan akhir.' },
    ],
    sopSteps: [
      'Pembersihan awal tubuh pelanggan dengan handuk hangat.',
      'Sesi pemijatan tubuh relaksasi untuk membuka pori-pori dan melancarkan sirkulasi.',
      'Pengaplikasian butiran lulur scrub dengan gosokan melingkar lembut atau kerokan punggung.',
      'Pembersihan residu butiran lulur dengan handuk basah hangat.',
      'Sesi totok akupresur titik wajah (pelipis, dahi, bawah mata, dan pangkal hidung).',
    ],
    k3Mitigation: [
      'Teknik kerokan tidak dilakukan berulang kali pada kulit yang sudah merah pekat untuk mencegah lecet.',
      'Lulur tidak diaplikasikan pada luka terbuka atau kulit yang sedang mengalami eksim aktif.',
    ],
    legalityNotes: 'Bahan herbal alami terdaftar BPOM dan ramah lingkungan.',
    faqs: [
      { question: 'Apakah kerokan menyebabkan kulit lecet atau luka?', answer: 'Tidak. Terapis kami menggunakan alat kerokan tumpul khusus dan minyak pelicin kayu putih dalam jumlah cukup sehingga tidak melukai lapisan kulit.' },
      { question: 'Apakah lulur scrub bisa dilakukan di kamar tidur?', answer: 'Bisa. Terapis membawa kain alas penutup dan membersihkan sisa butiran scrub dengan spons/handuk hangat basah tanpa mengotori lantai.' },
      { question: 'Apa manfaat totok wajah?', answer: 'Totok wajah meredakan ketegangan otot wajah, mengurangi sakit kepala migrain, melancarkan sirkulasi darah wajah, dan membuat wajah tampak lebih segar berenergi.' },
      { question: 'Berapa lama efek segar dari paket lulur dan kerokan?', answer: 'Rasa pegal dan meriang biasanya langsung reda seketika, dan kulit terasa halus lembut selama beberapa hari ke depan.' },
      { question: 'Bolehkah mandi setelah kerokan dan lulur?', answer: 'Disarankan menunggu 30-60 menit setelah sesi selesai agar pori-pori kulit menutup kembali secara alami sebelum terkena air dingin.' },
      { question: 'Apakah paket kombo ini bisa untuk pria dan wanita?', answer: 'Bisa. Pelanggan pria dapat memilih terapis pria, dan pelanggan wanita dilayani oleh terapis wanita.' },
    ],
    spokeArticles: [
      { title: 'Kombinasi Refleksi dan Lulur Body Scrub untuk Kulit Kusam', url: '/blog/tarif-pijat-panggilan-palembang/' },
      { title: 'Keseleo dan Masuk Angin: Kapan Boleh Diurut dan Dikerok?', url: '/blog/keseleo-dan-terkilir-kapan-boleh-diurut/' },
    ],
  },
];
