
exports.up = knex => {
  return knex.schema.createTable('parties', table => {
    table.increments('id')
    table.integer('transaction_id')
    table.foreign('transaction_id').references('land_transactions.id').onDelete('CASCADE')
    table.integer('contact_id')
    table.foreign('contact_id').references('contacts.id').onDelete('CASCADE')
    table.string('role')
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('parties')
};
