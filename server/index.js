const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authController = require('./authContoller');
require('dotenv');

const app = express();

app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
    })
);

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('connected to db')
});

// Auth Endpoints
app.post('/register', authController.register);
app.post('/login', authController.login);
app.post('/logout', authController.logout);

const PORT = 4020;
app.listen(PORT, () => console.log(`-=- PORT -=- ${PORT} -=- `));