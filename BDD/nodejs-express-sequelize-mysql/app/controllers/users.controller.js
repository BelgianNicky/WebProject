const db = require("../models");
const { panier } = require("../models");
const ControllerPanier = require("./panier.controller")
const Users = db.users;
const Panier = db.panier;
const Habitation = db.habitation;

// crée un utilisateur avec tous ses attributs en lui attribuant au préalable un nouveau panier, et en checkant
// si l'username et l'email ne sont pas déjà présents dans la DB.
exports.createUsers = (req, res) => {

// Check si le username existe déjà dans la base de données
Users.findAll({where: { username : req.body.username }})
  .then(usernameData =>{
    if(usernameData != null  && usernameData.length > 0){
      res.send('username already exists')
    }
    else{
      // Check si l'email existe déjà dans la base de données
      Users.findAll({where: {email : req.body.email }})
      .then(emailData =>{
        if(emailData != null  && emailData.length > 0){
          res.send('email already exists')
        }
        else{
          // Check si la ville existe déjà dans la base de données
          Habitation.count({ where: { ville : req.body.ville } })
          .then(count => {
            // Si la ville existe déjà dans la base de données
            if(count > 0) {
              Habitation.findOne({ where: { ville : req.body.ville }})
              .then(habitationData => {
                // Création d'un panier vide, à attribuer au user
                ControllerPanier.createPanier().then(panier => {
                  const {dataValues} = panier;
        
                  const users = {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    full_name: req.body.full_name,
                    adresse: req.body.adresse,
                    panierId: dataValues.id,
                    habitationId: habitationData.id
                  };
                  // Création du user
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
            // Si la ville n'existe pas dans la base de données, on vient la créer
            else{
              const habitation = {
                ville: req.body.ville,
                code_postal: req.body.code_postal,
              };
              Habitation.create(habitation)
              .then(habitationData=> {
                // Création d'un panier vide, à attribuer au user
                ControllerPanier.createPanier().then(panier => {
                  const {dataValues} = panier;
        
                  const users = {
                    username: req.body.username,
                    password: req.body.password,
                    email: req.body.email,
                    full_name: req.body.full_name,
                    adresse: req.body.adresse,
                    panierId: dataValues.id,
                    habitationId: habitationData.id
                  };
                  // Création du user
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
        }
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while finding User with 'email'"
        });
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while finding User with 'username'"
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

 //supprime un user en fonction de son id
 exports.deleteUser = (req, res) => {
   const id = req.params.id;

   Users.destroy({
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "user was deleted successfully!"
         });
       } else {
         res.send({
           message: `Cannot delete user with id=${id}. Maybe Tutorial was not found!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Could not delete user with id=" + id
       });
     });
 };
