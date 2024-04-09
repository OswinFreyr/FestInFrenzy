const { Festival } = require('../models/associations.js');
const { Region } = require('../models/associations.js');

async function createRegion(region) {
    return await Region.create(region);
}

async function getAllRegions(criterias = {}) {
    const where = {}
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    const regions = await Region.findAll({
        where,
        include: {
            model: Festival,
        }
    });
    if(regions) {
        return regions;
    }
    else {
        return null;
    }
}

async function getRegionById(id) {
    const region = await Region.findByPk(id, {
        include: {
            model: Festival,
        }
    });
    if (region) {
        return region.toJSON();
    }
    else {
        return null;
    }
}

async function addFestivalToRegion(idFestivals, regionId) {
    const region = await Region.findByPk(regionId);
    const tabIdFestivals = idFestivals.ids
    tabIdFestivals.forEach(async festivalId => {
        const isFestival = await Festival.findByPk(festivalId)
        if (isFestival) {
            // verifier si festival et region deja associés
            const isRegionFestival = await Region.findAll({ where: { id: regionId } , include: { model: Festival, where: { id: festivalId } } });
            if (isRegionFestival.lenght > 0) {
                return null;
            }
            else {
                return region.addFestival(festivalId);
            }
        }
    })
}

async function updateRegion(id) {

}

async function deleteRegion(id) {

}

module.exports = { createRegion, getAllRegions, getRegionById }