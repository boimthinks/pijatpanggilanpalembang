export interface InternalLink {
  title: string;
  url: string;
  category: 'layanan' | 'terapis' | 'area' | 'blog' | 'transaksional';
  description: string;
}

export const internalLinks: InternalLink[] = [
  // Layanan Utama (Money Pages)
  {
    title: 'Pijat Tradisional & Urut Nusantara',
    url: '/layanan/pijat-tradisional/',
    category: 'layanan',
    description: 'Pijat urut kebugaran seluruh tubuh untuk meredakan capek berat, pegal linu, dan masuk angin.',
  },
  {
    title: 'Pijat Refleksi & Dry Massage',
    url: '/layanan/pijat-refleksi/',
    category: 'layanan',
    description: 'Terapi stimulasi titik saraf akupresur telapak kaki dan peregangan tubuh tanpa minyak.',
  },
  {
    title: 'Pijat Panggilan ke Rumah & Kost',
    url: '/layanan/pijat-panggilan-ke-rumah/',
    category: 'layanan',
    description: 'Home service higienis dengan opsi terapis membawa matras lipat portabel dan sprei steril.',
  },
  {
    title: 'Pijat Panggilan Hotel 24 Jam',
    url: '/layanan/pijat-panggilan-hotel-24-jam/',
    category: 'layanan',
    description: 'Layanan standby cepat tiba 30-45 menit di hotel berbintang dan apartemen Kota Palembang.',
  },
  {
    title: 'Lulur Body Scrub, Kerokan & Totok',
    url: '/layanan/body-scrub-kerokan/',
    category: 'layanan',
    description: 'Paket kombo relaksasi kulit kusam, kerokan higienis masuk angin, dan totok wajah.',
  },

  // Preferensi Terapis
  {
    title: 'Layanan Terapis Pria Profesional',
    url: '/terapis/pria/',
    category: 'terapis',
    description: 'Terapis pria bertenaga kuat untuk mengatasi otot tegang pekerja berat dan pemulihan olahraga.',
  },
  {
    title: 'Layanan Terapis Wanita Khusus',
    url: '/terapis/wanita/',
    category: 'terapis',
    description: 'Jaminan kenyamanan dan privasi 100% untuk pelanggan wanita, ibu rumah tangga, dan muslimah.',
  },

  // Transaksional
  {
    title: 'Daftar Tarif & Harga Resmi',
    url: '/tarif/',
    category: 'transaksional',
    description: 'Informasi tarif per jam transparan tanpa DP dan sudah termasuk ongkos transportasi Palembang.',
  },
  {
    title: 'Pemesanan WhatsApp 24 Jam',
    url: '/kontak/',
    category: 'transaksional',
    description: 'Hubungi koordinator layanan untuk konfirmasi kedatangan terapis terdekat.',
  },
];
