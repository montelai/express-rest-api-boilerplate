const Sequelize = require('sequelize');
const bcryptService = require('../services/bcrypt.service');

const sequelize = require('../../config/database');

const hooks = {
  beforeCreate(user) {
    user.password = bcryptService().password(user); // eslint-disable-line no-param-reassign
  },
};

const tableName = 'crypto_apy';

const Crypto = sequelize.define(
  'CryptoAPY',
  {
    ReferencePair: Sequelize.STRING,
    BasePair: Sequelize.STRING,
    Protocol: Sequelize.STRING,
    BorrowFloatAPY: Sequelize.FLOAT,
    BorrowAPY: Sequelize.FLOAT,
    LendAPY: Sequelize.FLOAT,
    Timestamp: Sequelize.DATE,
    BlockNumber: Sequelize.INTEGER,
    PoolSize: Sequelize.FLOAT,
    BorrowedSize: Sequelize.FLOAT,
  },
  { hooks, tableName, freezeTableName: true }
);

// eslint-disable-next-line
Crypto.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  delete values.password;

  return values;
};

module.exports = Crypto;
