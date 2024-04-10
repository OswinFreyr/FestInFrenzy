
const fs = require('fs');
const { createAllFestivals } = require('../services/festivalService');
const { createAllMois } = require('../services/moisService');
const { createAllRegions } = require('../services/RegionService');
const { createAllCommunes } = require('../services/CommuneService');
const { createAllDisciplines } = require('../services/DisciplineService');
const { createAllEnvergures } = require('../services/EnvergureService');
const { createAllLocalisations } = require('../services/localisationService');


async function runInit() {
    const festivalsData = fs.readFileSync('./data/CleanedFestivalV9.json', 'utf8');
    const festivals = JSON.parse(festivalsData);
    const regionsData = fs.readFileSync('./data/Regions.json', 'utf8');
    const regions = JSON.parse(regionsData);
    const communesData = fs.readFileSync('./data/Communes.json', 'utf8');
    const communes = JSON.parse(communesData);
    const disciplinesData = fs.readFileSync('./data/Disciplines.json', 'utf8');
    const disciplines = JSON.parse(disciplinesData);
    const enverguresData = fs.readFileSync('./data/ZoneEnvergureTerritoriale.json', 'utf8');
    const envergures = JSON.parse(enverguresData);
    const localisationsData = fs.readFileSync('./data/Geolocalisations.json', 'utf8');
    const localisations = JSON.parse(localisationsData);
    const moisData = fs.readFileSync('./data/Mois.json', 'utf8');
    const mois = JSON.parse(moisData);

    createAllRegions(regions);
    createAllCommunes(communes);
    createAllDisciplines(disciplines);
    createAllEnvergures(envergures);
    createAllLocalisations(localisations);
    createAllMois(mois);
    createAllFestivals(festivals);


}

module.exports = { runInit }