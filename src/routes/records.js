const router = require('express').Router()
const ctrl = require('../controllers/records')
const auth = require('../lib/auth')

// add auth.isLoggedIn middleware
router.get('/search', auth.isLoggedIn, ctrl.search)
router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:recordId', auth.isLoggedIn, ctrl.getOne)

router.post('/', auth.isLoggedIn, ctrl.createRecord)
router.post('/parties', auth.isLoggedIn, ctrl.addParties)
router.patch('/:recordId', ctrl.editRecord)
router.delete('/:recordId', ctrl.deleteRecord)



// router.post('/', auth.isLoggedIn, ctrl.login)

module.exports = router
