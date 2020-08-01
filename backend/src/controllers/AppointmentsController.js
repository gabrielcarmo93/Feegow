const knex = require('../database')

module.exports = {
  async index(req, res) {
    const appointments = await knex('appointments')

    return res.json(appointments)
  },

  async create(req, res) {
    const { specialty_id, professional_id, name, cpf, source_id, birthdate, date_time } = req.body

    const appointment = await knex('appointments').insert({specialty_id, professional_id, name, cpf, source_id, birthdate, date_time})

    return res.json(appointment)
  }
}