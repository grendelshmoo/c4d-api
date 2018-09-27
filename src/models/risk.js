const knex = require('knex')
const db = require('../db')

function easement(id) {
  return db('land_transactions').where({property_id: id, document_type: "Amended Grant of Easement and Access"}).select('land_transactions.id').then(record => {
    response = {
      risk: "High",
      document_id: record[0].id,
      message: "Property has Easement."
    }
    return response
  })
}

function taxes(id) {
  return db('land_transactions').where({property_id: id, document_type: "Tax Lien"}).orWhere({property_id: id, document_type: "Notice of Levy"}).select('land_transactions.id').then(record => {
    response = {
      risk: "Med",
      document_id: record[0].id,
      message: "Property has unpaid taxes."
    }
    return response
  })

}

function legalaction(id) {
  return db('land_transactions').where({property_id: id, document_type: "Lis Pendens"}).select('land_transactions.id').then(record => {
    response = {
      risk: "High",
      document_id: record[0].id,
      message: "Property has pending legal action."
    }
    return response
  })
}

function deceased(id) {
  //Certificate of Death
  return db('land_transactions').where({property_id: id, document_type: "Deed"})
  .select('contacts.id')
  .join('parties', 'land_transactions.id', 'parties.transaction_id')
  .join('contacts', 'parties.contact_id', 'contacts.id')
  .andWhere({role: "Grantee"})
  .andWhere({mailing_address: ""})
  .orderByRaw('recording_date DESC')
  .then(record => record[0])
  .then(record => {
    return db('land_transactions').join('parties', 'land_transactions.id', 'parties.transaction_id').where({document_type: "Certificate of Death", contact_id: record.id}).select('transaction_id')
  })
  .then(record => {
    console.log(record)
    response = {
      risk: "Med",
      document_id: record[0].transaction_id,
      message: "Current owner is listed as deceased."
    }
    return response
  })


}

function contact(id) {
  return db('land_transactions').where({property_id: id, document_type: "Deed"})
  .select('contacts.id')
  .join('parties', 'land_transactions.id', 'parties.transaction_id')
  .join('contacts', 'parties.contact_id', 'contacts.id')
  .andWhere({role: "Grantee"})
  .andWhere({mailing_address: ""})
  .orderByRaw('recording_date DESC')
  .then(record => record[0])
  .then(record => {
    response = {
      risk: "Low",
      contact_id: record.id,
      message: "Current owner(s) have no mailing address on file."
    }
    return response
  })
}

module.exports = {
  easement,
  taxes,
  legalaction,
  deceased,
  contact
}
