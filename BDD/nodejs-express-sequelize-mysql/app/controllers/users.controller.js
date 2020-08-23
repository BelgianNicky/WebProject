const db = require("../models");
const { panier } = require("../models");
const ControllerPanier = require("./panier.controller")
const Users = db.users;
const Panier = db.panier;
const Habitation = db.habitation;
var bcrypt = require('bcrypt');
const saltRounds = 10;

// crée un utilisateur avec tous ses attributs en lui attribuant au préalable un nouveau panier, et en checkant
// si l'username et l'email ne sont pas déjà présents dans la DB.
exports.createUsers = (req, res) => {

  // Check si le username existe déjà dans la base de données
  Users.findAll({where: { username : req.body.username }})
    .then(usernameData =>{
      if(usernameData != null  && usernameData.length > 0){
        res.send({
          error : "username already exists",
          boolean : false
        })
      }
      else{
        // Check si l'email existe déjà dans la base de données
        Users.findAll({where: {email : req.body.email }})
        .then(emailData =>{
          if(emailData != null  && emailData.length > 0){
            res.send({
              error : "email already exists",
              boolean : false
            })
          }
          else{
            // Check si la ville existe déjà dans la base de données
            Habitation.findAll({ where: { ville : req.body.ville }})
            .then(habitationData => {
              // Si elle existe, créer un user avec l'ID de l'habitation correspondante
              if(habitationData != null  && habitationData.length > 0){
                // Création d'un panier vide, à attribuer au user
                ControllerPanier.createPanier().then(panier => {
                  const {dataValues} = panier;

                  bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
                    const users = {
                      username: req.body.username,
                      password: hash,
                      email: req.body.email,
                      full_name: req.body.full_name,
                      adresse: req.body.adresse,
                      panierId: dataValues.id,
                      habitationId: habitationData[0].id
                    };
                    // Création du user
                    Users.create(users)
                    .then(data => {
                      res.send({
                        data : data,
                        boolean : true
                      });
                    })
                    .catch(err => {
                      res.status(500).send({
                        message:
                          err.message || "Some error occurred while creating the User"
                      });
                    });
                  });
                })
              }
              // Si elle n'existe pas, créer une nouvelle ville et attribue l'ID de cette nouvelle ville au user
              else{
                const habitation = {
                  ville: req.body.ville,
                  code_postal: req.body.code_postal,
                };
                Habitation.create(habitation)
                .then(habitationCreatedData=> {
                  // Création d'un panier vide, à attribuer au user
                  ControllerPanier.createPanier().then(panier => {
                    const {dataValues} = panier;

                    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
                      const users = {
                        username: req.body.username,
                        password: hash,
                        email: req.body.email,
                        full_name: req.body.full_name,
                        adresse: req.body.adresse,
                        panierId: dataValues.id,
                        habitationId: habitationCreatedData.id
                      };
                      // Création du user
                      Users.create(users)
                      .then(data => {
                        res.send({
                          data : data,
                          boolean : true
                        });
                      })
                      .catch(err => {
                        res.status(500).send({
                          message:
                            err.message || "Some error occurred while creating the User"
                        });
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
                  err.message || "Some error occurred while creating the User with 'habitation' already existing in the database."
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
}

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

  //test si les informations renseignées par l'utilisateur correspondent à un
  //utilisateur existant dans la DB au niveau du username et du password

  exports.testConnection= (req, res) => {
    const username = req.query.username;
    const password = req.query.password;

    Users.findOne({
      where: {
          username: username
             }
    }).then(function (user) {
        if (!user) {
          res.send({
            error: "Username doesn't exist",
            boolean : false
          });
        } else {
          bcrypt.compare(password, user.password, function (err, result) {
            if (result == true) {
              res.send({data : user,boolean : true});
            } else {
              res.send({
                error: "Incorrect password",
                boolean : false
              });
            }
          });
        }
    });  
  };

  // OLD VERSION OF TESTCONNECTION()
 /*exports.testConnection= (req, res) => {

   const username = req.query.username;
   const password = req.query.password;

   Users.findAll({ where: { username : username }})
     .then(data => {
      if(data != null  && data.length > 0){
        if(data[0].dataValues.password == password){
          res.send({data : data[0],boolean : true});
        }
        else{
          res.send({
            boolean : false
          });
        }
      }
      else{
        res.send({
          boolean : false
        })
      }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error retrieving user"
       });
     });
 };*/

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
 //met a jour un User
 exports.updateUsers = (req, res) => {
   const id = req.params.id;
   Users.update(req.body, {
     where: { id: id }
   })
     .then(num => {
       if (num == 1) {
         res.send({
           message: "User was updated successfully."
         });
       } else {
         res.send({
           message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
         });
       }
     })
     .catch(err => {
       res.status(500).send({
         message: "Error updating User with id=" + id
       });
     });
 };
