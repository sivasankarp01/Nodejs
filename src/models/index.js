const { sequelize } = require("../config/db");
const User = require("./user.model");

const initDB = async () => {
  await sequelize.sync();
};

module.exports = {
  sequelize,
  initDB,
  User,
};