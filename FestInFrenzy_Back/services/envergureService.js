const { Festival } = require('../models/associations.js');
const { Envergure } = require('../models/associations.js');

async function createEnvergure(envergure) {
    return await Envergure.create(envergure);
}

async function getAllEnvergures(criterias = {}) {
    const where = {}
    if (criterias.emplacement) {
        where.emplacement = criterias.emplacement;
    }
    const envergures = await Envergure.findAll({
        where,
        include: {
            model: Festival,
        }
    });
    if(envergures) {
        return envergures;
    }
    else {
        return null;
    }
}

async function getEnvergureById(id) {
    const envergure = await Envergure.findByPk(id, {
        include: {
            model: Festival,
        }
    });
    if (envergure) {
        return envergure.toJSON();
    }
    else {
        return null;
    }
}

async function addFestivalToEnvergure(idFestivals, envergureId) {
    const envergure = await Envergure.findByPk(envergureId);
    const tabIdFestivals = idFestivals.ids
    tabIdFestivals.forEach(async festivalId => {
        const isFestival = await Festival.findByPk(festivalId)
        if (isFestival) {
            // verifier si festival et envergure deja associés
            const isEnvergureFestival = await Envergure.findAll({ where: { id: envergureId } , include: { model: Festival, where: { id: festivalId } } });
            if (isEnvergureFestival.lenght > 0) {
                return null;
            }
            else {
                return envergure.addFestival(festivalId);
            }
        }
    })
}

async function updateEnvergure(id) {

}

async function deleteEnvergure(id) {

}

module.exports = { createEnvergure, getAllEnvergures, getEnvergureById }