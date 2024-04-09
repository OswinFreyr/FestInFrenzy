const { Festival, Region, Commune, Discipline, Envergure, Localisation, Mois } = require('../models/associations.js');

async function createFestival(festival) {
    return await Festival.create(festival);
}

async function getAllFestivals(criterias = {}) {
    const where = {};
    if (criterias.identifiant) {
        where.identifiant = criterias.identifiant;
    }
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    if (criterias.site_internet) {
        where.site_internet = criterias.site_internet;
    }
    if (criterias.e_mail) {
        where.e_mail = criterias.e_mail;
    }
    if (criterias.sous_categorie) {
        where.sous_categorie = criterias.sous_categorie;
    }
    const festivals = await Festival.findAll({
        where,
        include: {
            model: Region,
            model: Commune,
            model: Discipline,
            model: Envergure,
            model: Localisation,
            model: Mois,
        }
    });
    if (festivals) {
        return festivals;
    }
    else {
        return null;
    }
}

async function getFestivalById(id) {
    const festival = await Festival.findByPk(id, {
        include: {
            model: Region,
            model: Commune,
            model: Discipline,
            model: Envergure,
            model: Localisation,
            model: Mois,
        }
    });
    if (festival) {
        return festival.toJSON();
    }
    else {
        return null;
    }
}

async function addRegionToFestival(idRegion, festivalId) {
    const festival = await Festival.findByPk(festivalId);
    const isRegion = await Region.findByPk(idRegion)
    if (isRegion) {
        // verifier si Festival et Region deja associés
        const isRegionFestival = await Festival.findAll({ where: { id: festivalId }, include: { model: Region, where: { id: idRegion } } });
        if (isRegionFestival.lenght > 0) {
            return null;
        }
        else {
            return festival.addRegion(idRegion);
        }
    }
}

async function addCommuneToFestival(idCommune, festivalId) {
    const festival = await Festival.findByPk(festivalId);
    const isCommune = await Commune.findByPk(idCommune)
    if (isCommune) {
        // verifier si Festival et Commune deja associés
        const isCommuneFestival = await Festival.findAll({ where: { id: festivalId }, include: { model: Commune, where: { id: idCommune } } });
        if (isCommuneFestival.lenght > 0) {
            return null;
        }
        else {
            return festival.addCommune(idCommune);
        }
    }
}

async function addDisciplineToFestival(idDiscipline, festivalId) {
    const festival = await Festival.findByPk(festivalId);
    const isDiscipline = await Discipline.findByPk(idDiscipline)
    if (isDiscipline) {
        // verifier si Festival et Discipline deja associés
        const isDisciplineFestival = await Festival.findAll({ where: { id: festivalId }, include: { model: Discipline, where: { id: idDiscipline } } });
        if (isDisciplineFestival.lenght > 0) {
            return null;
        }
        else {
            return festival.addDiscipline(idDiscipline);
        }
    }
}

async function addEnvergureToFestival(idEnvergure, festivalId) {
    const festival = await Festival.findByPk(festivalId);
    const isEnvergure = await Envergure.findByPk(idEnvergure)
    if (isEnvergure) {
        // verifier si Festival et Envergure deja associés
        const isEnvergureFestival = await Festival.findAll({ where: { id: festivalId }, include: { model: Envergure, where: { id: idEnvergure } } });
        if (isEnvergureFestival.lenght > 0) {
            return null;
        }
        else {
            return festival.addEnvergure(idEnvergure);
        }
    }
}

async function addLocalisationToFestival(idLocalisation, festivalId) {
    const festival = await Festival.findByPk(festivalId);
    const isLocalisation = await Localisation.findByPk(idLocalisation)
    if (isLocalisation) {
        // verifier si Festival et Localisation deja associés
        const isLocalisationFestival = await Festival.findAll({ where: { id: festivalId }, include: { model: Localisation, where: { id: idLocalisation } } });
        if (isLocalisationFestival.lenght > 0) {
            return null;
        }
        else {
            return festival.addLocalisation(idLocalisation);
        }
    }
}

async function addMoisToFestival(idMois, festivalId) {
    const festival = await Festival.findByPk(festivalId);
    const tabIdMois = idMois.ids
    tabIdMois.forEach(async moisId => {
        const isMois = await Mois.findByPk(moisId)
        if (isMois) {
            // verifier si festival et Mois deja associés
            const isFestivalMois = await Festival.findAll({ where: { id: festivalId }, include: { model: Mois, where: { id: moisId } } });
            if (isFestivalMois.lenght > 0) {
                return null;
            }
            else {
                return festival.addMois(moisId);
            }
        }
    })
}

async function updateFestival(id) {

}

async function deleteFestival(id) {

}

async function createAllFestivals(festivals) {
    try {

        festivals.forEach(async festivalData => {
            const festival = await Festival.create({
                identifiant: festivalData.identifiant,
                nom: festivalData.nom_du_festival,
                site_internet: festivalData.site_internet_du_festival,
                e_mail: festivalData.adresse_e_mail,
                sous_categorie: festivalData.sous_categorie,
            });

            const region = await Region.findOrCreate({ where: { nom: festivalData.region_principale_de_deroulement } });
            await festival.addRegion(region[0]);

            const commune = await Commune.findOrCreate({ where: { nom: festivalData.commune_principale_de_deroulement } });
            await festival.addCommune(commune[0]);

            const discipline = await Discipline.findOrCreate({ where: { nom: festivalData.discipline_dominante } });
            await festival.addDiscipline(discipline[0]);

            const envergure = await Envergure.findOrCreate({ where: { nom: festivalData.envergure_territoriale } });
            await festival.addEnvergure(envergure[0]);

            const localisation = await Localisation.findOrCreate({ where: { geocodage_xy: festivalData.geocodage_xy } });
            await festival.addLocalisation(localisation[0]);

            for (const moisData of festivalData.periode) {
                const mois = await Mois.findOrCreate({ where: { nom: moisData } });
                await festival.addMois(mois[0]);
            }
            
        });

        console.log('Tous les festivals ont été créés avec succès.');
    } catch (err) {
        console.error('Erreur lors de la création des festivals :', err);
    }
}

module.exports = { createFestival, getAllFestivals, getFestivalById, addRegionToFestival, addCommuneToFestival, addDisciplineToFestival, addEnvergureToFestival, addLocalisationToFestival, addMoisToFestival, updateFestival, deleteFestival, createAllFestivals }