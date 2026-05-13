const Commodity = require('../models/Commodity');

// 1. GET ALL PRODUCTS (Read)
const getProducts = async (req, res) => {
    try {
        const products = await Commodity.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Failed to fetch products", error: err.message });
    }
};

// 2. GET SINGLE PRODUCT (Read)
const getProductById = async (req, res) => {
    try {
        const product = await Commodity.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// 3. CREATE PRODUCT (Create)
const createProduct = async (req, res) => {
    try {
        const { name, price, description, imageUrl } = req.body;
        const newProduct = new Commodity({ name, price, description, imageUrl });
        
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(400).json({ message: "Failed to create product", error: err.message });
    }
};

// 4. UPDATE PRODUCT (Update)
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Commodity.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Returns the updated document instead of the old one
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: "Failed to update product", error: err.message });
    }
};

// 5. DELETE PRODUCT (Delete)
const deleteProduct = async (req, res) => {
    try {
        await Commodity.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};