const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')

router.get('/add-product', productsController.addProductPage)

router.post('/submit-product', productsController.submitProduct)

module.exports = router
