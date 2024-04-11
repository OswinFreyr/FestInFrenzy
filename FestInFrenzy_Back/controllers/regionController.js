const regionService = require('../services/RegionService');

async function createRegion(req, res) {
    try {
        const region = await regionService.createRegion(req.body);
        res.json(region);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
}

async function getAllRegion(req, res) {
    try{
        const { nom, } = req.query;
        const region = await regionService.getAllRegions({ nom, });
        res.json(region);    
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

async function getRegionById(req, res) {
    try {
        const id = req.params.id;
        const region = await regionService.getRegionById(id);
        if(region){
            res.json(region);
        }
        else {
            res.json({"error": `region ${id} not found :(`});
        }
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
};

/*
async function addFestivalToRegion (req, res){
    try {
        const id = req.params.id;
        const regionFestival = await regionService.addFestivalToRegion(req.body,id);
        res.json(regionFestival);
    }
    catch (err) {
        res.status(500).json({message: err.message})
    }
};
*/

module.exports = { createRegion, getAllRegion, getRegionById }