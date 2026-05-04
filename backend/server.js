const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/medha_nusantara';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Terhubung ke MongoDB'))
  .catch((err) => console.error('Gagal terhubung ke MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Server Medha Nusantara sedang berjalan...');
});

const adminRoutes = require('./routes/adminRoutes');
app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server aktif di http://localhost:${PORT}`);
});