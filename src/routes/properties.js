const router = require('express').Router()
const ctrl = require('../controllers/properties')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:propertyId', auth.isLoggedIn, ctrl.getOne)
router.post('/', ctrl.createProperty)
router.delete('/:propertyId', ctrl.deleteProperty)
router.patch('/:propertyId', ctrl.editProperty)


module.exports = router
