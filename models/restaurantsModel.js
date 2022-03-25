const mongoose = require("mongoose");
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100,
  },
  address: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 200,
  },
  city: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100,
  },
  country: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100,
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  cuisine: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 100,
  },
  priceCategory: {
    type: Number,
    min: 1,
    max: 3,
  },
});
const Restaurant = mongoose.model("restaurants", restaurantSchema);
module.exports = Restaurant;
