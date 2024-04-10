const express = require("express");
const router = express.Router()

const festivalController = require("../controllers/festivalController");

router.get("/", festivalController.getAllFestivals);
router.post("/", festivalController.createFestival);

router.get("/:id", festivalController.getFestivalById);

router.post("/addFestivals", festivalController.createAllFestivals);

module.exports = router;