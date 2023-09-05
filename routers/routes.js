const express = require("express");
const router = express.Router();
const LightController = require("../controller/LightController");

router.get("/lights", LightController.getAllLights);
router.post("/lights/toggle", LightController.toggleLight);

module.exports = router;
