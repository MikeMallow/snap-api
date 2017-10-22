'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      providerId: {
        type: Sequelize.UUID,
        references: {
          model: 'provider',
          key: 'id',
        },
        onDelete: 'set null',
      } 
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patient');
  }
};
