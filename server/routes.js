const express = require('express');
const router = express.Router();
const products = require('./controllers/products.controller')
const mw = require('./middlewares/validquery')

router.get('/api/items', mw.validQueryParams,  products.getProducts);
router.get('/api/items/:id', products.getOneProduct);

module.exports = router;