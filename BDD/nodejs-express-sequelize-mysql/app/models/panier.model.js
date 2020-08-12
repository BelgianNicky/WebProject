module.exports = (sequelize, Sequelize) => {
  const Panier = sequelize.define("panier",{
    quantite: {
      type: Sequelize.STRING
    },
    montant_tot: {
      type: Sequelize.STRING
    }
  });
  return Panier;
};
