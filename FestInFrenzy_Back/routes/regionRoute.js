const express = require("express");
const router = express.Router()

const regionController = require("../controllers/regionController");

router.get("/", regionController.getAllRegion);
router.post("/", regionController.createRegion);
router.post("/addRegion", regionController.createAllRegions);

router.get("/:id", regionController.getRegionById);

module.exports = router;