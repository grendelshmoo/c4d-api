const knex = require('knex')
const db = require('../db')

// Get all returns a summary line entry for the records.
// minimum will include transaction basics, document, parties.
function getAll() {
  return db('contacts')
}

function checkForContact(body) {
    const {first_name, last_name, mailing_address} = body

    return db('contacts')
    .select('*')
    .where('first_name', first_name)
    .where('last_name', last_name)
    // .where('mailing_address', mailing_address)
}

function createContact(body) {

  const {first_name, last_name, mailing_address} = body
  return db('contacts')
    .insert({first_name, last_name, mailing_address})
    .returning('*')
}


module.exports = {
  getAll,
  createContact,
  checkForContact
}
