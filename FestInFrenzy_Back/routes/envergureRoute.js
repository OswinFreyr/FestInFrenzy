const express = require("express");
const router = express.Router()

const envergureController = require("../controllers/envergureController");

router.get("/", envergureController.getAllEnvergure);
router.post("/", envergureController.createEnvergure);
router.post("/addEnvergure", envergureController.createAllEnvergures);

router.get("/:id", envergureController.getEnvergureById);

module.exports = router;