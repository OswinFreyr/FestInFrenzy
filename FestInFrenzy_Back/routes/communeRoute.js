const express = require("express");
const router = express.Router()

const communeController = require("../controllers/communeController");

router.get("/", communeController.getAllCommune);
router.post("/", communeController.createCommune);

router.get("/:id", communeController.getCommuneById);

module.exports = router;