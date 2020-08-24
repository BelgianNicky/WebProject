const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  //origin: "http://localhost:8081",
  origin: "http://logistick.be"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/panier.routes")(app);
require("./app/routes/habitation.routes")(app);
require("./app/routes/users.routes")(app);
require("./app/routes/categorie.routes")(app);
require("./app/routes/type.routes")(app);
require("./app/routes/commande.routes")(app);
require("./app/routes/produit.routes")(app);
require("./app/routes/pani_prod.routes")(app);

// set port, listen for requests
const port = 3000;
const server = app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

// DEPLOIEMENT DE LA BASE DE DONNEES AVEC LES PRODUITS PRESENTS DANS LE MAGASIN

/*const db = require("./app/models/index");
const dbData = require("./dataDb");

const run = async () => {
  dbData.launchDataDb();
};

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});*/
