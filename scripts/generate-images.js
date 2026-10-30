import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Konfigurasi daftar gambar dengan tema Orange Hangat & Elegan
const imageConfigs = [
  {
    filename: 'hero-pijat-palembang.webp',
    width: 800,
    height: 600,
    title: 'Pijat Panggilan Palembang 24 Jam',
    subtitle: 'Layanan Terapi Kebugaran Resmi ke Rumah & Hotel',
    tag: 'Palembang Massage',
    theme: '#7c2d12',
  },
  {
    filename: 'layanan-pijat-tradisional.webp',
    width: 800,
    height: 600,
    title: 'Pijat Tradisional & Urut Nusantara',
    subtitle: 'Relaksasi Otot Kaku, Pegal Linu & Masuk Angin',
    tag: 'Layanan Utama',
    theme: '#9a3412',
  },
  {
    filename: 'layanan-pijat-refleksi.webp',
    width: 800,
    height: 600,
    title: 'Pijat Refleksi Kaki & Dry Massage',
    subtitle: 'Stimulasi Titik Saraf & Akupresur Praktis',
    tag: 'Layanan Refleksi',
    theme: '#c2410c',
  },
  {
    filename: 'layanan-pijat-panggilan-ke-rumah.webp',
    width: 800,
    height: 600,
    title: 'Pijat Panggilan ke Rumah & Kost',
    subtitle: 'Home Service Higienis Bawa Matras Sendiri',
    tag: 'Home Service',
    theme: '#831843',
  },
  {
    filename: 'layanan-pijat-panggilan-hotel-24-jam.webp',
    width: 800,
    height: 600,
    title: 'Pijat Panggilan Hotel 24 Jam',
    subtitle: 'Standby Cepat Tiba 30-45 Menit di Hotel Palembang',
    tag: 'Hotel On-Call 24 Jam',
    theme: '#1e3a8a',
  },
  {
    filename: 'layanan-body-scrub-kerokan.webp',
    width: 800,
    height: 600,
    title: 'Lulur Body Scrub, Kerokan & Totok',
    subtitle: 'Paket Kombo Eksfoliasi Kulit & Masuk Angin',
    tag: 'Spa & Relaksasi',
    theme: '#b45309',
  },
  {
    filename: 'terapis-pria.webp',
    width: 800,
    height: 600,
    title: 'Layanan Terapis Pria Profesional',
    subtitle: 'Tekanan Kuat Bertenaga untuk Pegal Berat & Olahraga',
    tag: 'Terapis Pria',
    theme: '#1e293b',
  },
  {
    filename: 'terapis-wanita.webp',
    width: 800,
    height: 600,
    title: 'Layanan Terapis Wanita Ramah & Aman',
    subtitle: 'Khusus Pelanggan Wanita, Ibu Rumah Tangga & Syar\'i',
    tag: 'Terapis Wanita',
    theme: '#9f1239',
  },
  // Blog Images (4:3)
  {
    filename: 'blog-tarif-pijat-panggilan-palembang.webp',
    width: 800,
    height: 600,
    title: 'Panduan Tarif Pijat Panggilan Palembang',
    subtitle: 'Daftar Harga Per Jam, Opsi Durasi & Bebas Ongkir',
    tag: 'Info Tarif',
    theme: '#ea580c',
  },
  {
    filename: 'blog-tips-memilih-pijat-panggilan-aman.webp',
    width: 800,
    height: 600,
    title: 'Tips Memilih Jasa Pijat Panggilan Aman',
    subtitle: 'Panduan Bebas Asusila, Bersertifikat & Nyaman Keluarga',
    tag: 'Edukasi Keluarga',
    theme: '#c2410c',
  },
  {
    filename: 'blog-manfaat-pijat-capek-perjalanan.webp',
    width: 800,
    height: 600,
    title: 'Manfaat Pijat Capek Setelah Perjalanan',
    subtitle: 'Pulihkan Stamina Tamu Hotel & Transit Bandara SMB II',
    tag: 'Travel Wellness',
    theme: '#d97706',
  },
  {
    filename: 'blog-keseleo-dan-terkilir-kapan-boleh-diurut.webp',
    width: 800,
    height: 600,
    title: 'Keseleo & Terkilir: Kapan Boleh Diurut?',
    subtitle: 'Panduan Metode RICE vs Terapi Urut Tradisional',
    tag: 'Kesehatan Fisik',
    theme: '#9a3412',
  },
  {
    filename: 'blog-terapi-pegal-pinggang-kebugaran-pria.webp',
    width: 800,
    height: 600,
    title: 'Terapi Pegal Pinggang & Kebugaran Pria',
    subtitle: 'Pelemasan Otot Pinggang & Sirkulasi Alami Pekerja',
    tag: 'Kebugaran Pria',
    theme: '#334155',
  },
  // Open Graph Image (1200x630)
  {
    filename: 'og-image.webp',
    width: 1200,
    height: 630,
    title: 'Pijat Panggilan Palembang 24 Jam',
    subtitle: 'Layanan Terapi Kebugaran & Urut Tradisional Resmi ke Rumah & Hotel Palembang',
    tag: 'Pijat Palembang Resmi',
    theme: '#7c2d12',
  },
];

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

