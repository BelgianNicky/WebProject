const express = require("express");
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

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/panier.routes")(app);
require("./app/routes/habitation.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/categorie.routes")(app);
require("./app/routes/type.routes")(app);
require("./app/routes/commande.routes")(app);
require("./app/routes/produit.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


/*const db = require("./app/models/index");
const controller = require("./app/controllers/panier.controller");

const run = async () => {
  const panier1 = await controller.createPanier()

  /*const users1 = await controller.createUsers(1,1, {
    username: "mathiaslaclasse",
    password: "yololasticot",
    email: "mat@yopmail.com",
    full_name: "mathias gassmann",
    adresse:"rue de la chaise 4 "
  });
};
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});*/
