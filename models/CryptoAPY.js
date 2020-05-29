const cryptoAPY = (sequelize, DataTypes) => {
  const User = sequelize.define('CryptoUser', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  return User;
};

export default cryptoAPY;

module.exports = (sequelize, DataTypes) => {
  const CryptoAPY = sequelize.define(
    'CryptoAPY',
    {
      ReferencePair: DataTypes.STRING,
      BasePair: DataTypes.STRING,
      Protocol: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      BorrowFloatAPY: DataTypes.FLOAT,
      BorrowAPY: DataTypes.FLOAT,
      LendAPY: DataTypes.FLOAT,
      Timestamp: {
        type: DataTypes.DATE,
        unique: false,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      BlockNumber: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: false,
        },
      },
      PoolSize: { type: DataTypes.FLOAT, allowNull: true },
      BorrowedSize: { type: DataTypes.FLOAT, allowNull: true },
    },
    {
      freezeTableName: true,
    }
  );
  return CryptoAPY;
};
