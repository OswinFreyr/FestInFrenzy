const express = require("express");
const router = express.Router()

const moisController = require("../controllers/moisController");

router.get("/", moisController.getAllMois);
router.post("/", moisController.createMois);

router.get("/:id", moisController.getMoisById);

module.exports = router;