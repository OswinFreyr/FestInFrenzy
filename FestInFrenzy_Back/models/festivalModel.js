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
        allowNull: true,
    },
    e_mail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sous_categorie: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
});

module.exports = { Festival };