const knex = require('knex')
const db = require('../db')

function getAll() {
  return db('properties')
}

function getOne(id) {
  return db('properties')
    .where({ id })
    .select('*')
}

function checkForProperty(body) {

}

function createProperty(body) {
  return db('properties')
    .insert({ ...body})
    .returning('*')
}

function deleteProperty(id) {
  return db('properties')
  .where({ id })
  .del()
  .returning('*')
  .then(([response]) => response)
}

function editProperty(id, body) {
  return db('properties')
  .where({ id })
  .update({
    ...body,
    updated_at: new Date()
  })
  .returning('*')
}


module.exports = {
  getAll,
  getOne,
  checkForProperty,
  createProperty,
  deleteProperty,
  editProperty
}
