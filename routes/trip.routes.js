const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/authMiddleware");
const Trip = require("../models/Trip");
require("dotenv").config();

router.post("/trips", verifyToken, async (req, res) => {
  try {
    const { tripName, city, date } = req.body;
    const tripDetails = new Trip({
      tripName,
      date: new Date(),
      city,
    });

    await tripDetails.save();
    res.status(201).json({ message: "Trip created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Creating trip failed" });
  }
});

module.exports = router;
