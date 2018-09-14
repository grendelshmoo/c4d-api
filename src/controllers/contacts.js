const model = require('../models/contacts')
// const resourceName = 'record'

async function getAll(req, res, next) {
  const data = await model.getAll()
  res.status(200).json({data})
}

async function getOne(req, res, next) {
  try {
    const id = req.params.contactId
    const data = await model.getOne(id)
    res.status(200).json({data})
  } catch(e) {
    next({
      status: 404,
      error: 'Contact could not be found'
    })
  }
}

async function checkForContact(req, res, next) {
  try {
    const data = await model.checkForContact(req.body)
    data.length === 0
      ? createContact(req, res, next)
      : res.status(200).json({data: data[0]})
  } catch (e) {
    next({status: 400, error: `Error checking for existing contact.`})
  }
}

async function createContact(req, res, next) {
  try {
    const data = await
    model.createContact(req.body)
    res.status(201).json(data)
  } catch (e) {
    next({status: 400, error: `Contact could not be added.`})
  }
}

async function deleteContact(req, res, next) {
  try {
    const id = req.params.contactId
    const response = await model.deleteContact(id)

    res.json({deleted: response})
  } catch (e) {
    next({status: 400, error: 'Could not delete Contact.'})
  }
}

async function editContact(req, res, next) {
  try {
    const id = req.params.contactId
    const data = await model.editContact(id, req.body)
    res.status(200).json({data})
  } catch(e) {
    next({
      status: 400,
      error: 'Could not update contact.'
    })
  }
}

module.exports = {
  getAll,
  getOne,
  createContact,
  checkForContact,
  deleteContact,
  editContact
}
