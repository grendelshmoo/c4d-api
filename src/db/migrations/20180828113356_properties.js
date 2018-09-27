
exports.up = knex => {
  return knex.schema.createTable('properties', table => {
    table.increments('id')
    table.string('legal_description')
    table.string('street_address')
    table.string('lot')
    table.string('block')
    table.string('unit')
    table.decimal('area')
    table.string('phase')
    table.string('tract')
    table.string('increment')
    table.decimal('square_footage')
    table.decimal('building_square_footage')
    table.integer('map_document')
    table.string('building_type')
    table.integer('year_built')
    table.string('type_of_construction')
    table.string('building_condition')
    table.string('municipality')
    table.string('condominium')
    table.string('island')
    table.timestamps(true, true)
  })

};

exports.down = knex => {
  return knex.schema.dropTable('properties')
};
