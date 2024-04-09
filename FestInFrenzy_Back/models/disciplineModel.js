const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Discipline = db.define('discipline', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
});

module.exports = { Discipline }