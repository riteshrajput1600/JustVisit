// addReviewRoutes.js
const express = require("express");
const router = express.Router();
const { AddReview } = require("../models/addReviewModel");

// Route to handle adding a new review
router.post("/addReview", async (req, res) => {
  try {
    // Access the user's IP address from the request
    const userIpAddress = req.ip;

    // Add the user's IP address to the request body before creating the review
    const reviewData = { ...req.body, ipaddress: userIpAddress };

    // Create a new review with the updated data
    const newReview = await AddReview.create(reviewData);

    // Respond with the created review
    res.json(newReview);
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
