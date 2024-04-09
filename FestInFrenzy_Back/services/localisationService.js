const { Festival } = require('../models/associations.js');
const { Localisation } = require('../models/associations.js');

async function createLocalisation(localisation) {
    return await Localisation.create(localisation);
}

async function getAllLocalisations(criterias = {}) {
    const where = {}
    if (criterias.latitude) {
        where.latitude = criterias.latitude;
    }
    if (criterias.longitude) {
        where.longitude = criterias.longitude;
    }
    const localisations = await Localisation.findAll({
        where,
        include: {
            model: Festival,
        }
    });
    if(localisations) {
        return localisations;
    }
    else {
        return null;
    }
}

async function getLocalisationById(id) {
    const localisation = await Localisation.findByPk(id, {
        include: {
            model: Festival,
        }
    });
    if (localisation) {
        return localisation.toJSON();
    }
    else {
        return null;
    }
}

async function addFestivalToLocalisation(idFestivals, localisationId) {
    const localisation = await Localisation.findByPk(localisationId);
    const tabIdFestivals = idFestivals.ids
    tabIdFestivals.forEach(async festivalId => {
        const isFestival = await Festival.findByPk(festivalId)
        if (isFestival) {
            // verifier si festival et Localisation deja associés
            const isLocalisationFestival = await Localisation.findAll({ where: { id: localisationId } , include: { model: Festival, where: { id: festivalId } } });
            if (isLocalisationFestival.lenght > 0) {
                return null;
            }
            else {
                return localisation.addFestival(festivalId);
            }
        }
    })
}

async function updateLocalisation(id) {

}

async function deleteLocalisation(id) {

}

module.exports = { createLocalisation, getAllLocalisations, getLocalisationById }