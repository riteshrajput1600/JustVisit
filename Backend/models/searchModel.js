const connection = require("./categoryModel");

const searchListings = (city, query, callback) => {
  const sql = `
  SELECT distinctrow
  listing.id AS listing_id, 
  city.id AS city_id, 
  listing.*, 
  category.*, 
  subcategory.*, 
  city.*
FROM listing
INNER JOIN city ON listing.city = city.id
LEFT JOIN category ON listing.cid = category.id
LEFT JOIN subcategories ON listing.cid = subcategories.cid
LEFT JOIN subcategory ON subcategories.scid = subcategory.id
WHERE city.city LIKE ? AND (listing.cname LIKE ? OR category.category LIKE ? OR subcategory.subcategory LIKE ?)`;

  const params = [`%${city}%`, `%${query}%`, `%${query}%`, `%${query}%`];

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error("Error executing MySQL query:", err);
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const getCitySuggestions = (partialInput, callback) => {
  const sql = `
    SELECT DISTINCT city.city FROM city
    WHERE city.city LIKE ?
    LIMIT 5
  `;

  const params = [`%${partialInput}%`];

  connection.query(sql, params, (err, results) => {
    if (err) {
      console.error("Error executing MySQL query for city suggestions:", err);
      callback(err, null);
    } else {
      const suggestions = results.map((result) => result.city);
      callback(null, suggestions);
    }
  });
};

// In searchModel.js

// const getQuerySuggestions = (city, partialInput, callback) => {
//   const sql = `
//     SELECT DISTINCT listing.id, cname, mobileno FROM listing INNER JOIN city ON listing.city = city.id
//     WHERE city.city LIKE ? AND cname LIKE ?
//     LIMIT 5
//   `;

//   const params = [`%${city}%`, `%${partialInput}%`];

//   connection.query(sql, params, (err, results) => {
//     if (err) {
//       console.error("Error executing MySQL query for query suggestions:", err);
//       callback(err, null);
//     } else {
//       const suggestions = results.map((result) => ({
//         id: result.id,
//         cname: result.cname,
//         mobileno: result.mobileno,
//       }));
//       callback(null, suggestions);
//     }
//   });
// };


// In searchModel.js

const getQuerySuggestions = (city, partialInput, callback) => {
  const sql = `
    SELECT DISTINCT listing.id, cname, mobileno, 'product' as type FROM listing INNER JOIN city ON listing.city = city.id
    WHERE city.city LIKE ? AND cname LIKE ?
    LIMIT 5
  `;

  const params = [`%${city}%`, `%${partialInput}%`];

  connection.query(sql, params, (err, productResults) => {
    if (err) {
      console.error("Error executing MySQL query for product suggestions:", err);
      callback(err, null);
    } else {
      const productSuggestions = productResults.map((result) => ({
        id: result.id,
        cname: result.cname,
        mobileno: result.mobileno,
        type: result.type,
      }));

      const categorySql = `
        SELECT DISTINCT category.id, category.category as cname, '' as mobileno, 'category' as type FROM category
        WHERE category.category LIKE ?
        LIMIT 5
      `;

      connection.query(categorySql, [`%${partialInput}%`], (err, categoryResults) => {
        if (err) {
          console.error("Error executing MySQL query for category suggestions:", err);
          callback(err, null);
        } else {
          const categorySuggestions = categoryResults.map((result) => ({
            id: result.id,
            cname: result.cname,
            mobileno: result.mobileno,
            type: result.type,
          }));

          const suggestions = [...productSuggestions, ...categorySuggestions];
          callback(null, suggestions);
        }
      });
    }
  });
};


module.exports = {
  searchListings,
  getCitySuggestions,
  getQuerySuggestions,
};
