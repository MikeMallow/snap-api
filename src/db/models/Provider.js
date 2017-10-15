const Sequelize = require('sequelize')

//Import statements
const db = require('../../db')

const Provider = db.define('Provider', {
	id: {
		field: 'id', 
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},
	name: {
		field: 'name',
		type: Sequelize.TEXT,
		allowNull: false,
	}
})

module.exports = Provider