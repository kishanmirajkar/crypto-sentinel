const cron = require("node-cron");
const axios = require("axios");
const Alert = require("../models/alert.model");

// Run every minute
cron.schedule("* * * * *", async () => {
  try {
    console.log("💡 Checking alerts...");

    // 1️⃣ Fetch all alerts from MongoDB
    const alerts = await Alert.find();

    if (!alerts.length) {
      console.log("No alerts to monitor yet.");
      return;
    }

    // 2️⃣ Loop through each alert
    for (let alert of alerts) {
      // Fetch live price from Binance API
      const res = await axios.get(
        `https://api.binance.com/api/v3/ticker/price?symbol=${alert.symbol}`
      );

      const currentPrice = parseFloat(res.data.price);

      // 3️⃣ Check condition
      if (
        (alert.condition === "above" && currentPrice > alert.threshold) ||
        (alert.condition === "below" && currentPrice < alert.threshold)
      ) {
        console.log(
          `⚡ ALERT TRIGGERED: ${alert.symbol} is ${currentPrice}, condition: ${alert.condition} ${alert.threshold}`
        );

        // Optional: send notification or email here
      } else {
        console.log(
          `${alert.symbol}: ${currentPrice} ✅ not triggered (condition: ${alert.condition} ${alert.threshold})`
        );
      }
    }
  } catch (err) {
    console.error("Price monitor error:", err.message);
  }
});
