'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('weight', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      weight: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      patientId: {
        type: Sequelize.UUID,
        references: {
          model: 'patient',
          key: 'id',
        },
        onDelete: 'cascade',
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('weight');
  }
};
