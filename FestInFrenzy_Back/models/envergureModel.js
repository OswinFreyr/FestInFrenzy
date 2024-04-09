const { db } = require("./db");
const { DataTypes } = require("sequelize")

const Envergure = db.define('envergure', {
    zone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
});

module.exports = { Envergure }