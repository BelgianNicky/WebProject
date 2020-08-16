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

//cree une categorie
exports.createCategorie = (req, res) => {
  const categorie = {
    name: req.body.name
  };

  Categorie.create(categorie)
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
//met a jour une categorie
exports.updateCategorie = (req, res) => {
  const id = req.params.id;

  Categorie.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "categorie was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update categorie with id=${id}. Maybe categorie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating categorie with id=" + id
      });
    });
};
//supprime une categorie en fonction de son id
exports.deleteCategorie = (req, res) => {
  const id = req.params.id;

  Categorie.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "categorie was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete categorie with id=${id}. Maybe categorie was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete categorie with id=" + id
      });
    });
};
