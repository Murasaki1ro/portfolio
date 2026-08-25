# 📚 Panduan Customization Website Portfolio

Panduan lengkap untuk mengcustomize website portfolio sesuai dengan data dan branding Anda.

## 1. 🎯 Mengubah Data Pribadi

### Header & Navigation
**File**: `index.html` (baris 1-40)

```html
<title>Portfolio - Dedek Harahap</title>
<!-- Ubah menjadi nama Anda -->

<h2>Dedek<span>.dev</span></h2>
<!-- Ubah brand name Anda -->
```

### Hero Section
**File**: `index.html` (baris 57-70)

```html
<h1 class="hero-title">Halo, Saya <span class="highlight">Dedek Harahap</span></h1>
<!-- Ubah nama Anda -->

<p class="hero-subtitle">Web Developer & UI/UX Designer Profesional</p>
<!-- Ubah profesi/jabatan Anda -->

<p class="hero-description">Saya membuat pengalaman digital yang indah dan fungsional untuk bisnis Anda</p>
<!-- Ubah tagline Anda -->
```

### About Section
**File**: `index.html` (baris 113-125)

```html
<p>Saya seorang web developer dan UI/UX designer dengan pengalaman lebih dari 5 tahun...</p>
<!-- Ubah deskripsi tentang Anda -->
```

### Contact Section
**File**: `index.html` (baris 324-345)

```html
<p>Jakarta, Indonesia</p>  <!-- Ubah lokasi -->
<p>dedek@example.com</p>   <!-- Ubah email -->
<p>+62 812-3456-7890</p>   <!-- Ubah nomor telepon -->
```

---

## 2. 🎨 Mengubah Warna & Theme

### CSS Variables
**File**: `styles.css` (baris 8-17)

```css
:root {
    --primary-color: #6366f1;      /* Warna utama (biru) */
    --secondary-color: #ec4899;    /* Warna sekunder (pink) */
    --accent-color: #f59e0b;       /* Warna accent (amber) */
    --dark-bg: #0f172a;
    --light-bg: #f8fafc;
    --text-dark: #1e293b;
    --text-light: #64748b;
}
```

### Contoh Mengubah Warna:
```css
/* Jika ingin tema green-teal */
--primary-color: #10b981;      /* Green */
--secondary-color: #06b6d4;    /* Cyan */
--accent-color: #f59e0b;       /* Amber */

/* Jika ingin tema purple-orange */
--primary-color: #a855f7;      /* Purple */
--secondary-color: #f97316;    /* Orange */
--accent-color: #06b6d4;       /* Cyan */
```

### Online Color Picker:
- https://coolors.co/
- https://colorhexa.com/
- https://chir.ag/projects/ntc.js/

---

## 3. 🖼️ Mengubah Images

### Profile Picture
**File**: `index.html` (baris 85)

```html
<!-- Dari: -->
<img src="https://via.placeholder.com/400x400?text=Profile+Image" alt="Profile">

<!-- Menjadi: -->
<img src="path/to/your/profile.jpg" alt="Profile">

<!-- Atau gunakan URL dari online: -->
<img src="https://example.com/my-profile.jpg" alt="Profile">
```

### About Image
**File**: `index.html` (baris 171)

```html
<!-- Ubah path/URL image tentang Anda -->
<img src="https://via.placeholder.com/500x600?text=About+Image" alt="About Me">
```

### Project Images
**File**: `index.html` (baris 207 dst)

```html
<!-- Setiap project card: -->
<img src="https://via.placeholder.com/400x300?text=Project+1" alt="Project 1">
<!-- Ubah menjadi screenshot/thumbnail project Anda -->
```

### Testimonial Avatars
**File**: `index.html` (baris 298 dst)

```html
<!-- Avatar klien: -->
<img src="https://via.placeholder.com/60x60?text=Client+1" alt="Client 1">
<!-- Ubah menjadi foto klien -->
```

### Tips Upload Images:
1. **Hosting lokal**: Simpan di folder `assets/images/`
2. **Cloud Storage**: Gunakan Cloudinary, Imgur, atau S3
3. **Free CDN**: Unsplash, Pexels, Pixabay untuk placeholder

---

## 4. 📋 Mengubah Projects

### Menambah Project Baru

**File**: `index.html` (dalam section `#projek`)

Copy template berikut dan ubah sesuai project Anda:

```html
<div class="project-card slide-in-up">
    <div class="project-image">
        <img src="YOUR_PROJECT_IMAGE_URL" alt="Project Name">
        <div class="project-overlay">
            <a href="YOUR_PROJECT_URL" class="project-link">
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
    <div class="project-info">
        <h3>Nama Project Anda</h3>
        <p>Deskripsi singkat project Anda</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
            <span class="tag">Technology 3</span>
        </div>
    </div>
</div>
```

### Contoh Filling:
```html
<div class="project-card slide-in-up">
    <div class="project-image">
        <img src="https://example.com/portfolio-app.jpg" alt="Portfolio Website">
        <div class="project-overlay">
            <a href="https://github.com/yourname/portfolio" class="project-link">
                <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    </div>
    <div class="project-info">
        <h3>Portfolio Website</h3>
        <p>Website portfolio personal dengan design modern dan responsive</p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
        </div>
    </div>
</div>
```

---

## 5. ⭐ Mengubah Testimonials

### Template Testimonial Baru

