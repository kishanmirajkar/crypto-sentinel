require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Connect MongoDB
connectDB();

// Start the cron job
require("./jobs/priceMonitor.job");

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
