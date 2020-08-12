/* const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});*/
const db = require("./app/models");
const controller = require("./app/controllers/users.controller");

const run = async () => {
  const users1 = await controller.createUsers(1,1, {
    username: "mathiaslaclasse",
    password: "yololasticot",
    email: "mat@yopmail.com",
    full_name: "mathias gassmann",
    created_at: null,
    adresse:"rue de la chaise 4 "
  });
};
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
