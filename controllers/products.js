exports.getAllProducts = (req, res, next) => {
  res.render('shop', { pageTitle: 'All products' })
}

exports.addProductPage = (req, res, next) => {
  res.send('<form action="/admin/submit-product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form')
}

exports.submitProduct = (req, res, next) => {
  const product = req.body
  console.log(product.title)
  res.redirect('/products')
}
