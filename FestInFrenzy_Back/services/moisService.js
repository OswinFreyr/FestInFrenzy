const { Festival } = require('../models/associations.js');
const { Mois } = require('../models/associations.js');

async function createMois(mois) {
    return await Mois.create(mois);
}

async function getAllMois(criterias = {}) {
    const where = {}
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    const Mois = await Mois.findAll({
        where,
        include: {
            model: Festival,
        }
    });
    if(Mois) {
        return Mois;
    }
    else {
        return null;
    }
}

async function getMoisById(id) {
    const mois = await Mois.findByPk(id, {
        include: {
            model: Festival,
        }
    });
    if (mois) {
        return mois.toJSON();
    }
    else {
        return null;
    }
}

async function addFestivalToMois(idFestivals, MoisId) {
    const mois = await Mois.findByPk(MoisId);
    const tabIdFestivals = idFestivals.ids
    tabIdFestivals.forEach(async festivalId => {
        const isFestival = await Festival.findByPk(festivalId)
        if (isFestival) {
            // verifier si festival et Mois deja associés
            const isMoisFestival = await Mois.findAll({ where: { id: MoisId } , include: { model: Festival, where: { id: festivalId } } });
            if (isMoisFestival.lenght > 0) {
                return null;
            }
            else {
                return mois.addFestival(festivalId);
            }
        }
    })
}

async function updateMois(id) {

}

async function deleteMois(id) {

}

async function createAllMois(mois) {
    mois.forEach(async mois_sing=> {
        return await moiscreate(mois_sing);
    })
}

module.exports = { createMois, getAllMois, getMoisById, addFestivalToMois, createAllMois }