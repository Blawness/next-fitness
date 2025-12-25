# Next Fitness 🏋️‍♂️

Website landing page untuk **Next Fitness** - pusat kebugaran eksklusif yang menyediakan layanan personal training profesional di Kemang, Jakarta Selatan.

## ✨ Fitur Utama

### 🏠 Hero Section
- Landing page dengan background gambar gym yang menarik
- Statistik perusahaan (4+ Trainer Pro, 8+ Jenis Kelas, 100+ Member Aktif, 7 Hari/Minggu)
- Call-to-action untuk menghubungi via WhatsApp

### 📋 Kelas & Program
**8 jenis kelas tersedia:**
- **Personal Training** - Latihan one-on-one dengan trainer profesional
- **HIIT (High Intensity)** - Latihan interval intensitas tinggi
- **Strength Training** - Fokus peningkatan kekuatan otot
- **Functional Training** - Latihan gerakan fungsional
- **Cardio Burn** - Latihan kardio intensif
- **Core & Abs** - Penguatan otot inti dan perut
- **Full Body Workout** - Latihan komprehensif seluruh tubuh
- **Yoga & Recovery** - Sesi yoga untuk pemulihan dan relaksasi

### 📅 Jadwal Kelas
- Jadwal lengkap untuk 7 hari seminggu
- Informasi trainer untuk setiap sesi
- Sistem tab untuk navigasi hari

### ⭐ Keunggulan Kami
- **Trainer Bersertifikat** - Semua trainer memiliki sertifikasi internasional
- **Program Personal** - Program latihan disesuaikan dengan tujuan individu
- **Fasilitas Modern** - Lokasi di Kemang dengan peralatan lengkap
- **Jadwal Fleksibel** - Sesuai dengan ketersediaan Anda
- **Komunitas Supportif** - Lingkungan yang mendukung pencapaian tujuan

### 👥 Tim Trainer
**4 Trainer Profesional:**
- **Coach Ryan** - Strength & Personal Training (ISSA Certified)
- **Coach Sarah** - HIIT & Cardio (ACE Certified)
- **Coach Michael** - Functional Training (NASM Certified)
- **Coach Dina** - Yoga & Recovery (RYT-200 Certified)

### 📍 Lokasi & Kontak
- **Alamat:** Kemang, Jakarta Selatan
- **WhatsApp:** +62 812-3456-7890
- **Jam Operasional:** 7 hari seminggu

## 🚀 Teknologi Yang Digunakan

- **Framework:** Next.js 16.1.1
- **Runtime:** React 19.2.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Package Manager:** Bun
- **Deployment:** Static Export

## 📦 Instalasi & Menjalankan

### Persyaratan Sistem
- Node.js 18+
- Bun (recommended) atau npm/yarn/pnpm

### Langkah Instalasi

1. **Clone repository:**
```bash
git clone https://github.com/Blawness/next-fitness
cd next-fitness
```

2. **Install dependencies:**
```bash
# Menggunakan bun (recommended)
bun install

# atau menggunakan npm
npm install

# atau menggunakan yarn
yarn install

# atau menggunakan pnpm
pnpm install
```

3. **Jalankan development server:**
```bash
# Menggunakan bun
bun run dev

# atau menggunakan npm
npm run dev

# atau menggunakan yarn
yarn dev

# atau menggunakan pnpm
pnpm dev
```

4. **Buka browser:**
   Kunjungi [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Yang Tersedia

```bash
# Development server
bun run dev

# Build untuk production
bun run build

# Jalankan production build
bun run start

# Lint code
bun run lint
```

## 🏗️ Struktur Proyek

```
next-fitness/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── favicon.ico
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Hero section
│   │   ├── ClassesSection.tsx  # Classes grid
│   │   ├── Schedule.tsx        # Weekly schedule
│   │   ├── FeaturesSection.tsx # Features/advantages
│   │   ├── AboutSection.tsx    # About & trainers
│   │   ├── ContactSection.tsx  # Contact & location
│   │   ├── CTASection.tsx      # Call-to-action
│   │   └── FloatingContactButton.tsx
│   └── data/
│       ├── classes.ts          # Classes data
│       └── schedule.ts         # Schedule data
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎨 Tema & Desain

- **Color Scheme:** Blue primary (#3B82F6) dengan dark theme
- **Typography:** Inter (body) & Outfit (headings) via Next.js font optimization
- **Responsive:** Mobile-first design dengan breakpoints Tailwind
- **Animations:** Smooth transitions menggunakan Framer Motion
- **Accessibility:** Komponen Radix UI dengan semantic HTML

## 🔧 Development Guidelines

### Code Style
- **TypeScript:** Strict mode enabled
- **ESLint:** Next.js recommended rules
- **Prettier:** Consistent code formatting
- **Component Structure:** Functional components dengan hooks

### Best Practices
- Server-side rendering (SSR) untuk performance optimal
- Image optimization menggunakan Next.js Image component
- Responsive images dari Unsplash dengan proper sizing
- Clean component architecture dengan separation of concerns

## 🚀 Deployment

### Static Export
Proyek ini dikonfigurasi untuk static export yang siap deploy ke berbagai platform:

```bash
bun run build
```

Output akan tersedia di folder `out/` siap untuk deploy ke:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting**

### Environment Variables
Tidak ada environment variables yang diperlukan untuk production build.

## 📈 Performance

- **Lighthouse Score:** Target 90+ untuk semua metrik
- **Core Web Vitals:** Optimized untuk loading, interactivity, dan visual stability
- **Bundle Size:** Optimized dengan Next.js built-in optimizations
- **Images:** Lazy loading dan proper sizing

## 🤝 Kontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

## 📝 Lisensi

Proyek ini bersifat private untuk memenuhi UAS mata kuliah SEO dan tidak untuk distribusi publik.

## 📞 Kontak

**Next Fitness**
- Website: (https://blawness.github.io/next-fitness/)
- WhatsApp: [+62 812-3456-7890](https://wa.me/6281234567890)
- Email: info@nextfitness.id
- Lokasi: Kemang, Jakarta Selatan

---

**Built with ❤️ using Next.js by Kelompok 7 SEO Bisnis Digital UNJ**
