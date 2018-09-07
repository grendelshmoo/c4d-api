const model = require('../models/contacts')
// const resourceName = 'record'


async function getAll(req, res, next) {
  const data = await model.getAll()
  res.status(200).json({
    data
  })
}


module.exports = {
  getAll
}
