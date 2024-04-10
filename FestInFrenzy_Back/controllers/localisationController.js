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
        const { latitude, longitude, } = req.query;
        const localisation = await localisationService.getAllLocalisations({ latitude, longitude, });
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
            res.json({"error": `localisation ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

/*
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
*/

module.exports = { createLocalisation, getAllLocalisation, getLocalisationById, }