const knex = require('knex')
const db = require('../db')

function getRecordCount () {
  return db('land_transactions').count('id')
}

function getMaxDate () {
  return db('land_transactions').max('recording_date')
}

function getMinDate () {
  return db('land_transactions').min('recording_date')
}

function getContactsCount () {
  return db('contacts').count('id')
}

function getPropertiesCount () {
  return db('properties').count('id')
}

function getRecordsByDate () {
  return db('land_transactions').select('recording_date').orderByRaw('recording_date ASC')
}

function getRecordsByMunicipality () {
  return db('land_transactions').join('properties', 'land_transactions.property_id', 'properties.id').select('properties.municipality')

}


module.exports = {getRecordCount, getMaxDate, getMinDate, getContactsCount, getPropertiesCount, getRecordsByDate, getRecordsByMunicipality}
