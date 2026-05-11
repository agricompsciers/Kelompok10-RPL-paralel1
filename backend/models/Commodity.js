const mongoose = require('mongoose');

const CommoditySchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  imageUrl: { type: String }
});

module.exports = mongoose.model('Commodity', CommoditySchema);