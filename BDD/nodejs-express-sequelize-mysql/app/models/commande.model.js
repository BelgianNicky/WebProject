module.exports = (sequelize, Sequelize) => {
  const Commande = sequelize.define("commande",{
    mode_payement: {
      type: Sequelize.STRING
    }
  });
  return Commande;
};
