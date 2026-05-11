const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// ===============================
// CONFIG
// ===============================

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());

app.use(express.json());

// ===============================
// ROUTES
// ===============================

app.use('/api/contact', contactRoutes);

app.use('/api/admin', adminRoutes);

// ===============================
// HEALTH CHECK
// ===============================

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Backend berjalan dengan baik'
  });
});

// ===============================
// DATABASE CONNECTION
// ===============================

mongoose
  .connect(MONGO_URI)
  .then(() => {

    console.log('MongoDB terhubung');

    app.listen(PORT, () => {

      console.log(`Server berjalan di http://localhost:${PORT}`);

    });

  })
  .catch((err) => {

    console.error('Gagal terhubung ke MongoDB');
    console.error(err.message);

  });