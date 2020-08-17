exports.getIndex = (req, res, next) => {
  res.render('index', { pageTitle: 'My Web Shop' })
}
