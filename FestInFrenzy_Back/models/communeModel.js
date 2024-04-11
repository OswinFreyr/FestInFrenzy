const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Commune = db.define('commune', {
    nom: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    code_postal: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
});

module.exports = { Commune }