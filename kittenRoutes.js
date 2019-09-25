const express = require('express')
const router = express.Router()
const { kittens } = require('./utils')
const { nextId } = require('./utils')

router.get('/', (req, res, next) => {
  res.send(kittens)
})

router.post('/', (req, res, next) => {
  kittens.push({
    id: nextId(kittens),
    name: req.body.name,
  })
  res.status(201)
  res.redirect('/')
})

module.exports = router
