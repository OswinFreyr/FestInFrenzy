const express = require("express");

const { db } = require("./models/db");

//ROUTES

const app = express();
const PORT = 2000;

app.use(express.json());

db.sync()
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        })
    });