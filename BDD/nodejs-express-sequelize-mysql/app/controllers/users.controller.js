const db = require("../models");
const Users = db.users;

exports.createUsers = (req, res) => {
  const users = {
    username: req.username,
    password: req.password,
    email: req.email,
    full_name: req.full_name,
    adresse: req.adresse,
    id_habitation: req.id_habitation,
    id_panier: req.id_panier
  };
  Users.create(users)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
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
