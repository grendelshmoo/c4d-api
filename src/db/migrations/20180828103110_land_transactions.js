
exports.up = knex => {
  return knex.schema.createTable('land_transactions', table => {
    table.increments('id')
    table.integer('property_id')
    table.date('document_date')
    table.date('recording_date')
    table.string('document_type')
    table.string('title_company')
    table.integer('instrument_number')
    table.string('fy_number')
    table.string('cnmi_file_number')
    table.integer('lcdn')
    table.integer('book')
    table.integer('page')
    table.decimal('amount', 9, 2)
    table.decimal('recording_fees')
    table.decimal('land_tax')
    table.decimal('building_tax')
    table.decimal('land_appraised_value')
    table.decimal('building_appraised_value')
    table.text('remarks')
    table.string('source_db')
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('land_transactions')
};
