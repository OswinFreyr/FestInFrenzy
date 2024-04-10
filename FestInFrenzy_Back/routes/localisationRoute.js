const express = require("express");
const router = express.Router()

const localisationController = require("../controllers/localisationController");

router.get("/", localisationController.getAllLocalisation);
router.post("/", localisationController.createLocalisation);
router.post("/addLocalisation", localisationController.createAllLocalisations);

router.get("/:id", localisationController.getLocalisationById);

module.exports = router;