const knex = require('knex')
const db = require('../db')

// Get all returns a summary line entry for the records.
// minimum will include transaction basics, document, parties.
function getAll() {
  return db('land_transactions').join('properties', 'land_transactions.property_id', 'properties.id').select('land_transactions.id', 'recording_date', 'document_type', 'legal_description').then(records => {
    const promises = records.map(record => {
      return db('parties').join('contacts', 'parties.contact_id', 'contacts.id').where({transaction_id: record.id}).select('first_name', 'last_name', 'mailing_address', 'role', 'transaction_id').then(parties => {
        record.parties = parties
        return record
      })
    })
    return Promise.all(promises)
  })

}

function getOne(id) {
  return db('land_transactions').join('properties', 'land_transactions.property_id', 'properties.id').where('land_transactions.id', id).select('*').then(records => {
    const promises = records.map(record => {
      return db('parties').join('contacts', 'parties.contact_id', 'contacts.id').where({transaction_id: id}).select('first_name', 'last_name', 'mailing_address', 'role', 'transaction_id').then(parties => {
        record.parties = parties
        return record
      })
    })
    return Promise.all(promises)
  })
}

function search(fullText) {
  return db('land_transactions').where('title', 'ILIKE', `%\\${fullText}%`)
}

module.exports = {
  getAll,
  getOne,
  search
}
