const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  tripName: { type: String, unique: true, required: true },
  city: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Trip", tripSchema);
