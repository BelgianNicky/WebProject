module.exports = (sequelize, Sequelize) => {
  const Objet = sequelize.define("objet",{
    etat: {
      type: Sequelize.STRING
    },
  });
  return Objet;
};
