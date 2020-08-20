module.exports = {
  HOST: "51.210.149.38",
  PORT: '3306',
  USER: "mathias",
  PASSWORD: "gassmann",
  DB: "mybase",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
