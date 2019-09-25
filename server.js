const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))

app.get('/', (req, res, next) => {
  res.send(`
    <h1>Homepage</h1>
    <p>${req.favoriteKitten} says meow!</p>
  `)
})

app.get('/api/kittens', (req, res, next) => {
  res.send(`{
    kittens: [
      { id: 1, name: 'Gerturde'},
      { id: 2, name: 'Spoods'},
    ]
  }`)
})



app.use((req, res, next) => {
  req.favoriteKitten = 'Gerturde'
  if (req.path.includes('secret')) {
    res.status(401)
    res.send('You arent allowed here')
  } else {
    next()
  }
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

