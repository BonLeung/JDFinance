var express = require('express')
var router = express.Router()

var app = express()

router.get('/', function (req, res, next) {
  req.url = '/index.html'
  next()
})

app.use(router)

app.use(express.static('./dist'))

module.exports = app.listen(8000, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('listening at localhost:8000\n')
})
