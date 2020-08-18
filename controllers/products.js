const Product = require('../models/product')

exports.getAllProducts = (req, res, next) => {
  Product.findAll()
    .then(products => {
      res.render('shop', {
        pageTitle: 'All products',
        products: products
      })
    })
    .catch(error => console.log(error))
}

exports.getSingleProduct = (req, res, next) => {
  const productId = req.params.productId
  Product.findByPk(productId)
    .then(product => {
      res.render('single', {
        pageTitle: 'Single Product Page',
        product: product
      })
    })
    .catch(error => console.log(error))
}

exports.addProductPage = (req, res, next) => {
  res.send('<form action="/admin/submit-product" method="POST">Title<input type="text" name="title"><br>Image Url<input type="text" name="imageUrl"><br>Price<input type="number" step="0,2" name="price"><br>Description<textarea name="description"></textarea><button type="submit">Submit</button></form')
}

exports.submitProduct = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  Product.create({
    title: title,
    imageUrl: imageUrl,
    price: price,
    description: description
  })
    .then(res => {
      console.log(res)
    })
    .catch(error => console.log(error))

  res.redirect('/products')
}
