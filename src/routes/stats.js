const router = require('express').Router()
const ctrl = require('../controllers/stats')
const auth = require('../lib/auth')

// add auth.isLoggedIn middleware
router.get('/breakdown', auth.isLoggedIn, ctrl.getStats)
router.get('/graph1', auth.isLoggedIn, ctrl.getRecordsByDate)
router.get('/graph2', auth.isLoggedIn, ctrl.getRecordsByMunicipality)



module.exports = router
