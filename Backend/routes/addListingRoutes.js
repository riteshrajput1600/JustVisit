// routes/addListingRoutes.js
const express = require("express");
const router = express.Router();
const { AddListing } = require("../models/addListingModel");

// Route to handle adding a new listing
router.post("/addlisting", async (req, res) => {
  try {
    // Access the user's IP address from the request
    const userIpAddress = req.ip;

    // Add the user's IP address to the request body before creating the listing
    const listingData = { ...req.body, ip_address: userIpAddress };

    // Create a new listing with the updated data
    const newListing = await AddListing.create(listingData);

    // Respond with the created listing
    res.json(newListing);
  } catch (error) {
    console.error("Error adding listing:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
