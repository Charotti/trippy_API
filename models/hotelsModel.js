const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
    min: 1,
    max: 5,
  },
  country: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  hasSPa: {
    type: Boolean,
  },
  hasPool: {
    type: Boolean,
  },
  priceCategory: {
    type: Number,
    min: 1,
    max: 3,
  },
});
const Hotel = mongoose.model("hotels", hotelSchema);
module.exports = Hotel;
