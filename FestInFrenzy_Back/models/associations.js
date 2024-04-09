const { Festival } = require('./festivalModel');
const { Region } = require('./regionModel');
const { Commune } = require('./communeModel')
const { Discipline } = require('./disciplineModel');
const { Envergure } = require('./envergureModel');
const { Localisation } = require('./localisationModel');

Region.hasMany(Festival);
Festival.belongsTo(Region);

Commune.hasMany(Festival);
Festival.belongsTo(Region);

Discipline.hasMany(Festival);
Festival.belongsTo(Region);

Envergure.hasMany(Festival);
Festival.belongsTo(Region);

Localisation.hasMany(Festival);
Festival.belongsTo(Region);

module.exports = { Festival, Region, Commune, Discipline, Envergure, Localisation };
