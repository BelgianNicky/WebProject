module.exports = (sequelize, Sequelize) => {
  const Habitation = sequelize.define("habitation",{
    ville: {
      type: Sequelize.STRING
    },
    code_postal: {
      type: Sequelize.STRING
    }
  });
  return Habitation;
};
