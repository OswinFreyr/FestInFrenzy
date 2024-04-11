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

async function getLimitedFestivals(criterias = {}, pageId, itemsPerPage) {
    const where = {};
    const offset = (pageId - 1) * itemsPerPage;
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
    if (criterias.offset) {
        offset = criterias.offset;
    }
    if (criterias.limit) {
        limit = criterias.limit;
    }
        const {count, rows} = await Festival.findAndCountAll({
            where,
            include: {
                model: Region,
                model: Commune,
                model: Discipline,
                model: Envergure,
                model: Localisation,
                model: Mois,
            },
            limit: itemsPerPage,
            offset,
        });
    return {
        festivals: rows,
        count: count,
        hasMore: count > offset + rows.length
    };
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

async function createAllFestivals(festivals, regions, communes, disciplines, envergures, localisations, mois) {
    try {

        const tabFestivals = [];
        // console.log(mois);
        festivals.forEach(async festivalData => {
            const festivalMoisIds = [];
            festivalData.periode_mois?.forEach(el => {
                festivalMoisIds.push(mois[el])
            });

            tabFestivals.push({
                identifiant: festivalData.identifiant,
                nom: festivalData.nom_du_festival,
                site_internet: festivalData.site_internet_du_festival,
                e_mail: festivalData.adresse_e_mail,
                sous_categorie: festivalData.sous_categorie,
                regionId: regions[festivalData.region_principale_de_deroulement],
                communeId: communes[festivalData.commune_principale_de_deroulement],
                disciplineId: disciplines[festivalData.discipline_dominante],
                envergureId: envergures[festivalData.envergure_territoriale],
                localisationId: localisations[festivalData.geocodage_xy?.lat + "; " + festivalData.geocodage_xy?.lon],
                mois: festivalMoisIds
            })
        });

        festivals = await Festival.bulkCreate(tabFestivals, {ignoreDuplicates: true })

        for (const festival of festivals) {
            let moisList = tabFestivals.filter(el => el.identifiant === festival.identifiant)[0].mois
            await festival.addMois(moisList)
            // console.log(moisList)
        }
        
        console.log('Tous les festivals ont été créés avec succès.');

    } catch (err) {
        console.error('Erreur lors de la création des festivals :', err);
    }
}

module.exports = { createFestival, getAllFestivals, getLimitedFestivals, getFestivalById, addRegionToFestival, addCommuneToFestival, addDisciplineToFestival, addEnvergureToFestival, addLocalisationToFestival, addMoisToFestival, updateFestival, deleteFestival, createAllFestivals }