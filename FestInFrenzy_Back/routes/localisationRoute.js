const express = require("express");
const router = express.Router()

const localisationController = require("../controllers/localisationController");

router.get("/", localisationController.getAllLocalisation);
router.post("/", localisationController.createLocalisation);

router.get("/:id", localisationController.getLocalisationById);

module.exports = router;