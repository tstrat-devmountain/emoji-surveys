const express = require("express");
const massive = require("massive");
const session = require("express-session");
const scheduleController = require("./controllers/scheduleController");
require("dotenv").config();
const app = express();

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Successfully Connected to Database");
});

app.use(express.json()); // body-parser
app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false
    })
);

//endpoints here
app.get("/api/schedule", scheduleController.getSchedule);

app.listen(SERVER_PORT || 4000, () =>
    console.log(`Server started, port: ${SERVER_PORT}`)
);
