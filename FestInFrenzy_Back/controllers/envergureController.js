const envergureService = require('../services/EnvergureService');

async function createEnvergure(req, res) {
    try {
        const envergure = await envergureService.createEnvergure(req.body);
        res.json(envergure);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function getAllEnvergure(req, res) {
    try{
        const { zone, } = req.query;
        const envergure = await envergureService.getAllEnvergures({ zone, });
        res.json(envergure);    
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getEnvergureById(req, res) {
    try {
        const id = req.params.id;
        const envergure = await envergureService.getEnvergureById(id);
        if(envergure){
            res.json(envergure);
        }
        else {
            res.json({"error": `envergure ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

/*
async function addFestivalToEnvergure (req, res){
    try {
        const id = req.params.id;
        const envergureFestival = await envergureService.addFestivalToEnvergure(req.body,id);
        res.json(envergureFestival);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};
*/

module.exports = { createEnvergure, getAllEnvergure, getEnvergureById, }