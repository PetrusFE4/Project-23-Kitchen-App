'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FavoriteReseps', {
      favoriteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'favorites',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      resepId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'reseps',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('FavoriteReseps');
  }
};