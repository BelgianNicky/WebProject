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
db.produit = require("./produit.model.js")(sequelize, Sequelize);
db.type = require("./type.model.js")(sequelize, Sequelize);
db.categorie = require("./categorie.model.js")(sequelize, Sequelize);
db.commande = require("./commande.model.js")(sequelize, Sequelize);
db.pani_prod = require("./pani_prod.model.js")(sequelize, Sequelize);

//one to many entre users et habitation
db.habitation.hasMany(db.users, { as: "users" });
db.users.belongsTo(db.habitation, {});

//one to one entre users et panier
db.panier.hasOne(db.users,{ as: "users",foreignKey:'panierId' });
db.users.belongsTo(db.panier, {foreignKey:'panierId'});

//many to many entre panier et produit
db.panier.belongsToMany(db.produit, { through: db.pani_prod});
db.produit.belongsToMany(db.panier, { through: db.pani_prod});

//one to many entre produit et Type
db.type.hasMany(db.produit, { as: "produit" });
db.produit.belongsTo(db.type, {});

//one to many entre type et Categorie
db.categorie.hasMany(db.type, { as: "type" });
db.type.belongsTo(db.categorie, {});

//one to many entre commande et panier
db.panier.hasMany(db.commande, { as: "commande" });
db.commande.belongsTo(db.panier, {});

module.exports = db;
