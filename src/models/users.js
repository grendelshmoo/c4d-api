const { promisify } = require('util')
const db = require('../db')
const bcrypt = require('bcryptjs')

function login ({ email, password }) {
  return db('users')
    .where({ email })
    .then(async ([ user ]) => {
      if (!user) throw new Error()

      const isValid = await promisify(bcrypt.compare)(password, user.password)
      if (!isValid) throw new Error()

      return user
    })
}

module.exports = {
  login
}
