const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')
const pagesController = require('../controllers/pages')

router.get('/products', productsController.getAllProducts)

router.get('/', pagesController.getIndex)

module.exports = router
