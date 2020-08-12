module.exports = (sequelize, Sequelize) => {
  const Panier = sequelize.define("panier",{
    quantite: {
      type: Sequelize.INT
    },
    montant_tot: {
      type: Sequelize.INT
    }
  });
};
