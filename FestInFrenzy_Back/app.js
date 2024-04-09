const express = require("express");

const { db } = require("./models/db");

const festivalRouter = require("./routes/festivalRoutes");

const app = express();
const PORT = 2000;

app.use(express.json({limit: "2mb"}));

app.use("/api/v1/festivals", festivalRouter);

db.sync()
    .then(async () => {
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        })
    });