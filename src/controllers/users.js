const model = require('../models/users')
const auth = require('../lib/auth')

async function login (req, res, next) {
  try {
    console.log('login here', req.body);
    const response = await model.login(req.body)
    const token = auth.createToken(response.id)

    res.json({ token })
  } catch (e) {
    next({ status: 401, error: `Email or password is incorrect` })
  }
}

module.exports = {
  login
}
