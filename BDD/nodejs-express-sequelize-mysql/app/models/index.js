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
db.habitation.hasMany(db.users, { as: "users" });
db.users.belongsTo(db.habitation, {
});

//one to one entre users et panier
db.panier.hasOne(db.users,{ as: "users",foreignKey:'panierId' });
db.users.belongsTo(db.panier, {foreignKey:'panierId'});

module.exports = db;
