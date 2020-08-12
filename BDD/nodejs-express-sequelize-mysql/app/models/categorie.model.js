module.exports = (sequelize, Sequelize) => {
  const Categorie = sequelize.define("categorie",{
    name: {
      type: Sequelize.STRING
    },

  });
  return Categorie;
};
