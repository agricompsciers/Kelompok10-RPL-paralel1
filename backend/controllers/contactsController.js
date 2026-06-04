const Contacts = require('../models/Contacts');

// 1. PUBLIC ACTION: Submit a message
const submitMessage = async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        const newMessage = new Contacts({ name, email, phone, message });
        
        await newMessage.save();
        res.status(201).json({ success: true, message: "Message sent successfully!" });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// 2. ADMIN ACTION: Read all messages (sorted newest first)
const getMessages = async (req, res) => {
    try {
        // .sort({ createdAt: -1 }) puts the newest messages at the top!
        const messages = await Contacts.find().sort({ createdAt: -1 });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

module.exports = { submitMessage, getMessages };