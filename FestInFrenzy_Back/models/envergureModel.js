const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Envergure = db.define('envergure', {
    emplacement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
});

module.exports = { Envergure }