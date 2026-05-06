Repositori ini berisi project MERN Stack kelompok untuk website Medha Nusantara (Frontend React/Vite, Backend Node.js/Express). Harap baca panduan singkat ini sebelum mulai memodifikasi kode.

## 1. Setup Awal (Setelah Clone)

Folder `node_modules` sengaja dihapus dari pelacakan Git agar ukuran repo tidak bengkak. Setiap anggota wajib menginstal library secara lokal di laptop masing-masing.

**Terminal - Backend:**
Buka terminal, masuk ke folder backend, dan jalankan:
```bash
cd backend
npm install
```

**Terminal - Frontend:**
Buka terminal baru, masuk ke folder frontend, dan jalankan:
```bash
cd frontend
npm install
```

## 2. Cara Menjalankan Project (Localhost)

Website ini butuh dua server yang berjalan bersamaan. Buka dua tab terminal di VS Code setiap kali akan mengerjakan project.

**Terminal 1 (Backend):**
```bash
cd backend
node server.js
```
*(Biarkan terminal ini menyala untuk koneksi ke database)*

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```
*(Klik link localhost yang muncul untuk membuka website di browser)*

## 3. Pembagian Tugas per Fitur (Scope of Work)

Untuk menghindari bentrok kode (merge conflict), kerjakan hanya file yang menjadi bagian dari fitur masing-masing.

**A. Fitur Admin Dashboard**
* Frontend: Mengelola routing utama (`App.jsx`), komponen layout (`Navbar.jsx`, `Footer.jsx`), dan halaman antarmuka `AdminDashboard.jsx`.
* Backend: Menulis logika CRUD (Create, Read, Update, Delete) komoditas di `backend/controllers/adminController.js` dan mengatur rutenya di `adminRoutes.js`.

**B. Fitur Katalog Komoditas (User View)**
* Frontend: Fokus mengerjakan tampilan di `frontend/src/pages/Commodities.jsx`.
* Tugas utama: Menarik data produk dari database dan menampilkannya sebagai katalog publik untuk user. Tolong jangan mengubah skema database (`Commodity.js`) secara sepihak agar dashboard admin tidak error.

**C. Fitur Form Kontak**
* Frontend: Menyusun form pengiriman pesan di `frontend/src/pages/Contact.jsx`.
* Backend: Menulis logika penanganan form dan menyimpan pesan masuk ke database lewat `backend/controllers/contactController.js` dan `backend/routes/contactRoutes.js`.

**D. Fitur Company Profile (Home & About Us)**
* Frontend: Bekerja di file `frontend/src/pages/Home.jsx` dan `frontend/src/pages/AboutUs.jsx`.
* Tugas utama: Membuat halaman statis profil perusahaan (Misi, Visi, Struktur Organisasi, dll) sesuai dengan desain wireframe. 
* Catatan: Fitur ini murni fokus pada desain UI (User Interface) dan styling karena tidak memerlukan koneksi logika ke backend atau database.

## 4. Aturan Git

1. **Jangan push langsung ke branch main.** 
   Branch `main` adalah versi utama. Selalu buat branch baru sesuai nama fitur yang sedang dikerjakan.
   ```bash
   git checkout main
   git pull origin main
   git checkout -b nama-fitur
   ```

2. **Kerjakan file sesuai scope fitur masing-masing.** 
   Jika butuh mengubah file milik anggota lain (misalnya mengedit Navbar atau struktur database), komunikasikan dulu di grup WA/Discord.

3. **Jangan pernah commit file `.env` atau `node_modules`.** 
   File konfigurasi `.gitignore` sudah dibuat, tolong jangan dihapus atau diubah.

4. **Biasakan pull sebelum mulai.** 
   Setiap kali baru membuka laptop untuk melanjutkan tugas, selalu jalankan `git pull origin main` agar struktur file lokal sinkron dengan update terbaru dari anggota lain.
```
