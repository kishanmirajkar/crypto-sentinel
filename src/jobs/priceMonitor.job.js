const cron = require("node-cron");
const Alert = require("../models/Alert");
const { getPrices } = require("../services/price.service");

cron.schedule("*/1 * * * *", async () => {
  const alerts = await Alert.find({ status: "ACTIVE" });
  if (!alerts.length) return;

  const coins = [...new Set(alerts.map(a => a.coin))];
  const prices = await getPrices(coins);

  for (const alert of alerts) {
    const currentPrice = prices[alert.coin]?.usd;
    if (currentPrice >= alert.targetPrice) {
      alert.status = "TRIGGERED";
      await alert.save();

      console.log(
        `🚨 ALERT: ${alert.coin.toUpperCase()} hit $${currentPrice}`
      );
    }
  }
});
