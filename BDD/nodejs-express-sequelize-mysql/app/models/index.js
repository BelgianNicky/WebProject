const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./users.model.js")(sequelize, Sequelize);
db.habitation = require("./habitation.model.js")(sequelize, Sequelize);
db.panier = require("./panier.model.js")(sequelize, Sequelize);

//one to many entre users et habitation
Habitation.hasMany(Users, { as: "users" });
Users.belongsTo(Habitation, {
  foreignKey: "id_habitation",
  as: "id_habitation",
});

//one to one entre users et panier
Panier.hasOne(Users,{ as: "users" });
Users.belongsTo(Panier, {
  foreignKey: "id_panier",
  as: "id_panier",
});

module.exports = db;

/*In development, you may need to drop existing tables and
re-sync database. Just use force: true as following code:
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/
