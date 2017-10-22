const Sequelize = require('sequelize')

const db = require('../../db')
const Patient = require('./Patient')

const Weight = db.define('Weight', {
	id: {
		field: 'id',
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},
	weight: {
		field: 'patientHealthRating',
		type: Sequelize.FLOAT,
		allowNull: false,
	}
})

Weight.belongsTo(Patient, {
	onDelete: 'CASCADE',
})

module.exports = (Weight)
