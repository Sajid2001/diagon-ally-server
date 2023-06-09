const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController')
const requireAuth = require('../middleware/requireAuth')

//require auth for all routes here
router.use(requireAuth)

router.get('/categories', dataController.findCategories);
router.post('/categories', dataController.addCategory);
router.put('/categories/:id', dataController.addLocation);
router.put('/categories/:id/:locationID', dataController.removeLocation);
router.delete('/categories/:id',dataController.deleteCategory);

module.exports = router;