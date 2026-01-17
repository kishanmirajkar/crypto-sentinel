const router = require("express").Router();
const controller = require("../controllers/alerts.controller");

router.post("/", controller.createAlert);
router.get("/", controller.getAlerts);
router.delete("/:id", controller.deleteAlert);

module.exports = router;
