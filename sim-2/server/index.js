const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const port = process.env.PORT || 3001;
const massive = require("massive");
const app = express();
const session = require("express-session");
const checkForSessions = require(`${__dirname}/middlewares/checkForSessions`);
const uc = require(`${__dirname}/controllers/users_controller`);

require("dotenv").config();

// app.use(express.static(`${__dirname}/../build`));
app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(checkForSessions);
massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

app.post("/api/login", uc.loginUser);

app.listen(port, () => console.log(`Listening from: ${port}.`));
