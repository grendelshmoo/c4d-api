
exports.up = knex => {
  return knex.schema.createTable('contacts', table => {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('mailing_address')
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('contacts')
};
