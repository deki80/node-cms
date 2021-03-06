const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')

const sequelize = require('./utils/database')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRouter)
app.use(shopRouter)

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found...</h1>')
})

sequelize.sync()
  .then(res => {
    // console.log(res)
    app.listen(3030)
  })
  .catch(error => {
    console.log(error)
  })
