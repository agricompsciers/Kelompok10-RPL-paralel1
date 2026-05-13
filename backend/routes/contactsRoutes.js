const express = require('express');
const router = express.Router();
const { submitMessage, getMessages } = require('../controllers/contactsController');

// POST request for the public Contact Us page
router.post('/', submitMessage);

// GET request for your Admin Dashboard
router.get('/', getMessages);

module.exports = router;