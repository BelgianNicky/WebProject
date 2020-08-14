const db = require("../models");
const { panier } = require("../models");
const Users = db.users;
const Panier = db.panier;
const Habitation = db.habitation;
exports.createUsers = (req, res) => {


 /* const panier = {
    quantite: 0,
    montant_tot: 0,
  };

  Panier.create(panier)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating panier"
      });
    });*/

  Habitation.findOne({ where: { ville : req.body.ville } })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      console.log(req.body.ville);
      const habitation = {
        ville: req.body.ville,
        code_postal: req.body.code_postal,
      };
      Habitation.create(habitation)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating habitation"
        });
      });
    });
  //if(req.body.ville == Habitation.findOne({ where: { name : req.body.ville } }).ville)
  /*Users.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });*/
 };

 //retourne un user en fonction de son id
 exports.findOneUsers= (req, res) => {
   const id = req.params.id;

   Users.findByPk(id)
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving user with id=" + id
       });
     });
 };
