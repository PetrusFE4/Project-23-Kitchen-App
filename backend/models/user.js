'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      // user has many reseps
      user.hasMany(models.resep, {
        foreignKey: 'userId',
        as: 'reseps'
      });

      // user has many favorites
      user.hasMany(models.favorite, {
        foreignKey: 'userId',
        as: 'favorites'
      });

      // user has one daftarBelanja
      user.hasOne(models.daftarBelanja, {
        foreignKey: 'userId',
        as: 'daftarBelanja'
      });
    }
  }
  user.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};
