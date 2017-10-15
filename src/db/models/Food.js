const Sequelize = require('sequelize')

const db = require('../../db')
const Patient = require('./Patient')

const Food = db.define('Food', {
	id: {
		field: 'id',
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},
	patientHealthRating: {
		field: 'patientHealthRating',
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	image: {
		field: 'image',
		type: Sequelize.TEXT,
		allowNull: false,
	},
	proteinRating: {
		field: 'proteinRating',
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	carbRating: {
		field: 'carbRating',
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	fatRating: {
		field: 'fatRating',
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	flagged: {
		field: 'flagged',
		type: Sequelize.BOOLEAN,
		allowNull: false,
	}
})

Food.belongsTo(Patient)

module.exports = (Food)















