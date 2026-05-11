// =============================================
// routes/contact.js - Endpoint API Contact
// =============================================

const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// ── POST /api/contact ─────────────────────
// Menyimpan data kontak baru ke MongoDB
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Cek field kosong sebelum masuk ke Mongoose validator
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        message: 'Semua field wajib diisi',
      });
    }

    // Buat dokumen baru & simpan (validasi Mongoose otomatis berjalan)
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    return res.status(201).json({
      success: true,
      message: 'Pesan berhasil dikirim! Kami akan segera menghubungi Anda.',
      data: newContact,
    });

  } catch (err) {
    // Tangani error validasi Mongoose
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(422).json({
        success: false,
        message: 'Data tidak valid',
        errors,
      });
    }

    console.error('Server error:', err);
    return res.status(500).json({
      success: false,
      message: 'Terjadi kesalahan pada server',
    });
  }
});

// ── GET /api/contact ──────────────────────
// Mengambil semua data kontak (opsional, untuk admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: 'Gagal mengambil data',
    });
  }
});

module.exports = router;