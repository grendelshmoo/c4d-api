const model = require('../models/properties')

async function getAll(req, res, next) {
  const data = await model.getAll()
  res.status(200).json({data})
}

async function getOne(req, res, next) {
  try {
    const id = req.params.propertyId
    const data = await model.getOne(id)
    res.status(200).json({data})
  } catch(e) {
    next({
      status: 404,
      error: 'Contact could not be found'
    })
  }
}

async function checkForProperty(req, res, next) {

}

async function createProperty(req, res, next) {
  try {
    const data = await
    model.createProperty(req.body)
    res.status(201).json(data)
  } catch (e) {
    next({status: 400, error: `Property could not be added.`})
  }
}

async function deleteProperty(req, res, next) {
  try {
    const id = req.params.propertyId
    const response = await model.deleteProperty(id)

    res.json({deleted: response})
  } catch (e) {
    next({status: 400, error: 'Could not delete Property.'})
  }
}

async function editProperty(req, res, next) {
  try {
    const id = req.params.propertyId
    const data = await model.editProperty(id, req.body)
    res.status(200).json({data})
  } catch(e) {
    next({
      status: 400,
      error: 'Could not update property.'
    })
  }
}

module.exports = {
  getAll,
  getOne,
  checkForProperty,
  createProperty,
  deleteProperty,
  editProperty
}
