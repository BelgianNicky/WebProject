const db = require("../models");
const Users = db.users;

exports.createUsers = (req, res) => {
  const users = {
    username: req.username,
    password: req.password,
    email: req.email,
    full_name: req.full_name,
    adresse: req.adresse
    //gerer les id?
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
