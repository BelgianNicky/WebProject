module.exports = (sequelize, Sequelize) => {
  const Habitation = sequelize.define("habitation",{
    ville: {
      type: Sequelize.VARCHAR
    },
    code_postal: {
      type: Sequelize.VARCHAR
    }
  });
};
