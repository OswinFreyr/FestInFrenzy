const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Festival = db.define("festival", {
    identifiant: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    site_internet: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    e_mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sous_categorie: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    periode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
});

module.exports = { Festival };