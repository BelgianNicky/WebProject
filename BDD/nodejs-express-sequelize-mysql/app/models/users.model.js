module.exports = (sequelize, Sequelize) => {
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
    id_habitation: {
      type: Sequelize.INT
    },
    id_panier: {
      type: Sequelize.INT
    }
  });
  const habitation = 

  return Tutorial;
};
