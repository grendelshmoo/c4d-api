const router = require('express').Router()
const ctrl = require('../controllers/contacts')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:contactId', auth.isLoggedIn, ctrl.getOne)
router.post('/', auth.isLoggedIn, ctrl.checkForContact)
router.delete('/:contactId', auth.isLoggedIn, ctrl.deleteContact)
router.patch('/:contactId', auth.isLoggedIn, ctrl.editContact)

module.exports = router
