const router = require('express').Router()
const ctrl = require('../controllers/records')
const auth = require('../lib/auth')

// add auth.isLoggedIn middleware
router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:recordId', auth.isLoggedIn, ctrl.getOne)
router.get('/search', auth.isLoggedIn, ctrl.search)


// router.post('/', auth.isLoggedIn, ctrl.login)

module.exports = router
