const express = require("express");
const router = express.Router();
const connection = require("../models/categoryModel");

router.get("/categories", (req, res) => {
  const query = "SELECT * FROM category";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
