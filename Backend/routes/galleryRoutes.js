const express = require("express");
const router = express.Router();
const connection = require("../models/categoryModel");

router.get("/gallery/:id", (req, res) => {
  const { id } = req.params;

  // Using parameterized query to prevent SQL injection
  const query = `
    SELECT *
    FROM listing
    LEFT JOIN photo ON listing.id = photo.lid
    LEFT JOIN company_video ON listing.id = company_video.lid
    LEFT JOIN company_faq ON listing.id = company_faq.lid
    WHERE listing.id = ?
    `;

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
