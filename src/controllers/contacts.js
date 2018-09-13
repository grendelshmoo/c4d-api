const model = require('../models/contacts')
// const resourceName = 'record'


async function getAll(req, res, next) {
  const data = await model.getAll()
  res.status(200).json({
    data
  })
}

async function checkForContact(req, res, next) {
  try {
    const data = await model.checkForContact(req.body)
    data.length===0 ? createContact(req, res, next) : res.status(200).json( {data: data[0]} )

  } catch (e) {
    next({
      status: 400,
      error: `Error occured`
    })
  }
}

async function createContact(req, res, next) {
  try {
    const data = await
    model.createContact(req.body)
    res.status(201).json( data )
  } catch (e) {
    next({
      status: 400,
      error: `Contact could not be added`
    })
  }

}


module.exports = {
  getAll,
  createContact,
  checkForContact
}
