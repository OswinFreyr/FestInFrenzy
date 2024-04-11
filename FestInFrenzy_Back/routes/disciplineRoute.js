const express = require("express");
const router = express.Router()

const disciplineController = require("../controllers/disciplineController");

router.get("/", disciplineController.getAllDiscipline);
router.post("/", disciplineController.createDiscipline);

router.get("/:id", disciplineController.getDisciplineById);

module.exports = router;