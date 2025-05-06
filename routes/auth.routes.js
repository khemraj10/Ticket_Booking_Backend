const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/authMiddleware");
const { validationUser } = require("../validation/validator");
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const { username, password, email, mobileNumber } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userValidate = {
      username,
      password,
      email,
      mobileNumber,
      is_active,
    };
    const response = validationUser.validate(userValidate);
    if (response.error) {
      console.log(response.error.details);
    } else {
      console.log("Validated Data");
    }
    const user = new User({
      username,
      password: hashedPassword,
      email,
      ticket_status,
    });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

router.get("/me", verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userId });
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "authme faild" });
  }
});

module.exports = router;
