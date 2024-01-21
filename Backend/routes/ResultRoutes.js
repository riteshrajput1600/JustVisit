const express = require('express');
const router = express.Router();
const connection = require('../models/categoryModel');

router.get('/result/:scid', (req, res) => {
  const { scid } = req.params;
//   const query = `SELECT * FROM listing WHERE scid=${scid} and status=1 and city=3 ORDER BY cname`;
  const query = `SELECT *
  FROM sublistcat
  RIGHT JOIN listing ON listing.id = sublistcat.lid
  WHERE sublistcat.scid = ${scid} AND sublistcat.city = 3 and listing.status=1
  ORDER BY sublistcat.priority asc`;

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
