const express = require('express')
const routes = new express.Router()

const AppointmentsController = require('./controllers/AppointmentsController')

routes.get('/', (req, res) => {
  res.json({message: 'hello world'})
})

routes.get('/appointments', AppointmentsController.index)
routes.post('/appointments', AppointmentsController.create)

module.exports = routes