const { Festival } = require('../models/associations.js');
const { Commune } = require('../models/associations.js');

async function createCommune(commune) {
    return await Commune.create(commune);
}

async function getAllCommunes(criterias = {}) {
    const where = {}
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    if (criterias.code_postal) {
        where.code_postal = criterias.code_postal;
    }
    const communes = await Commune.findAll({
        where,
        include: {
            model: Festival,
        }
    });
    if(communes) {
        return communes;
    }
    else {
        return null;
    }
}

async function getCommuneById(id) {
    const commune = await Commune.findByPk(id, {
        include: {
            model: Festival,
        }
    });
    if (commune) {
        return commune.toJSON();
    }
    else {
        return null;
    }
}

async function addFestivalToCommune(idFestivals, communeId) {
    const commune = await Commune.findByPk(communeId);
    const tabIdFestivals = idFestivals.ids
    tabIdFestivals.forEach(async festivalId => {
        const isFestival = await Festival.findByPk(festivalId)
        if (isFestival) {
            // verifier si festival et commune deja associés
            const isCommuneFestival = await Commune.findAll({ where: { id: communeId } , include: { model: Festival, where: { id: festivalId } } });
            if (isCommuneFestival.lenght > 0) {
                return null;
            }
            else {
                return commune.addFestival(festivalId);
            }
        }
    })
}

async function updateCommune(id) {

}

async function deleteCommune(id) {

}

async function createAllCommunes(communes) {
    communes.forEach(async commune => {
        return await Commune.create(commune);
    })
}

module.exports = { createCommune, getAllCommunes, getCommuneById }