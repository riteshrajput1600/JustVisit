const express = require("express");
const router = express.Router();
const connection = require("../models/categoryModel");

router.get("/subcategory/:id", (req, res) => {
  const { id } = req.params;

  // Using parameterized query to prevent SQL injection
  const query = `
  select * from sublistcat inner join subcategory ON subcategory.id = sublistcat.scid where lid=?
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
