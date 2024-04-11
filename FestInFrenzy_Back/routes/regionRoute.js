const express = require("express");
const router = express.Router()

const regionController = require("../controllers/regionController");

router.get("/", regionController.getAllRegion);
router.post("/", regionController.createRegion);

router.get("/:id", regionController.getRegionById);

module.exports = router;