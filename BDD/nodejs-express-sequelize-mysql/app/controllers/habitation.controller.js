const db = require("../models");
const Habitation= db.habitation;

//retourne l'habitation dont la ville est passé en param
exports.findOneHabitation = (req, res) => {
  const id = req.params.name;

  Habitation.findByPk(name)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving habitation with id=" + id
      });
    });
};
//cree une habitation
exports.createHabitation = (req, res) => {
  const habitation = {
    ville: req.ville,
    code_postal: req.code_postal
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
