const { Festival } = require('./festivalModel');
const { Region } = require('./regionModel');
const { Commune } = require('./communeModel')
const { Discipline } = require('./disciplineModel');
const { Envergure } = require('./envergureModel');
const { Localisation } = require('./localisationModel');
const { Mois } = require('./moisModel');

Region.hasMany(Festival);
Festival.belongsTo(Region);

Commune.hasMany(Festival);
Festival.belongsTo(Commune);

Discipline.hasMany(Festival);
Festival.belongsTo(Discipline);

Envergure.hasMany(Festival);
Festival.belongsTo(Envergure);

Localisation.hasMany(Festival);
Festival.belongsTo(Localisation);

Mois.belongsToMany(Festival, { through: "periode" });
Festival.belongsToMany(Mois, { through: "periode" });

module.exports = { Festival, Region, Commune, Discipline, Envergure, Localisation, Mois };
