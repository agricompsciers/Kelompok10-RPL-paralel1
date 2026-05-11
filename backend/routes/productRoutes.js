const express = require('express');
const router = express.Router();
const Commodity = require('../models/Commodity');

router.post('/', async (req, res) => {
    try {
        const { name, price, description, imageUrl } = req.body;
        const newCommodity = new Commodity({
            name,
            price,
            description,
            imageUrl
        });
        const savedData = await newCommodity.save();
        res.status(201).json(savedData);
    } catch (err) {
        res.status(400).json({ message: "Gagal menambah data", error: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const commodities = await Commodity.find();
        res.status(200).json(commodities);
    } catch (err) {
        res.status(500).json({ message: "Gagal mengambil data", error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Commodity.findById(req.params.id);
        if (!item) return res.status(404).json({ message: "Data tidak ditemukan" });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedData = await Commodity.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json(updatedData);
    } catch (err) {
        res.status(400).json({ message: "Gagal memperbarui data", error: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Commodity.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Komoditas berhasil dihapus" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;