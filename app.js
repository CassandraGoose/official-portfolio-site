const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
require('dotenv').config()


if (process.env.NODE_ENV !== 'test') {
  const logger = require('morgan')
  app.use(logger('dev'))
}


app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '/../', 'node_modules')))


app.use(cors({
  allowedOrigins: [
    'http://127.0.0.1:3000/'
  ], [
    'http://127.0.0.1:8080/'
  ]
}))

app.use('/secrets', require('./routes/secrets'))

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: path.join(__dirname, 'public')
  })
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//   next()
// })

app.use(function(err, req, res, next) {
  res.status(err.status || 500)

  res.json({
    message: err.message,
    error: req.app.get('env') === 'development' ? err : {}
  })
})

app.listen(process.env.PORT || 3000)

module.exports = app
