module.exports = (sequelize, Sequelize) => {
  const habitation = require()
  const Users = sequelize.define("users", {
    username: {
      type: Sequelize.VARCHAR
    },
    password: {
      type: Sequelize.VARCHAR
    },
    email: {
      type: Sequelize.VARCHAR
    },
    fullname: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.TIMESTAMP
    },
  });
  return Users;
};
