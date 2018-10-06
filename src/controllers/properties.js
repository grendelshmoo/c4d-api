const model = require('../models/properties')
const risk = require('../models/risk')

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
  try {
    const data = await model.checkForProperty(req.body)
    data.length === 0
      ? createProperty(req, res, next)
      : res.status(200).json(data)
  } catch (e) {
    next({status: 400, error: `Error checking for existing property.`})
  }
}

async function createProperty(req, res, next) {
  try {
    console.log('BODY:', req.body);
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

async function getPropertyRecords(req, res, next) {
  try {
    const id = req.params.propertyId
    const data = await model.getPropertyRecords(id)
    res.status(200).json({data})
  } catch(e) {
    next({
      status: 400,
      error: 'Could not find records for property.'
    })
  }
}

async function getChainOfTitle(req, res, next) {
  try {
    const id = req.params.propertyId
    const data = await model.getChainOfTitle(id)
    res.status(200).json({data})
  } catch(e) {
    next({
      status: 400,
      error: 'Unable to get Chain of Title.'
    })
  }
}

function analyzeRisk (req, res, next) {
  try {
    const id = req.params.propertyId
    Promise.all([
      risk.easement(id),
      risk.legalaction(id),
      risk.taxes(id),
      risk.deceased(id),
      risk.contact(id)
    ]).then((data) => res.status(200).json({data}))
  } catch (e) {
    next({
      status: 400,
      error: 'Unable to analyze risk.'
    })
  }
}

module.exports = {
  getAll,
  getOne,
  checkForProperty,
  createProperty,
  deleteProperty,
  editProperty,
  getPropertyRecords,
  getChainOfTitle,
  analyzeRisk
}
