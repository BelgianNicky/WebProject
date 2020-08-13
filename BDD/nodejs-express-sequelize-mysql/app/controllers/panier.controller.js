const db = require("../models");
const Panier= db.panier;

export.findAllPanier = (req,res){
  Panier.findAll()
    .then(panier =>{
      console.log(panier);
      res.sendStatus(200);
    })
    .catch(err => console.log(err));
}
