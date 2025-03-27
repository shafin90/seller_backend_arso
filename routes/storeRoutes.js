const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.post('/create-store', storeController.createStore);
router.post('/upload-product', storeController.uploadProduct);


module.exports = router;