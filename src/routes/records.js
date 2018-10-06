const router = require('express').Router()
const ctrl = require('../controllers/records')
const auth = require('../lib/auth')

// add auth.isLoggedIn middleware
router.get('/search', auth.isLoggedIn, ctrl.search)
router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:recordId', auth.isLoggedIn, ctrl.getOne)

router.post('/', auth.isLoggedIn, ctrl.createRecord)
router.post('/parties', auth.isLoggedIn, ctrl.addParties)
router.delete('/parties/', auth.isLoggedIn, ctrl.removeParty)
router.patch('/:recordId', auth.isLoggedIn, ctrl.editRecord)
router.delete('/:recordId', auth.isLoggedIn, ctrl.deleteRecord)



// router.post('/', auth.isLoggedIn, ctrl.login)

module.exports = router
