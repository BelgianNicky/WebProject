const db = require("../models");
const Panier= db.panier;

//retourne tous les paniers de la bdd
exports.findAllPanier = (req,res) => {
  Panier.findAll()
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving panier."
      });
    });
};

//retourne le panier dont l'id est passé en param
exports.findOnePanier = (req,res) => {
  const id = req.params.id;

  Panier.findByPk(id)
    .then(data =>{
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
          message: "Error retrieving panier with id=" + id
      });
    });
};

//cree un panier vide et le renvoie
exports.createPanier = () => {
  const panier = {
    quantite: 0,
    montant_tot: 0,
  };

  return Promise.resolve(Panier.create(panier))
};
//modifie un panier précis avec TOUTES les infos passé en param
exports.updatePanier = (req, res) => {
  const id = req.params.id;

  Panier.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Panier was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update panier with id=${id}. Maybe panier was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Panier with id=" + id
      });
    });
};
