const knex = require('knex')
const db = require('../db')

function getAll() {
  return db('properties')
}

function getOne(id) {
  return db('properties').where({id}).select('*')
}

function checkForProperty(body) {
  const {legal_description} = body

  return db('properties').select('*').where('legal_description', legal_description)
}

function createProperty(body) {
  const {
    legal_description,
    street_address,
    lot,
    block,
    unit,
    area,
    phase,
    tract,
    increment,
    square_footage,
    building_square_footage,
    map_document,
    building_type,
    year_built,
    type_of_construction,
    building_condition,
    municipality,
    condominium,
    island
  } = body
  return db('properties').insert({
    legal_description,
    street_address,
    lot,
    block,
    unit,
    area,
    phase,
    tract,
    increment,
    square_footage,
    building_square_footage,
    map_document,
    building_type,
    year_built,
    type_of_construction,
    building_condition,
    municipality,
    condominium,
    island
  }).returning('*')
}

function deleteProperty(id) {
  return db('properties').where({id}).del().returning('*').then(([response]) => response)
}

function editProperty(id, body) {
  return db('properties').where({id}).update({
    ...body,
    updated_at: new Date()
  }).returning('*')
}

function getPropertyRecords(id) {
  return db('land_transactions').where({property_id: id}).join('properties', 'land_transactions.property_id', 'properties.id').select('land_transactions.id', 'recording_date', 'document_type', 'legal_description').then(records => {
    const promises = records.map(record => {
      return db('parties').join('contacts', 'parties.contact_id', 'contacts.id').where({transaction_id: record.id}).select('first_name', 'last_name', 'mailing_address', 'role').then(parties => {
        record.parties = parties
        return record
      })
    })
    return Promise.all(promises)
  })
}

function getChainOfTitle(id) {
  return db('land_transactions').where({property_id: id, document_type: "Deed"}).join('properties', 'land_transactions.property_id', 'properties.id').select('land_transactions.id', 'recording_date', 'document_type', 'legal_description').then(records => {
    const promises = records.map(record => {
      return db('parties').join('contacts', 'parties.contact_id', 'contacts.id').where({transaction_id: record.id, role: "Grantee"}).select('first_name', 'last_name', 'mailing_address', 'role').then(parties => {
        record.parties = parties
        return record
      })
    })
    return Promise.all(promises)
  })

}

module.exports = {
  getAll,
  getOne,
  checkForProperty,
  createProperty,
  deleteProperty,
  editProperty,
  getPropertyRecords,
  getChainOfTitle
}
