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
  return db('land_transactions').join('properties', 'land_transactions.property_id', 'properties.id').where('land_transactions.id', id).select('land_transactions.id AS record_number','*').then(records => {
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

function createRecord(body) {
  console.log('IN MODEL CREATE RECORD')
  const {title_company, instrument_number} = body
  console.log('PASSING IN: ', title_company, instrument_number)
 return db('land_transactions')
    .returning('id')
    .insert({title_company, instrument_number})
    // .then(function(response) {
    //   console.log('RESPONSE IS: ', response)
    // })

     // .insert({address})
     // .returning('id')
     // .then(function (response) {
     //     //console.log(body, response, movieId)
     //     return db('scenes')
     //
     //         .insert({movie_id: movieId, description: body.description, location_id: response[0]})
     //         .returning('*')
     // })
     // .then(function(response) {
     //     console.log('RESPONSE IS: ',response, photo)
     //     return db('photos')
     //     .insert({scene_id: response[0].id, photo: photo})
     // })




}

function editRecord() {

}

function deleteRecord() {

}

module.exports = {
  getAll,
  getOne,
  search,
  createRecord,
  editRecord,
  deleteRecord
}
