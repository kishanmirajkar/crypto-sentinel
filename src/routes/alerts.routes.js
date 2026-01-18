const express = require("express");
const router = express.Router();

// POST /alerts
router.post("/", (req, res) => {
  console.log("Request body:", req.body); // DEBUG
  res.status(201).json({
    success: true,
    message: "Alert created successfully",
    data: req.body
  });
});

// GET /alerts (optional test)
router.get("/", (req, res) => {
  res.json({
    success: true,
    data: []
  });
});

module.exports = router;
