const Sequelize = require('sequelize')

// this should be in a .env file one day
const db = new Sequelize('postgresql://localhost:5432/snap_database', {
	dialect: 'postgres'
})

module.exports = db
