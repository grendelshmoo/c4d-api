const table = 'parties'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      transaction_id: 100001,
      contact_id: 1,
      role: "Grantor"
    },
    {
      id: 2,
      transaction_id: 100001,
      contact_id: 2,
      role: "Grantor"
    },
    {
      id: 3,
      transaction_id: 100001,
      contact_id: 3,
      role: "Grantee"
    },
    {
      id: 4,
      transaction_id: 100002,
      contact_id: 1,
      role: "Grantor"
    },
    {
      id: 5,
      transaction_id: 100003,
      contact_id: 1,
      role: "Grantor"
    },
    {
      id: 6,
      transaction_id: 100003,
      contact_id: 3,
      role: "Attorney"
    },
    {
      id: 7,
      transaction_id: 100004,
      contact_id: 3,
      role: "Grantor"
    },
    {
      id: 8,
      transaction_id: 100004,
      contact_id: 2,
      role: "Grantee"
    },
    {
      id: 9,
      transaction_id: 100005,
      contact_id: 2,
      role: "Grantor"
    },
    {
      id: 10,
      transaction_id: 100005,
      contact_id: 1,
      role: "Grantee"
    },
    {
      id: 11,
      transaction_id: 100006,
      contact_id: 2,
      role: "Grantor"
    },
    {
      id: 12,
      transaction_id: 100006,
      contact_id: 5,
      role: "Grantee"
    },
    {
      id: 13,
      transaction_id: 100011,
      contact_id: 2,
      role: "Grantee"
    },
    {
      id: 14,
      transaction_id: 235679,
      contact_id: 2733,
      role: "Grantee"
    },
    {
      id: 15,
      transaction_id: 359460,
      contact_id: 2733,
      role: "Grantor"
    },
    {
      id: 16,
      transaction_id: 359460,
      contact_id: 5116,
      role: "Grantee"
    },
    {
      id: 17,
      transaction_id: 369363,
      contact_id: 5116,
      role: "Grantor"
    },
    {
      id: 18,
      transaction_id: 369363,
      contact_id: 4511,
      role: "Grantee"
    },
    {
      id: 19,
      transaction_id: 634468,
      contact_id: 4511,
      role: "Grantor"
    },
    {
      id: 20,
      transaction_id: 634468,
      contact_id: 8878,
      role: "Grantee"
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
