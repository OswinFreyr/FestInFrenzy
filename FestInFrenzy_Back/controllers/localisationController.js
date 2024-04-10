const localisationService = require('../services/localisationService');

async function createLocalisation(req, res) {
    try {
        const localisation = await localisationService.createLocalisation(req.body);
        res.json(localisation);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function getAllLocalisation(req, res) {
    try{
        const { nom, } = req.query;
        const localisation = await localisationService.getAllLocalisations({ nom, });
        res.json(localisation);    
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getLocalisationById(req, res) {
    try {
        const id = req.params.id;
        const localisation = await localisationService.getLocalisationById(id);
        if(localisation){
            res.json(localisation);
        }
        else {
            res.json({"error": `festival ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function addFestivalToLocalisation (req, res){
    try {
        const id = req.params.id;
        const localisationFestival = await localisationService.addFestivalToLocalisation(req.body,id);
        res.json(localisationFestival);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};

async function createAllLocalisations(req, res) {
    try {
        const localisations = await localisationService.createAllLocalisations(req.body);
        res.json(localisations);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};

module.exports = { createLocalisation, getAllLocalisation, getLocalisationById, addFestivalToLocalisation, createAllLocalisations }