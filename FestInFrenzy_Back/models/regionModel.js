const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Region = db.define('region', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
});

module.exports = { Region }