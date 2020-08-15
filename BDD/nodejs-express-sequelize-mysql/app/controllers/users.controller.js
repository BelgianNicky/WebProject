const db = require("../models");
const { panier } = require("../models");
const ControllerPanier = require("./panier.controller")
const Users = db.users;
const Panier = db.panier;
const Habitation = db.habitation;

exports.createUsers = (req, res) => {
  // panier
  
  Habitation.count({ where: { ville : req.body.ville } })
  .then(count => {
    if(count > 0) {
      Habitation.findOne({ where: { ville : req.body.ville }})
      .then(data => {
        //res.send(data);

        ControllerPanier.createPanier().then(panier => {
          const {dataValues} = panier;

          const users = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            full_name: req.body.full_name,
            adresse: req.body.adresse,
            panierId: dataValues.id,
            habitationId: data.id
          };
          Users.create(users)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User with 'habitation' already existing in the database."
            });
          });
        })
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User with 'habitation' already existing in the database."
        });
      });
    }
    else{
      const habitation = {
        ville: req.body.ville,
        code_postal: req.body.code_postal,
      };
      Habitation.create(habitation)
      .then(data=> {
        //res.send(data)

        ControllerPanier.createPanier().then(panier => {
          const {dataValues} = panier;

          const users = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            full_name: req.body.full_name,
            adresse: req.body.adresse,
            panierId: dataValues.id,
            habitationId: data.id
          };
          Users.create(users)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User with 'habitation' already existing in the database."
            });
          });
        })
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating habitation"
        });
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while counting the number of 'habitation' found with a certain 'ville' name"
    });
  });
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
