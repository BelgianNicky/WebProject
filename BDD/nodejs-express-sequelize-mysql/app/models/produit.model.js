module.exports = (sequelize, Sequelize) => {
  const Produit = sequelize.define("produit",{
    prix: {
      type: Sequelize.DOUBLE
    },
    stock: {
      type: Sequelize.INT
    },
    nom: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    }
  });
  return Produit;
};
