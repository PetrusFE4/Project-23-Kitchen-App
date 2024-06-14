'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    static associate(models) {
      // favorite belongs to user
      favorite.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user'
      });

      // favorite belongs to many reseps
      favorite.belongsTo(models.resep, {
        foreignKey: 'resepId',
        as: 'resep'
      });
    }
  }
  favorite.init({
    userId: DataTypes.INTEGER,
    resepId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};

