const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    coin: { type: String, required: true }, // btc, eth
    targetPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["ACTIVE", "TRIGGERED"],
      default: "ACTIVE"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Alert", alertSchema);
