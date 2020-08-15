const express = require('express')

const router = express.Router()

router.get('/products', (req, res, next) => {
  res.send('<p>This is a products route</p>')
})

router.get('/', (req, res, next) => {
  res.send('<p>First one</p>')
})

module.exports = router
