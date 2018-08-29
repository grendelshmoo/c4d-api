const table = 'parties'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      transaction_id: 100001,
      contact_id: 1,
      role: 1
    },
    {
      id: 2,
      transaction_id: 100001,
      contact_id: 2,
      role: 1
    },
    {
      id: 3,
      transaction_id: 100001,
      contact_id: 3,
      role: 2
    },
    {
      id: 4,
      transaction_id: 100002,
      contact_id: 1,
      role: 1
    },
    {
      id: 5,
      transaction_id: 100003,
      contact_id: 1,
      role: 1
    },
    {
      id: 6,
      transaction_id: 100003,
      contact_id: 1,
      role: 3
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
