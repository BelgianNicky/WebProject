const db = require("../models");
const Users = db.users;
const Habitation = db.habitation;
const Panier= db.panier;

exports.createUsers = (id_habitation,id_panier,users) => {
  return Users.create({
    username: users.username,
    password: users.password,
    email: users.email,
    full_name: users.full_name,
    created_at: users.created_at,
    id_habitation: id_habitation,
    id_panier: id_panier,
    adresse: users.adresse

  })
    .then((users) => {
      console.log(">> Created users: " + JSON.stringify(users, null, 4));
      return users;
    })
    .catch((err) => {
      console.log(">> Error while creating users: ", err);
    });
};
