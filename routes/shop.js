const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')
const pagesController = require('../controllers/pages')

router.get('/', pagesController.getIndex)
router.get('/products', productsController.getAllProducts)
router.get('/products/:productId', productsController.getSingleProduct)

module.exports = router
