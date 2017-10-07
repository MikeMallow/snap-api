const Sequelize = require('sequelize')

// this is how you import 
const db = require('../../db')

const Provider = require('./Provider')

const Patient = db.define('Patient', {
	id: {
		field: 'id', 
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},
	name: {
		field: 'name', 	// name of field in db
		type: Sequelize.TEXT,   // type of field in db
		allowNull: false,  // by default true
	}
	// by default there is timestamps
})

Patient.belongsTo(Provider)

module.exports = Patient
