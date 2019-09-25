const pg = require('pg')
const client = new pg.Client('postgres://localhost/kittenstore')

client.connect()

module.exports = client
