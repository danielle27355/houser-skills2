const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require("body-parser");
const controller = require('../server/controller.js')
require("dotenv").config();

const app = express();

const PORT = 4000;

const {SESSION_SECRET, CONNECTION_STRING} = process.env;

app.use(bodyParser.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('db connected');
})

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
}))


app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.postHouse);



app.listen(PORT, () => console.log(`listening on port ${PORT}`))