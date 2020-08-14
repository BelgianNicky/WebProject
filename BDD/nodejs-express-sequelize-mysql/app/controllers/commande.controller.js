const db = require("../models");
const Commande= db.commande;

//cree une commande
exports.createCommande = (req, res) => {
  const commande = {
    mode_payement: req.mode_payement,
    prix_tot: req.prix_tot, // peut etre delete
    //panier id ?
  };

  Commande.create(commande)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the commande"
      });
    });
};

//retourne la commande dont l'id' est passé en param
exports.findOneCommande = (req, res) => {
  const id = req.params.id;

  Commande.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving commande with id=" + id
      });
    });
};
