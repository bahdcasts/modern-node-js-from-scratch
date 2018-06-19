const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('public'))

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.get('/about', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'contact.html'))
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})
