module.exports = (app) => {
  var express = require("express");
  var router = express.Router();

  var ProduitController = require("../controllers/produit.controller");

  router.get("/:id", ProduitController.findOneProduit);
  router.post("/", ProduitController.createProduit);
  router.put("/:id", ProduitController.updateProduit);
  router.delete("/:id", ProduitController.deleteProduit);
  //router.get("/", ProduitController.findAllProduit);
  router.get("/", ProduitController.findAllProduitType);
  app.use("/api/produit", router);
};
