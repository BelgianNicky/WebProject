const db = require("../models");
const Commande= db.commande;
const Op = db.Sequelize.Op;

//cree une commande
exports.createCommande = (req, res) => {
  const commande = {
    mode_payement: req.body.mode_payement,
    panierId: req.body.panierId
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
//met a jour une Commande
exports.updateCommande = (req, res) => {
  const id = req.params.id;

  Commande.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Commande was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Commande with id=${id}. Maybe Commande was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Commande with id=" + id
      });
    });
};
//supprime une Commande en fonction de son id
exports.deleteCommande = (req, res) => {
  const id = req.params.id;

  Commande.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Commande was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Commande with id=${id}. Maybe Commande was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Commande with id=" + id
      });
    });
};
//retourne les commandes dont l'id du panier est passé en query
exports.findAllCommandePan = (req, res) => {
  const panierId = req.query.panierId;
  var condition = panierId ? { panierId: { [Op.like]: `%${panierId}%` } } : null;

  Commande.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving habitation."
      });
    });
};
