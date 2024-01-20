const express = require('express');
const router = express.Router();
const connection = require('../models/categoryModel');

router.get('/listing/:cid', (req, res) => {
  const { cid } = req.params;
  const query = `SELECT * FROM listing WHERE cid=${cid} and status=1 and city=3 ORDER BY cname`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
