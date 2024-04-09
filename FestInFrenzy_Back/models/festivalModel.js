const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Festival = db.define("festival", {
    identifiant: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nom_du_festival: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    site_internet_du_festival: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adresse_e_mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discipline_dominante: {
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