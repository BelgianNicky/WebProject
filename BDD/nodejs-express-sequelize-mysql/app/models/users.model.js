module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    username: {
      type: Sequelize.VARCHAR
    },
    password: {
      type: Sequelize.VARCHAR
    },
    email: {
      type: Sequelize.VARCHAR
    },
    fullname: {
      type: Sequelize.STRING
    },
    created_at: {
      type: Sequelize.TIMESTAMP
    },
    id_habitation: {
      type: Sequelize.INT
    },
    id_panier: {
      type: Sequelize.INT
    }
  });
  const Habitation = sequelize.define("habitation",{
    ville: {
      type: Sequelize.VARCHAR
    },
    code_postal: {
      type: Sequelize.VARCHAR
    }
  }
  );
  const Panier = sequelize.define("panier",{
    quantite: {
      type: Sequelize.INT
    },
    montant_tot: {
      type: Sequelize.INT
    }
  }
  );

Habitation.hasMany(Users, { as: "users" });
Users.belongsTo(Habitation, {
  foreignKey: "id_habitation",
  as: "id_habitation",
});
  return Tutorial;
};
