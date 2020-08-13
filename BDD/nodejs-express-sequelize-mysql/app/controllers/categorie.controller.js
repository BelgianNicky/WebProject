const db = require("../models");
const Categorie= db.categorie;

//retourne toutes les categories
exports.findAllCategorie = (req, res) => {
  Categorie.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving categorie."
      });
    });
};

//retourne une categorie en fonction de son id
exports.findOneCategorie = (req, res) => {
  const id = req.params.id;

  Categorie.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving categorie with id=" + id
      });
    });
};
