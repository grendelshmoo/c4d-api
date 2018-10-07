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
  return db('land_transactions').select('recording_date')
}

function getRecordsByMunicipality () {

}


module.exports = {getRecordCount, getMaxDate, getMinDate, getContactsCount, getPropertiesCount, getRecordsByDate, getRecordsByMunicipality}
