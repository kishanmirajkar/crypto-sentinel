const express = require("express");
const app = express();

app.use(express.json());

// root route
app.get("/", (req, res) => {
  res.status(200).send("Crypto Sentinel API is running 🚀");
});

// alerts routes
app.use("/alerts", require("./routes/alerts.routes"));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

module.exports = app;
