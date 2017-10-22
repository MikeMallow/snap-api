'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      patientHealthRating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      proteinRating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      carbRating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fatRating: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      flagged: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
    return queryInterface.dropTable('food');
  }
};
