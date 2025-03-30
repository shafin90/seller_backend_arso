

async function createStore(req, res) {
    try {

    } catch (error) {
        resizeBy.status(500).json({ error: error.message });
    }
}

async function uploadProduct(req, res) {
    try {
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createStore, uploadProduct };