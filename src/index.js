const express = require('express')
const cors = require('cors')

// this is temporary
const db = require('./db')

// just importing this so it runs
const Patient = require('./db/models/Patient')
const Provider = require('./db/models/Provider')
const Food = require('./db/models/Food')
const Weight = require('./db/models/Weight')

// this is print(db)
console.log(db)

// force: true deletes all tables if they exist and recreates them, dangerous!!!!!!!!!
db.sync({ force: true })

// this should be defined in a .env at some point
const PORT = 3000

const app = express()

app.use(cors())

app.listen(PORT, () => {
	console.info('Listening on port ${PORT}')
})