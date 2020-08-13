module.exports = (sequelize, Sequelize) => {
  const Produit = sequelize.define("produit",{
    prix: {
      type: Sequelize.DOUBLE
    },
    stock: {
      type: Sequelize.INTEGER
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
