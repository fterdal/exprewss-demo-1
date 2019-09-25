const html = require('html-template-tag')

module.exports = function(kittens = []) {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="stylesheet" href="/style.css" />
        <title>Kitten Store</title>
      </head>
      <body>
        <div class="centered-container">
          <h1>Kitten Store</h1>
          <form>
            <label for="cat-name">Add Kitten</label>
            <input name="cat-name" type="text" />
            <button type="submit">Submit</button>
          </form>
          <ul>
            ${kittens.map(
              kitten =>
                html`
              <li>
                <p>${kitten.name}</p>
                <img src="https://robohash.org/${kitten.name}?set=set4"></img>
              </li>
            `
            )}
          </ul>
        </div>
      </body>
    </html>
  `
}
