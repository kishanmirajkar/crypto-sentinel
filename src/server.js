require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

connectDB();
require("./jobs/priceMonitor.job");

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
