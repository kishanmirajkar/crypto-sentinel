const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    symbol: { type: String, required: true },
    threshold: { type: Number, required: true },
    condition: { type: String, enum: ["above", "below"], required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Alert || mongoose.model("Alert", alertSchema);
