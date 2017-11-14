const express = require('../index.js')
const app = express()

let responseMessage = ''

app.get(function(req, res, next) {
  req.user = {
    name: 'foo'
  }
  next()
})

app.get(function(req, res, next) {
  res.end(`User name is ${req.user.name}`)
})

app.post(function(req, res, next) {
  res.end('You send POST request')
})

app.listen(3000)
