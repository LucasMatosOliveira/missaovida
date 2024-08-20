const { Sequelize } = require('sequelize');
const config = require('../config/database');
const sequelize = new Sequelize(config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;