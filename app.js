const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')
const expressHnb = require('express-handlebars')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const app = express()

app.engine('hbs', expressHnb({
  layoutsDir: 'views/layouts/',
  defaultLayout: 'default-layout',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found...</h1>')
})

app.listen(3030)
