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

db.inscription = require("./inscription.model.js")(sequelize, Sequelize);

module.exports = db;

/*In development, you may need to drop existing tables and
re-sync database. Just use force: true as following code:
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});*/
