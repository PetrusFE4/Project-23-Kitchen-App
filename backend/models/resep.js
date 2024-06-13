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
      resep.hasMany(models.favorite, {
        foreignKey: 'resepId',
        as: 'favorites'
      });
    }
  }
  resep.init({
    userId: DataTypes.INTEGER,
    nama_resep: DataTypes.STRING,
    deskripsi: DataTypes.STRING,
    bahan: DataTypes.TEXT('long'),
    instruksi: DataTypes.TEXT('long'),
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
