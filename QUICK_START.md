# 🚀 Quick Start Guide - Portfolio Website

Panduan cepat untuk langsung menggunakan portfolio website Anda!

## ⚡ Mulai dalam 5 Langkah

### 1. Buka Website
- Buka folder `d:\forto website` di File Explorer
- Double-click file `index.html`
- Website akan terbuka di browser default Anda
- ✅ Selesai!

### 2. Customize Data Pribadi
Edit file `index.html` dengan text editor (Notepad, VS Code, dll):

```
Cari dan ubah:
- "Dedek Harahap" → Nama Anda
- "Web Developer & UI/UX Designer" → Profesi Anda
- "dedek@example.com" → Email Anda
- "+62 812-3456-7890" → Nomor Anda
```

### 3. Update Projects
Scroll ke section "Projek" dan ubah:
- Project title
- Project description
- Technology tags
- Image URL

### 4. Ubah Warna (Opsional)
Edit file `styles.css`, cari `:root` section:

```css
:root {
    --primary-color: #6366f1;      /* Ubah warna utama */
    --secondary-color: #ec4899;    /* Ubah warna accent */
}
```

### 5. Upload ke Internet
Pilih salah satu:

#### **Option A: GitHub Pages (Gratis)**
1. Buat akun GitHub (github.com)
2. Buat repository baru: `username.github.io`
3. Upload semua file
4. Website live di: `https://username.github.io`

#### **Option B: Netlify (Gratis)**
1. Kunjungi netlify.com
2. Drag & drop folder `d:\forto website`
3. Website langsung live dengan domain random
4. Upgrade untuk custom domain

#### **Option C: Vercel (Gratis)**
1. Kunjungi vercel.com
2. Connect GitHub account
3. Select repository
4. Auto deploy!

---

## 📂 File Structure

```
d:\forto website\
├── index.html              ← Main website (buka ini di browser)
├── styles.css              ← Semua styling & animasi
├── script.js               ← JavaScript untuk interaksi
├── README.md               ← Dokumentasi lengkap
├── CUSTOMIZATION_GUIDE.md  ← Panduan customize detail
├── QUICK_START.md          ← File ini
└── .gitignore              ← Git configuration
```

---

## 🎨 Sections Breakdown

### Header / Navigation
```html
<!-- Di index.html, baris ~1-40 -->
- Logo brand
- Navigation menu
- Mobile hamburger menu
```

### Hero / Beranda
```html
<!-- Di index.html, baris ~45-92 -->
- Main title dengan highlight
- Subtitle & description
- Call-to-action buttons
- Profile image dengan animasi
```

### Tentang Saya
```html
<!-- Di index.html, baris ~95-185 -->
- About description
- 6 skill items (HTML, JS, React, Node.js, UI/UX, Database)
- Experience statistics
```

### Projek
```html
<!-- Di index.html, baris ~188-320 -->
- 6 project cards (dapat ditambah/dikurangi)
- Project image
- Project title & description
- Technology tags
```

### Testimoni
```html
<!-- Di index.html, baris ~323-400 -->
- 4 testimonial cards
- Star ratings
- Client testimonial text
- Client avatar & info
```

### Kontak
```html
<!-- Di index.html, baris ~403-480 -->
- Contact info (lokasi, email, telepon)
- Social media links
- Contact form
```

### Footer
```html
<!-- Di index.html, baris ~483-510 -->
- Footer links & info
- Copyright
```

---

## 🎬 Animasi Features

Semua animasi sudah built-in:

- ✅ **Slide-in animations** - Elemen muncul saat scroll
- ✅ **Hover effects** - Button & card interaksi
- ✅ **Smooth scroll** - Klik navigation → smooth ke section
- ✅ **Floating animations** - Profile image bergerak
- ✅ **Shape animations** - Background shapes berputar
- ✅ **Parallax effect** - Background bergerak saat scroll
- ✅ **Responsive design** - Auto adjust ke mobile/tablet

---

## 🛠️ Common Customizations

