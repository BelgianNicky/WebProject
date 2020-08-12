module.exports = (sequelize, Sequelize) => {
  const Object = sequelize.define("object",{
    etat: {
      type: Sequelize.STRING
    },
  });
  return Object;
};
