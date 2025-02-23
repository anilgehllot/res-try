const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: String,
    price: Number,
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
});

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;
