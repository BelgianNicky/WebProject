const db = require("../models");
const Habitation= db.habitation;
const Op = db.Sequelize.Op;

//retourne l'habitation dont la ville est passé en query
exports.findOneHabitation = (req, res) => {
  const ville = req.query.ville;
  var condition = ville ? { ville: { [Op.like]: `%${ville}%` } } : null;

  Habitation.findAll({ where: condition })
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
//cree une habitation avec les valeurs recuperees dans le body
exports.createHabitation = (req, res) => {
  const habitation = {
    ville: req.body.ville,
    code_postal: req.body.code_postal
  };

  Habitation.create(habitation)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the habitation"
      });
    });
};
//met a jour les donnees d'une habitation recupere dans le body en fonction de son id
exports.updateHabitation = (req, res) => {
  const id = req.params.id;

  Habitation.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "habitation was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update habitation with id=${id}. Maybe habitation was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating habitation with id=" + id
      });
    });
};
//supprime une habitation en fonction de son id
exports.deleteHabitation = (req, res) => {
  const id = req.params.id;

  Habitation.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "habitation was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete habitation with id=${id}. Maybe habitation was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete habitation with id=" + id
      });
    });
};
