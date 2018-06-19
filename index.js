const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.json({
    name: 'kati frantz'
  })
})

app.get('/about', (request, response) => {
  response.send({
    name: 'kati frantz'
  })
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
