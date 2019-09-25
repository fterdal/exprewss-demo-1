const express = require('express')
const morgan = require('morgan')
const path = require('path')
const homepage = require('./views/homepage')
const kittenRoutes = require('./kittenRoutes')
// const { kittens } = require('./utils')
const client = require('./db')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))

app.use('/kittens', kittenRoutes)

app.get('/', async (req, res, next) => {
  const data = await client.query(`
    SELECT * FROM kittens;
  `)
  const kittens = data.rows
  res.send(homepage(kittens))
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
