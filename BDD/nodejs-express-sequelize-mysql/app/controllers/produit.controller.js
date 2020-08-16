const db = require("../models");
const Produit= db.produit;

//cree une produit
exports.createProduit = (req, res) => {
  const produit = {
    prix: req.body.prix,
    stock: req.body.stock,
    nom: req.body.nom,
    description: req.body.description,
    typeId: req.body.typeId
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

  Produit.findByPk(id)
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
//met a jour un Produit
exports.updateProduit = (req, res) => {
  const id = req.params.id;

  Produit.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produit was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Produit with id=${id}. Maybe Produit was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Produit with id=" + id
      });
    });
};
//supprime un Produit en fonction de son id
exports.deleteProduit = (req, res) => {
  const id = req.params.id;

  Produit.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Produit was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Produit with id=${id}. Maybe Produit was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Produit with id=" + id
      });
    });
};
