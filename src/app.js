require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const db = require('./models')

const app = express()
const PORT = process.env.PORT

app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Registrar Rotas
app.use('/', require('../src/routes'))

db.sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.info(`App listening on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.error(err)
  })

module.exports = app
