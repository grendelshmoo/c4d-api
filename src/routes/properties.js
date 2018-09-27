const router = require('express').Router()
const ctrl = require('../controllers/properties')
const auth = require('../lib/auth')

router.get('/', auth.isLoggedIn, ctrl.getAll)
router.get('/:propertyId', auth.isLoggedIn, ctrl.getOne)
router.get('/:propertyId/records', auth.isLoggedIn, ctrl.getPropertyRecords)
router.get('/:propertyId/chain', auth.isLoggedIn, ctrl.getChainOfTitle)
router.get('/:propertyId/analyze', auth.isLoggedIn, ctrl.analyzeRisk)
router.post('/', ctrl.createProperty)
router.delete('/:propertyId', ctrl.deleteProperty)
router.patch('/:propertyId', ctrl.editProperty)


module.exports = router
