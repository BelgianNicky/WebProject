const db = require("../models");
const Panier= db.panier;

exports.findAllPanier = (req,res) => {
  Panier.findAll()
    .then(data =>{
      console.log(data);
      res.send(data);
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving panier."
      });
    });
}
