// JavaScript source code
const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    name: { type: String, required: true },
    concerns: { type: Array, required: true },
});

const Store = mongoose.model('Store', StoreSchema);

function getStoreDocument(req, res, next) {
    Store.findOne({ name: req.store.name }, (err, store) => {
        if (err || !store) {
            res.status('400').json({ status: 'store-missing' });
        }
        req.storeDocument = store;
        next();
    });
}

module.exports = { StoreSchema, Store, getStoreDocument };