const express = require("express");
const router = express.Router();
const { User } = require("../models/registerModel");

router.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("Login Request Payload:", req.body);

    // Check if the user with the given email and password exists
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (user) {
      // User found, login successful
      res.json({
        status: "success",
        msg: "Login Successful",
        data: { email: user.email },
      });
    } else {
      // User not found, login failed
      res.status(401).json({ status: "error", msg: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", msg: "Internal Server Error" });
  }
});

module.exports = router;
