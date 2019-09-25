const nextId = arr => {
  return (
    1 +
    arr.reduce((highest, item) => {
      if (item.id > highest) return item.id
      return highest
    }, -Infinity)
  )
}

const kittens = [
  { id: 1, name: 'Rigatoni' },
  { id: 2, name: 'Bowtie' },
  { id: 3, name: 'Penne' },
  { id: 4, name: 'Linguini' },
  { id: 5, name: 'Tortellini' },
]

module.exports = {
  nextId,
  kittens,
}
