const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Mois = db.define('mois', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
});

module.exports = { Mois }