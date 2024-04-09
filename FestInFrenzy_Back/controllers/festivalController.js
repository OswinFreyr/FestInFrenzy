const festivalService = require('../services/festivalService');

async function createFestival(req, res) {
    try {
        const festival = await festivalService.createFestival(req.body);
        res.json(festival);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function getAllFestivals(req, res) {
    try{
        const { identifiant, nom, site_internet, e_mail, sous_categorie } = req.query;
        const festivals = await festivalService.getAllFestivals({ nom, famille});
        res.json(festivals);    
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getFestivalById(req, res) {
    try {
        const id = req.params.id;
        const festival = await festivalService.getFestivalById(id);
        if(festival){
            res.json(festival);
        }
        else {
            res.json({"error": `festival ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function addRegionToFestival (req, res){
    try {
        const idFestival = req.params.idFestival;
        const idRegion = req.params.idRegion;
        const festivalRegion = await festivalService.addRegionToFestival(idRegion,idFestival);
        res.json(festivalRegion);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function addCommuneToFestival (req, res){
    try {
        const idFestival = req.params.idFestival;
        const idCommune = req.params.idCommune;
        const festivalCommune = await festivalService.addCommuneToFestival(idCommune,idFestival);
        res.json(festivalCommune);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function addDisciplineToFestival (req, res){
    try {
        const idFestival = req.params.idFestival;
        const idDiscipline = req.params.idDiscipline;
        const festivalDiscipline = await festivalService.addDisciplineToFestival(idDiscipline,idFestival);
        res.json(festivalDiscipline);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function addEnvergureToFestival (req, res){
    try {
        const idFestival = req.params.idFestival;
        const idEnvergure = req.params.idEnvergure;
        const festivalEnvergure = await festivalService.addEnvergureToFestival(idEnvergure,idFestival);
        res.json(festivalEnvergure);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function addLocalisationToFestival (req, res){
    try {
        const idFestival = req.params.idFestival;
        const idLocalisation = req.params.idLocalisation;
        const festivalLocalisation = await festivalService.addLocalisationToFestival(idLocalisation,idFestival);
        res.json(festivalLocalisation);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function createAllFestivals(req, res) {
    try {
        const festivals = await festivalService.createAllFestivals(req.body);
        res.json(festivals);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = { createFestival, getFestivalById, getAllFestivals, createAllFestivals };
