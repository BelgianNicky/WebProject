module.exports = (sequelize, Sequelize) => {
    const pani_prod = sequelize.define("pani_prod",{
      quantite: {
        type: Sequelize.INTEGER
      },
      montant_tot: {
        type: Sequelize.DOUBLE
      }
    });
    return pani_prod;
  };
  