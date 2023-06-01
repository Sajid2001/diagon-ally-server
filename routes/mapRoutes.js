const express = require('express');
const router = express.Router();
const mapsController = require('../controllers/mapsController')

router.get('/', mapsController.fetchLocation)

module.exports = router;