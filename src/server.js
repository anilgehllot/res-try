// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb+srv://anilgehlotedu2k4:anil30@restaurant.jaxw3.mongodb.net/restaurantDB", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.log("✅ Connected to MongoDB"))
//   .catch(err => console.error("❌ MongoDB Connection Error:", err));


// app.get('/' , (req , res) => {
//     res.send("hello word");
// })
// app.use("/api/restaurants", require("./routes/restaurant.routes"));
// app.use("/api/items", require("./routes/item.routes"));

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));






//###11
const express = require('express');
const mongoose = require('mongoose');
const RestaurantRoutes = require('./controllers/restaurant.controllers.js');
const ItemRoutes = require('./controllers/items.controllers.js');

const app = express();
const PORT = 8900;

app.use(express.json());
app.use('/restaurants', RestaurantRoutes);
app.use('/items', ItemRoutes);

mongoose
  .connect("mongodb+srv://anilgehlotedu2k4:anil30@restaurant.jaxw3.mongodb.net/?retryWrites=true&w=majority&appName=Restaurant")
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((error) => console.error('MongoDB connection error:', error));

