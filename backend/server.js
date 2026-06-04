require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken'); // Your auth library

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// 1. THE DATABASE CONNECTION (His work)
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("ERROR: MONGO_URI tidak ditemukan di file .env!");
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ Berhasil terhubung ke MongoDB Atlas'))
  .catch((err) => console.error('❌ Gagal terhubung ke MongoDB Atlas:', err.message));

// 2. YOUR AUTHENTICATION (Your work)
const MOCK_ADMIN = { username: 'admin', password: 'password123' };
const JWT_SECRET = "medha_super_secret_key_2026";

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === MOCK_ADMIN.username && password === MOCK_ADMIN.password) {
    const token = jwt.sign({ username: MOCK_ADMIN.username, role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
    return res.json({ success: true, token });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// 3. HIS CRUD ROUTES (His work)
const productsRoutes = require('./routes/productsRoutes');
app.use('/api/products', productsRoutes);

const contactsRoutes = require('./routes/contactsRoutes');
app.use('/api/contacts', contactsRoutes);
// (Note: I ignored his 'adminRoutes' import for now because your login handles the admin entry perfectly).

app.listen(PORT, () => {
  console.log(`🚀 Server aktif di port ${PORT}`);
});