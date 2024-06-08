'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resep extends Model {
    static associate(models) {
      // resep belongs to user
      resep.belongsTo(models.user, {
        foreignKey: 'userId',
        as: 'user'
      });

      // resep belongs to many favorites
      resep.belongsToMany(models.favorite, {
        through: 'FavoriteReseps',
        foreignKey: 'resepId',
        as: 'favorites'
      });
    }
  }
  resep.init({
    userId: DataTypes.INTEGER,
    nama_resep: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    bahan: DataTypes.STRING,
    instruksi: DataTypes.STRING,
    video: DataTypes.STRING,
    gambar: DataTypes.STRING,
    kategori: DataTypes.STRING,
    subKategori: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'resep',
  });
  return resep;
};
