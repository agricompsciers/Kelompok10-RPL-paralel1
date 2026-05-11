require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("ERROR: MONGO_URI tidak ditemukan di file .env!");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('Berhasil terhubung ke MongoDB Atlas (DB1)'))
  .catch((err) => {
    console.error('Gagal terhubung ke MongoDB Atlas:');
    console.error(err.message);
  });

app.get('/', (req, res) => {
  res.send('Server Medha Nusantara sedang berjalan...');
});

const adminRoutes = require('./routes/adminRoutes');

app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server aktif di port ${PORT}`);
  console.log(`Koneksi database menggunakan: ${MONGO_URI.split('@')[1]}`); 
});