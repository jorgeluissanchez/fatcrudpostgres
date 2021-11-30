const express = require('express')
const bodyParser = require('body-parser')
const pg = require('pg')

const app = express()
const port = process.env.PORT || 5000

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.use(require('./routes/index'));


// Listen on server
app.listen(port, () => console.log(`Listening on port ${port}`))