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
          <form id="post-mew-kitten" method="POST" action="/kittens">
            <label for="name">Add Kitten</label>
            <input name="name" type="text" />
            <button type="submit">Submit</button>
          </form>
          <ul>
            ${kittens.map(
              kitten =>
                html`
              <li>
                <p>${kitten.name}</p>
                <img src="https://robohash.org/${kitten.name}?size=400x400&set=set4"></img>
              </li>
            `
            )}
          </ul>
        </div>
      </body>
      <script>
        const form = document.getElementById('post-mew-kitten')
        form.onsubmit = async event => {
          event.preventDefault()
          console.log('WHERE AM I RUNNING?')
          await fetch('/kittens', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: event.target[0].value,
            }),
          })
          window.location.reload()
        }
      </script>
    </html>
  `
}
