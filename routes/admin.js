const express = require('express')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
  res.send('<form action="/admin/submit-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form')
})

router.post('/submit-product', (req, res, next) => {
  const product = req.body
  console.log(product.title)
  res.redirect('/products')
})

module.exports = router
