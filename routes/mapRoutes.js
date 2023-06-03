const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/mapsController')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)

router.get('/', mapsController.fetchLocation)

module.exports = router;