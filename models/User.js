const { required } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  userRole: { type: String, required: true },
  is_active: { type: boolean, required: true },
});

module.exports = mongoose.model("User", userSchema);
