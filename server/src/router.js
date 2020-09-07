// JavaScript source code
const express = require('express');
const stores = require('./stores');

function createRouter() {
    const router = express.Router();

    router.get('/store',
        stores.getStoreDocument,
        async (req, res, next) => {
            const store = req.storeDocument;
            res.status(200).json(store);
        });

    return router;
}

module.exports = createRouter;


