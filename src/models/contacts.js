const knex = require('knex')
const db = require('../db')

function getAll() {
  return db('contacts')
}

function getOne(id) {
  return db('contacts')
    .where({ id })
    .select('*')
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

function deleteContact(id) {
  return db('contacts')
  .where({ id })
  .del()
  .returning('*')
  .then(([response]) => response)
}

function editContact(id, body) {
  const {first_name, last_name, mailing_address} = body
  return db('contacts')
  .where({ id })
  .update({
    first_name: first_name,
    last_name: last_name,
    mailing_address: mailing_address,
    updated_at: new Date()
  })
  .returning('*')
}

module.exports = {
  getAll,
  getOne,
  createContact,
  checkForContact,
  deleteContact,
  editContact
}
