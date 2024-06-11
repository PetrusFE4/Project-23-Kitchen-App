'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class daftarBelanja extends Model {
    static associate(models) {
      // daftarBelanja belongs to user
      daftarBelanja.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  daftarBelanja.init({
    userId: DataTypes.INTEGER,
    content: DataTypes.TEXT('long')
  }, {
    sequelize,
    modelName: 'daftarBelanja',
  });
  return daftarBelanja;
};

