const moisService = require('../services/moisService');

async function createMois(req, res) {
    try {
        const mois = await moisService.createMois(req.body);
        res.json(mois);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function getAllMois(req, res) {
    try{
        const { nom, } = req.query;
        const mois = await moisService.getAllMois({ nom, });
        res.json(mois);    
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getMoisById(req, res) {
    try {
        const id = req.params.id;
        const mois = await moisService.getMoisById(id);
        if(mois){
            res.json(mois);
        }
        else {
            res.json({"error": `mois ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function addFestivalToMois (req, res){
    try {
        const id = req.params.id;
        const moisFestival = await moisService.addFestivalToMois(req.body,id);
        res.json(moisFestival);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};

async function createAllMois(req, res) {
    try {
        const mois = await moisService.createAllMois(req.body);
        res.json(mois);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};

module.exports = { createMois, getAllMois, getMoisById, addFestivalToMois, createAllMois }