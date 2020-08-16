const express = require('express')

const path = require('path')

const router = express.Router()

const viewsDir = require('../util')

router.get('/products', (req, res, next) => {
  res.send('<p>This is a products route</p>')
})

router.get('/', (req, res, next) => {
  res.sendFile(path.join(viewsDir, '/index.html'))
})

module.exports = router
