const nextId = arr => {
  return 1 + arr.reduce((highest, item) => {
    if (item.id > highest) return item.id
    return highest
  }, -Infinity)
}

module.exports = {
  nextId
}
