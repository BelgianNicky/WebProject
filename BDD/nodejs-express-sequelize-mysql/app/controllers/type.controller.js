const db = require("../models");
const Type= db.type;

//retourne tous les types
exports.findAllType = (req, res) => {
  Type.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving type."
      });
    });
};

//retourne un type en fonction de son id
exports.findOneType = (req, res) => {
  const id = req.params.id;

  Type.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving type with id=" + id
      });
    });
};

//cree un type
exports.createType = (req, res) => {
  const type = {
    name: req.name,
    categorieId: req.categorieId
  };
  Type.create(type)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the categorie"
      });
    });
};
