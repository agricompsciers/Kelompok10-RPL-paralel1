// =============================================
// models/Contact.js - Schema & Model MongoDB
// =============================================

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama wajib diisi'],
      trim: true,
      minlength: [2, 'Nama minimal 2 karakter'],
      maxlength: [100, 'Nama maksimal 100 karakter'],
    },

    email: {
      type: String,
      required: [true, 'Email wajib diisi'],
      trim: true,
      lowercase: true,
      // Validasi: hanya menerima @gmail.com
      validate: {
        validator: function (value) {
          return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value);
        },
        message: 'Email harus menggunakan alamat @gmail.com',
      },
    },

    phone: {
      type: String,
      required: [true, 'Nomor telepon wajib diisi'],
      trim: true,
      // Validasi: hanya boleh angka, 9-15 digit
      validate: {
        validator: function (value) {
          return /^\d{9,15}$/.test(value);
        },
        message: 'Nomor telepon hanya boleh berisi angka (9-15 digit)',
      },
    },

    message: {
      type: String,
      required: [true, 'Pesan wajib diisi'],
      trim: true,
      minlength: [10, 'Pesan minimal 10 karakter'],
      maxlength: [1000, 'Pesan maksimal 1000 karakter'],
    },
  },
  {
    // Otomatis tambah field createdAt & updatedAt
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);