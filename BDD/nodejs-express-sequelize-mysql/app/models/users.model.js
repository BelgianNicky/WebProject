module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    full_name: {
      type: Sequelize.STRING
    },
    adresse: {
      type: Sequelize.STRING
    },
  });
  return Users;
};
