const express = require('express')

const router = express.Router()

router.get('/products', (req, res, next) => {
  res.render('shop', { pageTitle: 'All products' })
})

router.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'My Web Shop' })
})

module.exports = router
