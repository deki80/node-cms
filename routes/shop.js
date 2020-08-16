const express = require('express')

const router = express.Router()

const productsController = require('../controllers/products')

router.get('/products', productsController.getAllProducts)

router.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'My Web Shop' })
})

module.exports = router
