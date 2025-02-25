// const mongoose = require("mongoose");

// const restaurantSchema = new mongoose.Schema({
//     name: String,
//     location: String,
//     cuisine: String , 
//     items : [
//         {
//             type: mongoose.Schema.Types.ObjectId, 
//             ref: 'Item'
    
//         }
//     ]
// });

// const Restaurant = mongoose.model("Restaurant", restaurantSchema);
// module.exports = Restaurant;







//###333
const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Item'
    }]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
