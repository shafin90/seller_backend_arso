const storeService = require('../services/storeService');

async function createStore(req, res) {
    try {
        const createStore  = await storeService.createStore(req.body);
        res.status(201).json({ message: 'Store created successfully', store: createStore });
    } catch (error) {
        resizeBy.status(500).json({ error: error.message });
    }
}

async function uploadProduct(req, res) {
    try {
        const uploadProduct = await storeService.uploadProduct(req.body);
        res.status(201).json({ message: 'Product uploaded successfully', product: uploadProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createStore, uploadProduct };