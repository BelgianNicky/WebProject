const db = require("../models");
const Type= db.type;
const Op = db.Sequelize.Op;

/*retourne tous les types
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
};*/

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
    name: req.body.name,
    categorieId: req.body.categorieId
  };
  Type.create(type)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the type"
      });
    });
};
//met a jour un Type
exports.updateType = (req, res) => {
  const id = req.params.id;

  Type.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Type was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Type with id=${id}. Maybe Type was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Type with id=" + id
      });
    });
};
//supprime unType en fonction de son id
exports.deleteType = (req, res) => {
  const id = req.params.id;

  Type.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Type was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Type with id=${id}. Maybe Type was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Type with id=" + id
      });
    });
};
//retourne tous les types qui ont comme id cat l'id passé en query
exports.findAllTypeCat = (req, res) => {
  const categorieId = req.query.categorieId;
  var condition = categorieId ? { categorieId: { [Op.like]: `%${categorieId}%` } } : null;

  Type.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving types."
      });
    });
};
