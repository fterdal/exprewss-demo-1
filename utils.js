const nextId = arr => {
  return arr.reduce((highest, item) => {
    if (item.id > highest) return item.id
    return highest
  }, -Infinity)
}

module.exports = {
  nextId
}
