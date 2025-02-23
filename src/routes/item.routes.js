const express = require("express");
const router = express.Router();
const Item = require("../models/item.model");

// ✅ Get all items
router.get("/", async (req, res) => {
    try {
        const items = await Item.find().populate("restaurant");
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: "Error fetching items", error });
    }
});



// ✅ Add a new item
router.post("/", async (req, res) => {
    try {
        const item = new Item(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(400).json({ message: "Error adding item", error });
    }
});

module.exports = router;




