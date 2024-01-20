// addReviewRoutes.js
const express = require("express");
const router = express.Router();
const { Enquiry } = require("../models/enquiryModel");

// Route to handle adding a new review
router.post("/enquiry", async (req, res) => {
  try {
    // Access the user's IP address from the request
    const userIpAddress = req.ip;

    // Add the user's IP address to the request body before creating the review
    const reviewData = { ...req.body, ipaddress: userIpAddress };

    // Create a new review with the updated data
    const newReview = await Enquiry.create(reviewData);

    // Respond with the created review
    res.json(newReview);
  } catch (error) {
    console.error("Error in Enquiry:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
