module.exports = (sequelize, Sequelize) => {
  const Panier = sequelize.define("panier",{
    quantite: {
      type: Sequelize.INTEGER
    },
    montant_tot: {
      type: Sequelize.DOUBLE
    }
  });
  return Panier;
};
