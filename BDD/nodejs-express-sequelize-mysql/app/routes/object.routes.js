module.exports = (app) => {
  var express = require("express");
  var router = express.Router();

  var ObjetController = require("../controllers/Objet.controller");

  router.get("/:id", ObjetController.findOneObjet);
  router.post("/", ObjetController.createObjet);
  router.put("/:id", ObjetController.updateObjet);
  router.delete("/:id", ObjetController.deleteObjet);

  app.use("/api/objet", router);
};
