const express = require('express')

const app = express()
const port = 3000

// Registring the express JSON middleware so that we can send JSON data in request body
app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Welcome to Todo API Tutorial')
})

app.get('/todos', (req, res) => {
  return res.send('Not yet implemented')
})

app.get('/todo/:id', (req, res) => {
  return res.send('Not yet implemented')
})

app.post('/todo', (req, res) => {
  return res.send('Not yet implemented')
})

app.put('/todo/:id', (req, res) => {
  return res.send('Not yet implemented')
})

app.delete('/todo/:id', (req, res) => {
  return res.send('Not yet implemented')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
