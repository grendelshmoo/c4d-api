const router = require('express').Router()
const ctrl = require('../controllers/records')
// const auth = require('../lib/auth')

// add auth.isLoggedIn middleware
router.get('/', ctrl.getAll)
router.get('/search', ctrl.search)
router.get('/:id', ctrl.getOne)

// router.post('/', auth.isLoggedIn, ctrl.login)

module.exports = router
