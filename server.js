const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { nextId } = require('./utils')
const homepage = require('./views/homepage')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, 'public')))

const kittens = [
  { id: 1, name: 'Rigatoni' },
  { id: 2, name: 'Bowtie' },
  { id: 3, name: 'Penne' },
  { id: 4, name: 'Linguini' },
  { id: 5, name: 'Tortellini' },
]

app.get('/', (req, res, next) => {
  res.send(homepage(kittens))
})

app.get('/kittens', (req, res, next) => {
  res.send(kittens)
})

/*
Paste this in the browser dev tools' console:
fetch('/kittens', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({name: 'Collin'}) })
*/

app.post('/kittens', (req, res, next) => {
  kittens.push({
    id: nextId(kittens),
    name: req.body.name,
  })
  res.status(201)
  res.redirect('/')
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
