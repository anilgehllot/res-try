const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");

// ✅ Get all restaurants
router.get("/", async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ message: "Error fetching restaurants", error });
    }
});

// ✅ Add a new restaurant
router.post("/", async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(400).json({ message: "Error adding restaurant", error });
    }
});

module.exports = router;
