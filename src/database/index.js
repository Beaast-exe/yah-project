const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Account = require('../models/Account');

const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);
Account.init(connection);

Address.associate(connection.models);

module.exports = connection;