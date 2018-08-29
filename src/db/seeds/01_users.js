const { hashSync } = require('bcryptjs')

const table = 'users'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      first_name: 'Craig',
      last_name: 'Fell',
      email: 'craig@fell.org',
      password: hashSync('password')
    },
    {
      id: 2,
      first_name: 'Test',
      last_name: 'User',
      email: 'test@user.com',
      password: hashSync('password')
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
