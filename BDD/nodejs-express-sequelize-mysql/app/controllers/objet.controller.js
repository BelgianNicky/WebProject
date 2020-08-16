const db = require("../models");
const OBjet= db.objet;

//cree un objet
exports.createObjet = (req, res) => {
  const objet = {
    etat: req.body.etat,
    produitId: res.body.produitId
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

//met a jour une Objet
exports.updateObjet = (req, res) => {
  const id = req.params.id;

  Objet.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Objet was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Objet with id=${id}. Maybe Objet was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Objet with id=" + id
      });
    });
};
//supprime une Objet en fonction de son id
exports.deleteObjet = (req, res) => {
  const id = req.params.id;

  Objet.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Objet was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Objet with id=${id}. Maybe Objet was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Objet with id=" + id
      });
    });
};
