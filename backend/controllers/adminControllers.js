const Commodity = require('../models/Commodity');

// CREATE
const createProduct = async (req, res) => {
    try {
        const { name, category, description, imageUrl } = req.body;
        const newProduct = await Commodity.create({ name, category, description, imageUrl });
        res.status(201).json({ message: "Product created successfully", data: newProduct });
    } catch (error) {
        res.status(400).json({ message: "Error creating product", error: error.message });
    }
};

// READ
const getAllProducts = async (req, res) => {
    try {
        const products = await Commodity.find();
        res.status(200).json({ data: products });
    } catch (error) {
        res.status(500).json({ message: "Server error fetching products", error: error.message });
    }
};

// UPDATE
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Commodity.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Product updated", data: updatedProduct });
    } catch (error) {
        res.status(400).json({ message: "Error updating product", error: error.message });
    }
};

// DELETE
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Commodity.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error deleting product", error: error.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct
};