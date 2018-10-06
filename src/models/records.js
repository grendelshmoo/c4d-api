const knex = require('knex')
const db = require('../db')

// Get all returns a summary line entry for the records.
// minimum will include transaction basics, document, parties.
function getAll() {
  return db('land_transactions').join('properties', 'land_transactions.property_id', 'properties.id').select('land_transactions.id', 'recording_date', 'document_type', 'legal_description').then(records => {
    const promises = records.map(record => {
      return db('parties').join('contacts', 'parties.contact_id', 'contacts.id').where({transaction_id: record.id}).select('first_name', 'last_name', 'mailing_address', 'role').then(parties => {
        record.parties = parties
        return record
      })
    })
    return Promise.all(promises)
  })

}

function getOne(id) {
  return db('land_transactions').join('properties', 'land_transactions.property_id', 'properties.id').where('land_transactions.id', id).select('land_transactions.id AS record_number', '*').then(records => {
    const promises = records.map(record => {
      return db('parties').join('contacts', 'parties.contact_id', 'contacts.id').where({transaction_id: id}).select('contact_id', 'first_name', 'last_name', 'mailing_address', 'role', 'transaction_id').then(parties => {
        record.parties = parties
        return record
      })
    })
    return Promise.all(promises)
  })
}

function search(fullText) {

  return db('land_transactions').join('properties', 'land_transactions.property_id', 'properties.id').join('parties', 'parties.transaction_id', 'land_transactions.id').join('contacts', 'parties.contact_id', 'contacts.id').where('last_name', 'ILIKE', `%${fullText}%`).select('land_transactions.id', 'recording_date', 'document_type', 'legal_description').then(records => {
    const promises = records.map(record => {
      return db('parties').join('contacts', 'parties.contact_id', 'contacts.id').where({transaction_id: record.id}).select('first_name', 'last_name', 'mailing_address', 'role').then(parties => {
        record.parties = parties
        return record
      })
    })
    return Promise.all(promises)
  })
}

// for (x in object)
// if x = whatever do the thing, else

function createRecord(body) {
  // pull the body apart.
  // insert into land_transactions, then into parties

  // const data = { a: 1, b: 2, c: 3 };
  //
  // const pick = (obj, ...args) => ({
  //   ...args.reduce((res, key) => ({ ...res, [key]: obj[key] }), { })
  // })
  //
  // console.log(
  //   pick(data, 'a', 'b')
  // )

  const {document_date, recording_date, document_type, title_company, property_id, instrument_number, fy_number, cnmi_file_number, lcdn, book, page, amount, recording_fees, land_tax, building_tax, land_appraised_value, building_appraised_value, remarks, source_db} = body

  return db('land_transactions').insert({document_date, recording_date, document_type, title_company, property_id, instrument_number, fy_number, cnmi_file_number, lcdn, book, page, amount, recording_fees, land_tax, building_tax, land_appraised_value, building_appraised_value, remarks, source_db})
  .returning('id')

}

function addParties(body) {
  console.log("Parties:", body);
  const promises = body.map(party => {
    return db('parties').insert({role: party.role, contact_id: party.contact_id, transaction_id: party.transaction_id}).returning('*')
  })
  return Promise.all(promises)
}

function editRecord() {}

function deleteRecord() {}

module.exports = {
  getAll,
  getOne,
  search,
  createRecord,
  editRecord,
  deleteRecord,
  addParties
}
