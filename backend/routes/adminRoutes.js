const express = require('express');
const router = express.Router();
const Commodity = require('../models/Commodity');

router.get('/commodities', async (req, res) => {
  try {
    const commodities = await Commodity.find();
    res.json(commodities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;