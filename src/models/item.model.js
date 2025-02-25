// const mongoose = require("mongoose");

// const itemSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
// });

// const Item = mongoose.model("Item", itemSchema);
// module.exports = Item;


//##55
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Item', itemSchema);
