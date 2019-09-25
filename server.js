const express = require('express')
const morgan = require('morgan')
const path = require('path')
const homepage = require('./views/homepage')
const kittenRoutes = require('./kittenRoutes')
const { kittens } = require('./utils')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/kittens', kittenRoutes)

app.get('/', (req, res, next) => {
  res.send(homepage(kittens))
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

module.exports = kittens
