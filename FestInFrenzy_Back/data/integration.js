
const fs = require('fs');
const { createAllFestivals } = require('../services/festivalService');
const { createAllMois } = require('../services/moisService');
const { createAllRegions } = require('../services/RegionService');
const { createAllCommunes } = require('../services/CommuneService');
const { createAllDisciplines } = require('../services/DisciplineService');
const { createAllEnvergures } = require('../services/EnvergureService');
const { createAllLocalisations } = require('../services/localisationService');
const { env } = require('process');


async function runInit() {
    const festivalsData = fs.readFileSync('./data/CleanedFestivalV9.json', 'utf8');
    const festivals = JSON.parse(festivalsData);
    let regionsData = fs.readFileSync('./data/Regions.json', 'utf8');
    let regions = JSON.parse(regionsData);
    let communesData = fs.readFileSync('./data/Communes.json', 'utf8');
    let communes = JSON.parse(communesData);
    let disciplinesData = fs.readFileSync('./data/Disciplines.json', 'utf8');
    let disciplines = JSON.parse(disciplinesData);
    let enverguresData = fs.readFileSync('./data/ZoneEnvergureTerritoriale.json', 'utf8');
    let envergures = JSON.parse(enverguresData);
    let localisationsData = fs.readFileSync('./data/Geolocalisations.json', 'utf8');
    let localisations = JSON.parse(localisationsData);
    let moisData = fs.readFileSync('./data/Mois.json', 'utf8');
    let mois = JSON.parse(moisData);

    regions = await createAllRegions(regions);
    regionsData = null;
    communes = await createAllCommunes(communes);
    communesData = null;
    disciplines = await createAllDisciplines(disciplines);
    disciplinesData = null;
    envergures = await createAllEnvergures(envergures);
    enverguresData = null;
    localisations = await createAllLocalisations(localisations);
    localisationsData = null;
    mois = await createAllMois(mois);
    moisData = null;
    createAllFestivals(festivals, regions, communes, disciplines, envergures, localisations, mois);


}

module.exports = { runInit }