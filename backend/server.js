// // =============================================
// // server.js - Entry point aplikasi backend
// // Medha Nusantara Contact Form API
// // =============================================

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const contactRoutes = require('./routes/contact');

// const app = express();
// const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/medha_nusantara';

// // ── Middleware ──────────────────────────────
// app.use(cors({
//   origin: 'http://localhost:3000', // Ganti dengan URL frontend React kamu
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// app.use(express.json());

// // ── Routes ──────────────────────────────────
// app.use('/api/contact', contactRoutes);

// // Health check
// app.get('/', (req, res) => {
//   res.json({ message: 'Medha Nusantara API berjalan ✅' });
// });

// // ── Koneksi MongoDB & Start Server ──────────
// mongoose
//   .connect(MONGO_URI)
//   .then(() => {
//     console.log('✅ Terhubung ke MongoDB');
//     app.listen(PORT, () => console.log(`🚀 Server berjalan di http://localhost:${PORT}`));
//   })
//   .catch((err) => {
//     console.error('❌ Gagal konek MongoDB:', err.message);
//     process.exit(1);
//   });

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let contacts = [];

app.post("/contact", (req, res) => {

  const data = req.body;

  contacts.push(data);

  console.log("DATA MASUK:");
  console.log(data);

  res.json({
    success: true,
    message: "Contact berhasil disimpan"
  });
});

app.get("/contacts", (req, res) => {
  res.json(contacts);
});

app.listen(5000, () => {
  console.log("Server berjalan di http://localhost:5000");
});