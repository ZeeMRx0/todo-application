const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 5000

const ConnectToDB = require('./db/db')

// Connect to Databse
ConnectToDB()

// Init middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('API running'))

// Define Routes
app.use('/todos', require('./routes/api/todo'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
