const express = require('express')
const router = express.Router()
// const { kittens } = require('./utils')
// const { nextId } = require('./utils')
const client = require('./db')

router.get('/', async (req, res, next) => {
  const kittens = await client.query(`
    SELECT * FROM kittens;
  `)
  res.json(kittens.rows)
})

router.post('/', async (req, res, next) => {
  // Adds a kitten to the database (persistent)
  await client.query(`
    INSERT INTO kittens (name)
      VALUES ('${req.body.name}');
  `)

  // Adds a kitten to the in-memory array (not persistent)
  // kittens.push({
  //   id: nextId(kittens),
  //   name: req.body.name,
  // })
  res.status(201)
  res.redirect('/')
})

module.exports = router
