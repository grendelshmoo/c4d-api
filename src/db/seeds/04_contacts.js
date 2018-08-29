const table = 'contacts'
exports.seed = knex => {

  return knex(table).insert([
    {
      id: 1,
      first_name: "Kim",
      last_name: "Anderson Young",
      mailing_address: "356 S Marine Corps Dr., Tamuning, GU, 96913"
    },
    {
      id: 2,
      first_name: "Cherri",
      last_name: "Mendiola",
      mailing_address: "356 S Marine Corps Dr., Tamuning, GU, 96913"
    },
    {
      id: 3,
      first_name: "Rita",
      last_name: "Taitague",
      mailing_address: "356 S Marine Corps Dr., Tamuning, GU, 96913"
    },
    {
      id: 4,
      first_name: "Ron",
      last_name: "Young",
      mailing_address: "356 S Marine Corps Dr., Tamuning, GU, 96913"
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
