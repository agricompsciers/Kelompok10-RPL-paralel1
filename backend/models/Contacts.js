const mongoose = require('mongoose');

const contactsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now } // Automatically saves when they clicked "Send"
});

module.exports = mongoose.model('Contacts', contactsSchema);