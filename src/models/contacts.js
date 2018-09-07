const knex = require('knex')
const db = require('../db')

// Get all returns a summary line entry for the records.
// minimum will include transaction basics, document, parties.
function getAll() {
  return db('contacts')
}


module.exports = {
  getAll
}
