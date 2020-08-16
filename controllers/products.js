const Product = require('../models/product')

exports.getAllProducts = (req, res, next) => {
  const products = Product.fetchAll()
  console.log(products)
  res.render('shop', { pageTitle: 'All products' })
}

exports.addProductPage = (req, res, next) => {
  res.send('<form action="/admin/submit-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form')
}

exports.submitProduct = (req, res, next) => {
  const product = new Product(req.body.title)
  product.save()
  res.redirect('/products')
}
