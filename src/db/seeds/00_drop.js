exports.seed = async knex => {
  await knex('parties').del()
  await knex('contacts').del()
  await knex('properties').del()
  await knex('land_transactions').del()
  await knex('users').del()
}
