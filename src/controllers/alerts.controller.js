const Alert = require("../models/Alert");

exports.createAlert = async (req, res) => {
  const alert = await Alert.create(req.body);
  res.status(201).json(alert);
};

exports.getAlerts = async (req, res) => {
  const alerts = await Alert.find();
  res.json(alerts);
};

exports.deleteAlert = async (req, res) => {
  await Alert.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
