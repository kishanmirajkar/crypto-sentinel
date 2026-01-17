const express = require("express");
const app = express();

app.use(express.json());
app.use("/alerts", require("./routes/alerts.routes"));

module.exports = app;
