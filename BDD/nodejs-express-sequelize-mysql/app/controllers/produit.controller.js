const db = require("../models");
const Produit= db.produit;

//cree une produit
exports.createProduit = (req, res) => {
  const produit = {
    prix: req.prix,
    stock: req.stock,
    nom: req.nom,
    description: req.description,
    typeId: req.typeId
  };

  Produit.create(produit)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the produit"
      });
    });
};

//retourne un produit en fonction de son id
exports.findOneProduit = (req, res) => {
  const id = req.params.id;

  Panier.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving produit with id=" + id
      });
    });
};

//retourne tous les produits
exports.findAllProduit = (req, res) => {
  Produit.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving produits."
      });
    });
};