```html
<div class="testimonial-card slide-in-up">
    <div class="testimonial-stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text">"TESTIMONIAL TEXT KLIEN"</p>
    <div class="testimonial-author">
        <img src="AVATAR_URL" alt="Client Name">
        <div class="author-info">
            <h4>Nama Klien</h4>
            <p>Jabatan / Company</p>
        </div>
    </div>
</div>
```

### Star Rating:
```html
<!-- 5 bintang -->
<i class="fas fa-star"></i> x 5

<!-- 4 bintang -->
<i class="fas fa-star"></i> x 4
<i class="fas fa-star-half-alt"></i> x 1

<!-- 3 bintang -->
<i class="fas fa-star"></i> x 3
<i class="far fa-star"></i> x 2
```

---

## 6. 🎬 Mengubah Animasi

### Animation Duration
**File**: `styles.css`

```css
/* Default animation duration: 0.6s */
.slide-in-up {
    animation: slideInUp 0.6s ease-out forwards;
}

/* Ubah menjadi lebih cepat */
.slide-in-up {
    animation: slideInUp 0.3s ease-out forwards;
}

/* Atau lebih lambat */
.slide-in-up {
    animation: slideInUp 1s ease-out forwards;
}
```

### Animation Delay
```css
/* Ubah delay antara items */
.slide-in-up:nth-child(1) { animation-delay: 0.1s; }
.slide-in-up:nth-child(2) { animation-delay: 0.2s; }
.slide-in-up:nth-child(3) { animation-delay: 0.3s; }

/* Menjadi */
.slide-in-up:nth-child(1) { animation-delay: 0.05s; }
.slide-in-up:nth-child(2) { animation-delay: 0.1s; }
.slide-in-up:nth-child(3) { animation-delay: 0.15s; }
```

### Mengubah Easing
```css
/* ease-out (default) - mulai cepat, akhir lambat */
animation: slideInUp 0.6s ease-out;

/* ease-in - mulai lambat, akhir cepat */
animation: slideInUp 0.6s ease-in;

/* ease-in-out - lambat di awal dan akhir */
animation: slideInUp 0.6s ease-in-out;

/* linear - kecepatan konstan */
animation: slideInUp 0.6s linear;

/* cubic-bezier - custom timing */
animation: slideInUp 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

---

## 7. 📱 Responsive Design

### Testing Responsive:
1. **Browser DevTools**: Tekan `F12` → Toggle device toolbar
2. **Breakpoints utama**:
   - 768px: Tablet
   - 480px: Mobile phone

### Mengubah Breakpoint
**File**: `styles.css` (baris 1010 dst)

```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

---

## 8. 🔧 Advanced Customization

### Mengubah Font
**File**: `styles.css` (baris 28)

```css
/* Default */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Ubah menjadi */
font-family: 'Arial', sans-serif;
/* Atau */
font-family: 'Georgia', serif;
/* Atau gunakan Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
font-family: 'Poppins', sans-serif;
```

### Mengubah Border Radius
```css
/* Lebih rounded */
border-radius: 20px;  /* Dari 12px */

/* Lebih sharp */
border-radius: 4px;   /* Dari 12px */
```

### Mengubah Shadow
```css
/* Lebih soft */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

/* Lebih bold */
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
```

---

## 9. ✅ Checklist Customization

- [ ] Ubah nama dan profesi
- [ ] Update foto profile
- [ ] Ubah deskripsi tentang saya
- [ ] Update skill list
- [ ] Tambah/edit projects
- [ ] Ubah testimonials
- [ ] Update contact info
- [ ] Ubah warna theme
- [ ] Update social media links
- [ ] Test di mobile/tablet
- [ ] Test di berbagai browser
- [ ] Upload ke hosting

---

## 10. 🚀 Deployment Options

### 1. GitHub Pages (Gratis)
```bash
1. Upload ke GitHub repository
2. Aktifkan GitHub Pages di settings
3. Website langsung live!
```

### 2. Netlify (Gratis)
```bash
1. Drag & drop folder ke netlify.com
2. Automatic deployment
3. Custom domain support
```

### 3. Vercel (Gratis)
```bash
1. Connect GitHub repository
2. Automatic deployment
3. Fast performance
```

### 4. Traditional Hosting
```bash
1. Upload files via FTP
2. Hosting dengan domain sendiri
```

---

## 📝 Template Customization Checklist

Sebelum launch, pastikan:

- [ ] Nama dan branding sudah benar
- [ ] Semua foto sudah di-update
- [ ] Project descriptions akurat
- [ ] Contact info terbaru
- [ ] Social media links bekerja
- [ ] Tidak ada placeholder text
- [ ] Mobile responsive tested
- [ ] Semua link berfungsi
- [ ] Animasi smooth di semua browser
- [ ] Load time optimal

---

## 🆘 Troubleshooting

### Animasi tidak berjalan?
- Cek browser console (F12)
- Pastikan script.js loaded
- Refresh browser (Ctrl+F5)

### Warna tidak berubah?
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check CSS specificity

### Images tidak muncul?
- Cek URL image masih aktif
- Gunakan absolute URL
- Upload image ke hosting

### Mobile tidak responsive?
- Check viewport meta tag
- Test dengan DevTools
- Adjust media queries

---

**Version**: 1.0
**Last Updated**: August 2024

Selamat customize portfolio Anda! 🎉
