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
      first_name: "Eustace",
      last_name: "Nirmblather",
      mailing_address: ""
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
    },
    {
      id: 5,
      first_name: "Joe",
      last_name: "Smith",
      mailing_address: ""
    },
    {
      id: 6,
      first_name: "Gale",
      last_name: "Sepe",
      mailing_address: "7619 Temple Court, Fair Lawn, NJ 07410"
    },
    {
      id: 7,
      first_name: "Richie",
      last_name: "Casias",
      mailing_address: "33 Cooper Street, Baltimore, MD 21206"
    },
    {
      id: 8,
      first_name: "Lane",
      last_name: "Bassin",
      mailing_address: "47 S. Trout St., Zanesville, OH 43701"
    },
    {
      id: 9,
      first_name: "Modesto",
      last_name: "Coelho",
      mailing_address: "9428 SE. Ridgewood Drive, Norristown, PA 19401"
    }

  ]).then(() => {
    return knex.raw(`SELECT setval('${table}_id_seq', (SELECT MAX(id) FROM ${table}));`)
  })
}
