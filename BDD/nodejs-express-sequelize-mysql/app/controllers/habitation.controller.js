const db = require("../models");
const Habitation= db.habitation;

//retourne l'habitation dont la ville est passé en param
exports.findOneHabitation = (req, res) => {
  const id = req.params.id;

  Habitation.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving habitation with id=" + id
      });
    });
};
