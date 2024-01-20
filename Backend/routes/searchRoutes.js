const express = require("express");
const bodyParser = require("body-parser");
const searchModel = require("../models/searchModel");

const router = express.Router();
router.use(bodyParser.json());

router.post("/search", (req, res) => {
  const { city, query } = req.body;

  searchModel.searchListings(city, query, (err, results) => {
    if (err) {
      console.error("Error in searchListings:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

router.post("/city-suggestions", (req, res) => {
  const { partialInput } = req.body;

  searchModel.getCitySuggestions(partialInput, (err, suggestions) => {
    if (err) {
      console.error("Error getting city suggestions:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ suggestions });
    }
  });
});

router.post("/query-suggestions", (req, res) => {
  const { city, partialInput } = req.body;

  searchModel.getQuerySuggestions(city, partialInput, (err, suggestions) => {
    if (err) {
      console.error("Error getting query suggestions:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json({ suggestions });
    }
  });
});

module.exports = router;
