// const express = require("express");
// const router = express.Router();
// const Restaurant = require("../models/restaurant.model");

// // ✅ Get all restaurants
// router.get("/", async (req, res) => {
//     try {
//         const restaurants = await Restaurant.find();
//         res.json(restaurants);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching restaurants", error });
//     }
// });

// // ✅ Add a new restaurant
// router.post("/", async (req, res) => {
//     try {
//         const restaurant = new Restaurant(req.body);
//         await restaurant.save();
//         res.status(201).json(restaurant);
//     } catch (error) {
//         res.status(400).json({ message: "Error adding restaurant", error });
//     }
// });

// module.exports = router;



//###22
const express = require('express');
const Restaurant = require('../models/restaurant.model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const restaurant = await Restaurant.find().populate('items');
        if (!restaurant) return res.status(404).send("Restaurant not found");
        res.json(restaurant);
    } catch (err) {
        res.status(500).send(err.message);
    }
});


router.post('/', async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body);
        await restaurant.save();
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



router.get('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findById(req.params.id).populate('items');
        if (!restaurant) return res.status(404).send("Restaurant not found");
        res.json(restaurant);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!restaurant) return res.status(404).send("Restaurant not found");
        res.json(restaurant);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
        if (!restaurant) return res.status(404).send("Restaurant not found");
        res.send('Restaurant deleted');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
