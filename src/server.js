const express = require('express')
const {
  getTodos,
  getTodo,
  addTodo,
  removeTodo,
  toggleTodo,
} = require('./todos')

const app = express()
const port = 3000

// Registring the express JSON middleware so that we can send JSON data in request body
app.use(express.json())

app.get('/', (req, res) => {
  return res.send('Welcome to Todo API Tutorial')
})

app.get('/todos', (req, res) => {
  const todos = getTodos()
  return res.send(todos)
})

app.get('/todo/:id', (req, res) => {
  const id = req.params.id
  if (!id) {
    return res.status(400).end('Invalid Request')
  }

  const todo = getTodo(id)

  return res.send(todo)
})

app.post('/todo', (req, res) => {
  if (!req.body || !req.body.name) {
    return res.status(400).end('Invalid request')
  }

  const id = addTodo(req.body.name)

  return res.send(`Todo with id: ${id} has been successfully added`)
})

app.put('/todo/:id', (req, res) => {
  const id = req.params.id
  if (!id) {
    return res.status(400).end('Invalid Request')
  }

  toggleTodo(id)

  return res.send('Todo has been toggled successfully')
})

app.delete('/todo/:id', (req, res) => {
  const id = req.params.id
  if (!id) {
    return res.status(400).end('Invalid Request')
  }

  removeTodo(id)

  return res.send('Todo removed successfully')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