async function generateSvg(cfg) {
  const safeTitle = escapeXml(cfg.title);
  const safeSubtitle = escapeXml(cfg.subtitle);
  const safeTag = escapeXml(cfg.tag.toUpperCase());

  return `
    <svg width="${cfg.width}" height="${cfg.height}" viewBox="0 0 ${cfg.width} ${cfg.height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${cfg.theme}" />
          <stop offset="100%" stop-color="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgGrad)" />
      
      <!-- Pola Aksen Halus -->
      <circle cx="${cfg.width * 0.9}" cy="${cfg.height * 0.15}" r="160" fill="white" fill-opacity="0.04" />
      <circle cx="${cfg.width * 0.1}" cy="${cfg.height * 0.85}" r="220" fill="white" fill-opacity="0.03" />

      <!-- Tag Badge -->
      <rect x="50" y="50" width="${cfg.tag.length * 11 + 30}" height="36" rx="18" fill="white" fill-opacity="0.15" />
      <text x="65" y="74" fill="#fb923c" font-family="system-ui, sans-serif" font-size="14" font-weight="700" letter-spacing="1">
        ${safeTag}
      </text>

      <!-- Rasio Badge 4:3 -->
      ${cfg.width === 800 ? `
      <rect x="${cfg.width - 120}" y="50" width="70" height="30" rx="6" fill="black" fill-opacity="0.3" />
      <text x="${cfg.width - 105}" y="70" fill="#e2e8f0" font-family="system-ui, sans-serif" font-size="12" font-weight="600">
        4:3 HD
      </text>` : ''}

      <!-- Title & Subtitle Container -->
      <text x="50" y="${cfg.height * 0.52}" fill="#ffffff" font-family="system-ui, sans-serif" font-size="${cfg.width === 1200 ? '42' : '32'}" font-weight="800">
        ${safeTitle}
      </text>
      <text x="50" y="${cfg.height * 0.62}" fill="#fed7aa" font-family="system-ui, sans-serif" font-size="${cfg.width === 1200 ? '22' : '18'}" font-weight="500">
        ${safeSubtitle}
      </text>

      <!-- Trust Indicator Footer -->
      <line x1="50" y1="${cfg.height - 70}" x2="${cfg.width - 50}" y2="${cfg.height - 70}" stroke="white" stroke-opacity="0.1" stroke-width="1" />
      <text x="50" y="${cfg.height - 40}" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14" font-weight="500">
        Kota Palembang • Terapis Bersertifikat BNSP • Izin STPT Dinkes • Bebas Asusila
      </text>
    </svg>
  `;
}

async function run() {
  console.log('Menghasilkan aset visual 4:3 dan OG 1200x630 bernuansa Orange & Putih...');
  for (const cfg of imageConfigs) {
    const filePath = path.join(outputDir, cfg.filename);
    const svg = await generateSvg(cfg);
    await sharp(Buffer.from(svg))
      .webp({ quality: 90 })
      .toFile(filePath);
    console.log(`✓ Terbuat: ${cfg.filename} (${cfg.width}x${cfg.height})`);
  }
  console.log('Seluruh gambar visual selesai diperbarui!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
