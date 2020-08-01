exports.up = knex => knex.schema.createTable('appointments', table => {
  table.increments()
  table.string('specialty_id')
  table.string('professional_id')
  table.string('name')
  table.string('cpf')
  table.string('source_id')
  table.string('birthdate')
  table.string('date_time')
  table.timestamps(true, true)
})

exports.down = knex => knex.schema.dropTableIfExists('appointments')