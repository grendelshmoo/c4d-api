const knex = require('knex')
const db = require('../db')


function getAll() {
  return db('land_transactions')
  
}


function getOne(id) {
    return db('land_transactions').select('*').where({ id })
}

function search(fullText) {
  return db('land_transactions').where('title', 'ILIKE', `%\\${fullText}%`)
}


module.exports = {
  getAll,
  getOne,
  search
}
