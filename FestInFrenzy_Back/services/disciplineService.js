const { Festival } = require('../models/associations.js');
const { Discipline } = require('../models/associations.js');

async function createDiscipline(discipline) {
    return await Discipline.create(discipline);
}

async function getAllDisciplines(criterias = {}) {
    const where = {}
    if (criterias.nom) {
        where.nom = criterias.nom;
    }
    const disciplines = await Discipline.findAll({
        where,
        include: {
            model: Festival,
        }
    });
    if(disciplines) {
        return disciplines;
    }
    else {
        return null;
    }
}

async function getDisciplineById(id) {
    const discipline = await Discipline.findByPk(id, {
        include: {
            model: Festival,
        }
    });
    if (discipline) {
        return discipline.toJSON();
    }
    else {
        return null;
    }
}

async function addFestivalToDiscipline(idFestivals, disciplineId) {
    const discipline = await Discipline.findByPk(disciplineId);
    const tabIdFestivals = idFestivals.ids
    tabIdFestivals.forEach(async festivalId => {
        const isFestival = await Festival.findByPk(festivalId)
        if (isFestival) {
            // verifier si festival et discipline deja associés
            const isDisciplineFestival = await Discipline.findAll({ where: { id: disciplineId } , include: { model: Festival, where: { id: festivalId } } });
            if (isDisciplineFestival.lenght > 0) {
                return null;
            }
            else {
                return discipline.addFestival(festivalId);
            }
        }
    })
}

async function updateDiscipline(id) {

}

async function deleteDiscipline(id) {

}

async function createAllDisciplines(disciplines) {
    const tabDisciplines = []
    disciplines.forEach(async discipline => {
        tabDisciplines.push(discipline)
    })
    disciplines = await Discipline.bulkCreate(tabDisciplines, {ignoreDuplicates: true, returning: true})
    const disciplineList = {}
    disciplines.forEach(discipline => {
        disciplineList[discipline.nom] = discipline.id
    })
    return disciplineList;
}

module.exports = { createDiscipline, getAllDisciplines, getDisciplineById, createAllDisciplines }