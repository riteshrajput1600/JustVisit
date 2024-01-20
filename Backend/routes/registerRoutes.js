const express = require("express");
const router = express.Router();
const { User } = require("../models/registerModel");

router.post("/auth/register", async (req, res) => {
  try {
    const { name, email, password, age, address } = req.body;
    
    console.log('Request Payload:', req.body);

    const newUser = await User.create({
      name,
      email,
      password,
      age,
      address,
    });

    res.json({ status: "success", msg: "Registration Successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", msg: "Internal Server Error" });
  }
});

module.exports = router;
