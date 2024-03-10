//index file of model
const sequelize = require("../bin/dbConnection");
const { User } = require("../model/entities/User");
const { Ideas } = require("../model/entities/Ideas");

const db = {};

const models = {
  User,
  Ideas,
};
sequelize.model = models;
db.sequelize = sequelize;
module.exports = { db, models };
