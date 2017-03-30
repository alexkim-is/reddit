const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

mongoose.connect('mongodb://localhost:27017/alexmac', () => {
  console.log('connected to mongodb...')
})

app.use(bodyParser.json())

app.use('/api', routes)

module.exports = app
