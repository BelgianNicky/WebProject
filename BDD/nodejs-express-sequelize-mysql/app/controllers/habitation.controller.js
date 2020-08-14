const db = require("../models");
const Habitation= db.habitation;
const Op = db.Sequelize.Op;

//retourne l'habitation dont la ville est passé en param
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
