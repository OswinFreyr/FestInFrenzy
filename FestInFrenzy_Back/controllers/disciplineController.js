const disciplineService = require('../services/DisciplineService');

async function createDiscipline(req, res) {
    try {
        const discipline = await disciplineService.createDiscipline(req.body);
        res.json(discipline);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function getAllDiscipline(req, res) {
    try{
        const { nom, } = req.query;
        const discipline = await disciplineService.getAllDisciplines({ nom, });
        res.json(discipline);    
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getDisciplineById(req, res) {
    try {
        const id = req.params.id;
        const discipline = await disciplineService.getDisciplineById(id);
        if(discipline){
            res.json(discipline);
        }
        else {
            res.json({"error": `festival ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function addFestivalToDiscipline (req, res){
    try {
        const id = req.params.id;
        const disciplineFestival = await disciplineService.addFestivalToDiscipline(req.body,id);
        res.json(disciplineFestival);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};

module.exports = { createDiscipline, getAllDiscipline, getDisciplineById, addFestivalToDiscipline }