### Ubah Nama
```html
<!-- Cari di index.html: -->
<h1 class="hero-title">Halo, Saya <span class="highlight">Dedek Harahap</span></h1>

<!-- Ubah menjadi: -->
<h1 class="hero-title">Halo, Saya <span class="highlight">Nama Anda</span></h1>
```

### Ubah Email Kontak
```html
<!-- Cari di section kontak: -->
<p>dedek@example.com</p>

<!-- Ubah menjadi: -->
<p>email@anda.com</p>
```

### Ubah Social Media
```html
<!-- Cari di section kontak, ubah href: -->
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://github.com/yourprofile">GitHub</a>
```

### Ubah Warna Primary
```css
/* Di styles.css, baris ~8 */
:root {
    --primary-color: #FF5733;  /* Ubah ke warna favorite Anda */
}
```

### Ubah Font Size
```css
/* Contoh: Ubah hero title size */
.hero-title {
    font-size: 54px;  /* Ubah nilai ini */
}
```

---

## 📱 Testing di Different Devices

### Desktop
- Buka di browser (Chrome, Firefox, Safari, Edge)
- Semua feature akan berjalan smooth

### Tablet
- Buka DevTools (F12)
- Click toggle device toolbar
- Select tablet (iPad)
- Check responsiveness

### Mobile
- Buka DevTools (F12)
- Select mobile (iPhone, Android)
- Test hamburger menu & layout

### Real Device
- Host di Netlify/Vercel
- Open di smartphone
- Test all interactions

---

## ✨ Pro Tips

1. **Backup Files**
   - Before editing, save backup copy
   - Easy rollback jika error

2. **Use Color Picker**
   - https://coolors.co/ untuk color ideas
   - https://colorhexa.com/ untuk color codes

3. **Placeholder Images**
   - Gunakan https://via.placeholder.com/ temporarily
   - Replace dengan real images sebelum launch

4. **Test Form**
   - Form validation built-in
   - Success message shows after submit
   - (Note: Form not actually sending - untuk real emails setup backend)

5. **Optimize Images**
   - Compress images sebelum upload
   - Use tinypng.com atau compressor.io
   - Faster loading times

6. **Browser Compatibility**
   - Test di Chrome, Firefox, Safari
   - Semua modern browser supported
   - Mobile browsers fully supported

---

## 🐛 Troubleshooting

### Website tidak membuka?
```
✓ Pastikan file index.html di folder yang tepat
✓ Double-click index.html
✓ Coba browser lain (Chrome, Firefox)
```

### Animasi tidak jalan?
```
✓ Hard refresh: Ctrl+Shift+R (Windows) atau Cmd+Shift+R (Mac)
✓ Clear browser cache
✓ Check browser console (F12) untuk errors
```

### Form tidak bekerja?
```
✓ Semua field required harus diisi
✓ Success message akan muncul setelah submit
✓ (Untuk real email, perlu setup backend)
```

### Mobile menu tidak buka?
```
✓ Cek DevTools hamburger menu muncul
✓ Hard refresh browser
✓ Test di browser lain
```

### Warna tidak berubah?
```
✓ Pastikan edit di :root section di styles.css
✓ Hard refresh browser (Ctrl+Shift+R)
✓ Check CSS syntax correct
```

---

## 📚 Next Steps

1. ✅ Test website di browser Anda
2. ✅ Customize semua data pribadi
3. ✅ Replace placeholder images
4. ✅ Update projects & skills
5. ✅ Test di mobile
6. ✅ Upload ke hosting (Netlify/Vercel/GitHub Pages)
7. ✅ Share link ke hiring managers!

---

## 📞 Support Resources

- **HTML Questions**: https://developer.mozilla.org/
- **CSS Questions**: https://css-tricks.com/
- **JavaScript Help**: https://javascript.info/
- **Hosting Help**: Netlify docs, Vercel docs, GitHub Pages docs

---

## 🎉 Selamat!

Website portfolio Anda siap digunakan!

Next: Customize data Anda → Upload ke hosting → Share ke dunia! 

**Good luck! 🚀**

---

**Tips Terakhir**: Pastikan URL link di projects & social media benar dan aktif sebelum share ke recruiter!

