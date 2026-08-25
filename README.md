# Portfolio Website - Dedek Harahap

Website portfolio statis yang modern dengan animasi transisi yang menarik dan responsif di semua device.

## 🎨 Fitur Utama

### 1. **Navigation & Header**
- Navbar sticky dengan blur effect
- Mobile responsive hamburger menu
- Active link indicator dengan underline animation
- Smooth scroll ke setiap section

### 2. **Hero Section**
- Judul dengan gradient text
- Call-to-action buttons
- Floating card animation untuk profile image
- Animated shapes di background
- Scroll indicator dengan bounce animation
- Parallax effect saat user scroll

### 3. **Tentang Saya**
- Deskripsi profesional
- Grid skill dengan 6 skill utama
- Hover effect pada skill items
- Experience box dengan statistik
- Slide-in animations

### 4. **Projek**
- Grid layout responsive (3 kolom di desktop, 1 di mobile)
- Project cards dengan hover animation
- Project overlay dengan link
- Tech tags untuk setiap project
- Staggered animations

### 5. **Testimoni**
- Testimonial cards dengan star rating
- Author info dengan avatar
- Auto-rotation untuk multiple testimonials
- Quote mark decoration

### 6. **Kontak**
- Contact info cards (lokasi, email, telepon)
- Social media links
- Contact form dengan validasi
- Glassmorphism design di background gradient

### 7. **Footer**
- Quick links
- Services list
- Copyright information
- Responsive grid layout

## 🎬 Animasi & Transisi

### Animasi Utama:
- **slideInUp**: Elemen muncul dari bawah
- **slideInLeft**: Elemen muncul dari kiri
- **slideInRight**: Elemen muncul dari kanan
- **slideInDown**: Elemen muncul dari atas
- **float**: Card profile mengapung
- **pulse**: Efek berkedip
- **rotateShape**: Shape berputar
- **bounce**: Efek meloncat
- **glow**: Efek cahaya

### Interaksi User:
- Smooth scroll on click
- Hover effects pada buttons dan cards
- Transition pada hover
- Transform effects pada interaksi

## 🎨 Design & Styling

### Color Palette:
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#ec4899` (Pink)
- **Accent**: `#f59e0b` (Amber)
- **Dark**: `#0f172a`
- **Light**: `#f8fafc`

### Gradients:
- Primary to Secondary untuk main elements
- Amber to Red untuk contact section
- Custom radial gradients untuk background effects

### Typography:
- Font: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- Responsive font sizes
- Font weights: 500, 600, 700, 800

## 📱 Responsiveness

Website fully responsive dengan breakpoints:
- **Desktop**: Full layout dengan 3-column grids
- **Tablet** (768px): 2-column grids, hamburger menu
- **Mobile** (480px): Single column, optimized spacing

### Mobile Features:
- Hamburger menu yang fungsional
- Touch-friendly buttons
- Optimized images dan layouts
- Readable font sizes

## 🚀 Cara Menggunakan

### 1. Buka File HTML
```bash
# Buka index.html di browser
# Windows: Double-click index.html atau klik kanan > Open with Browser
# macOS/Linux: Double-click index.html atau buka dengan browser favorit
```

### 2. Struktur File
```
portfolio-website/
├── index.html       # Main HTML file
├── styles.css       # All CSS styling dan animations
├── script.js        # JavaScript untuk interaksi
└── README.md        # Dokumentasi ini
```

### 3. Customization

#### Mengubah Data:
1. **Nama & Judul**: Ubah "Dedek Harahap" di `<title>` dan sections
2. **Kontak Info**: Edit di section kontak
3. **Projects**: Tambah/edit project cards di section projek
4. **Testimonials**: Ubah testimonial text dan author info
5. **Skills**: Modify skill items di about section

#### Mengubah Warna:
Di `styles.css`, ubah CSS variables:
```css
:root {
    --primary-color: #6366f1;      /* Primary blue */
    --secondary-color: #ec4899;    /* Pink accent */
    --accent-color: #f59e0b;       /* Amber accent */
    /* ... */
}
```

#### Mengubah Images:
Replace placeholder images:
- `https://via.placeholder.com/` dengan URL image asli
- Atau gunakan relative path ke folder local

#### Mengubah Animasi:
Di `styles.css`, sesuaikan animation-duration dan animation-delay

## 💻 JavaScript Features

### Navigation:
- `hamburger.addEventListener('click')` - Toggle menu
- `document.addEventListener('scroll')` - Active link tracking
- `document.addEventListener('hashchange')` - Hash navigation

### Animations:
- `IntersectionObserver` - Trigger animations on scroll
- `requestAnimationFrame` - Smooth scroll animations
- `mousemove` event - Mouse follow effect pada shapes

### Form:
- Form validation
- Success message on submit
- Reset form after submission

### Utilities:
- Smooth scroll behavior
- Scroll to top button (auto-generated)
- Performance throttling pada scroll events

## ⚡ Performance

### Optimizations:
- CSS animations (hardware accelerated)
- IntersectionObserver untuk lazy animations
- Throttled scroll events
- Minimal reflows/repaints
- Optimized media queries

### Best Practices:
- Semantic HTML
- BEM-like CSS naming
- Organized JavaScript dengan comments
- Mobile-first responsive design

## 🔧 Browser Compatibility

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 File Descriptions

### index.html
- Semantic HTML5 structure
- Sections: Header, Hero, About, Projects, Testimonials, Contact, Footer
- Font Awesome icons integration
- Meta tags untuk responsiveness

### styles.css
- CSS Variables untuk theme colors
- Keyframe animations untuk semua effects
- Responsive grid layouts
- Media queries untuk mobile optimization
- Glassmorphism effects
- Gradient backgrounds

### script.js
- Navigation logic dengan hamburger menu
- Intersection Observer untuk scroll animations
- Form validation dan submission
- Parallax scroll effect
- Mouse follow effect pada shapes
- Scroll to top button functionality
- Active link tracking

## 🎯 Tips Penggunaan

1. **Customize nama/info**: Edit semua teks sesuai portfolio Anda
2. **Tambah projects**: Copy-paste project card dan ubah data
3. **Update skills**: Ubah icon dan skill name
4. **Tambah testimonial**: Copy testimonial card dan edit
5. **Change colors**: Update CSS variables di `:root`
6. **Add real images**: Replace placeholder images dengan foto asli

## 📚 Additional Features

- Scroll to top button (auto-generated)
- Smooth scroll behavior
- Parallax effect pada hero section
- Mouse follow effect pada shapes
- Form validation
- Success message on submit
- Auto testimonial rotation

## 🎓 Learning Resources

Website ini menggunakan:
- **HTML5 Semantic**: Untuk struktur yang baik
- **CSS3 Features**: Grid, Flexbox, Animations, Gradients
- **Vanilla JavaScript**: Tanpa dependencies external
- **Responsive Design**: Mobile-first approach

## 📄 License

Free to use dan modify untuk portfolio personal Anda.

## 🤝 Support

Jika ada pertanyaan atau ingin menambah fitur:
- Edit langsung file HTML/CSS/JS
- Konsultasi dengan AI assistant
- Testing di berbagai browser

---

**Last Updated**: August 2024
**Version**: 1.0
**Status**: ✅ Production Ready

Selamat menggunakan website portfolio Anda! 🎉
