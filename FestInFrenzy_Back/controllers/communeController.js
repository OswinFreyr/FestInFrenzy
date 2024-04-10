const communeService = require('../services/CommuneService');

async function createCommune(req, res) {
    try {
        const commune = await communeService.createCommune(req.body);
        res.json(commune);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};

async function getAllCommune(req, res) {
    try{
        const { nom, } = req.query;
        const commune = await communeService.getAllCommunes({ nom, });
        res.json(commune);    
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getCommuneById(req, res) {
    try {
        const id = req.params.id;
        const commune = await communeService.getCommuneById(id);
        if(commune){
            res.json(commune);
        }
        else {
            res.json({"error": `commune ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

/*
async function addFestivalToCommune (req, res){
    try {
        const id = req.params.id;
        const communeFestival = await communeService.addFestivalToCommune(req.body,id);
        res.json(communeFestival);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};
*/

module.exports = { createCommune, getAllCommune, getCommuneById, }