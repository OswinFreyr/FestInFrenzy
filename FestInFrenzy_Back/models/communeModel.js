const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Commune = db.define('commune', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    postal_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
});

module.exports = { Commune }