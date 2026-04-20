# Portofolio V1: Dark Neon Cyber

Proyek ini bertujuan untuk membangun sebuah website portofolio interaktif dan responsif menggunakan **React** dan **Tailwind CSS**. Tema utama yang diusung adalah *Dark Neon Cyber* yang memiliki nuansa gelap dengan pendaran neon, serta efek background *grid* berskala dengan *spotlight*. Proyek ini akan memprioritaskan estetika premium dan interaksi transisi yang mulus.

## Proposed Changes

### 1. Inisialisasi & Tech Stack
- **Framework**: Menginisialisasi proyek baru menggunakan Vite (`npm create vite@latest`).
- **Dependencies Utama**: 
  - `framer-motion` (untuk Intersection Observer dan transisi halus antar komponen)
  - `lottie-react` (untuk menampilkan animasi format JSON pada *Hero Section*)
  - `react-icons` (untuk ikon GitHub, LinkedIn, dll)
  - `tailwindcss` (sistem *styling*)

---

### 2. Konfigurasi Tema & Desain Global (CSS)

#### `index.css` / `tailwind.config.js`
Menyiapkan konfigurasi utilitas dasar:
- **Base Color**: `bg-slate-950` (biru pekat).
- **Neon Colors**: Variabel *custom* untuk palet Cyan/Emerald dan Ungu/Pink.
- **Global Background Grid**: CSS untuk grid kecil 30x30px (dengan *opacity* sangat rendah) dipadukan dengan masking radial-gradient (efek *spotlight*).
- **Glassmorphism**: Utilitas tambahan untuk transparansi dengan efek blur.

---

### 3. Struktur UI & Komponen React

#### `src/App.jsx`
- *Wrapper* utama yang menampung konfigurasi grid *custom* dan *masking spotlight*.
- Mengelola *z-index* konten agar selalu berada di atas efek *background*.

#### `src/components/Navbar.jsx`
- Desain *fixed* / *sticky* di bagian atas layar dengan efek *glassmorphism*.
- Area kiri: Teks "Sanupaii" *(gradient text Cyan to Purple)*.
- Area kanan: Menu navigasi yang menyala (*neon text hover effect*).

#### `src/components/Hero.jsx` (Home Section)
- Kiri: Teks sapaan "Frontend Developer" menggunakan animasi mengetik / *fade-up* dari `framer-motion`.
- Tombol: CTA "Project" (*cyan solid/glow*) dan "Contact" (*neon outline*).
- Kanan: Implementasi `lottie-react` untuk menampilkan animasi *coding/abstract vector*.

#### `src/components/About.jsx`
- Kiri: Nama dan deskripsi diri. Tombol "Download CV" dan "View Project" dengan animasi *scale-up* saat ditekan.
- Kanan: Implementasi foto profil (`public/profil.jpeg`) dengan bingkai berbayang neon (*neon box-shadow*).

#### `src/components/Portfolio.jsx`
- Fitur *tabs* interaktif (`Projects` | `Sertifikat` | `Tech Stack`).
- **Projects & Sertifikat**: Format *Grid Cards*, dengan efek *zoom-in hover* (*scale transform*) dan kemunculan tautan/tombol.
- **Tech Stack**: *Staggered animation* ikon teknologi yang muncul bergantian berkat `framer-motion`.

#### `src/components/Contact.jsx`
- Ditempatkan di bagian bawah tempat *grid* mulai memudar menjadi gelap total.
- *Input field* menggunakan iterasi interaktif (*glowing border* pada bagian bawah saat posisi *focus*).

## Timeline / Prioritas Kerja
1. Setup proyek dasar.
2. Menyusun styling global (tema gelap, grid, warna neon).
3. Membangun dan menata masing-masing komponen.
4. Menerapkan framer-motion untuk animasi dan interaktivitas.
5. Verifikasi *responsiveness* (Mobile/Tablet/Desktop).
