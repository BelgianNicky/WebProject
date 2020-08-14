const db = require("../models");
const OBjet= db.objet;

//cree une commande
exports.createObjet = (req, res) => {
  const objet = {
    etat: req.etat,
    //produit id ?
  };

  Objet.create(objet)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the objet"
      });
    });
};

//retourne l'objet dont l'id' est passé en param
exports.findOneObjet = (req, res) => {
  const id = req.params.id;

  Objet.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving objet with id=" + id
      });
    });
};
