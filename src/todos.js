const { v4: uuid } = require('uuid')

// Consider this as the initial state of the database
let todos = [
  {
    id: '0add280c-fc17-4d1d-803d-c57953818219',
    name: 'Drink water',
  },
  {
    id: '6fa7ab28-65ed-42e0-9408-5d8755c4c57c',
    name: 'Practice coding',
  },
  {
    id: '3427a6ac-b47f-473c-bc54-09983f06b6d2',
    name: 'Go running',
  },
]

function getTodos() {
  // We are creating a copy of the todos list and returning that one
  // -----
  // If we returned simply the todos array which is a reference
  // the elements could be modified outside of this module, which we don't want.
  // -----
  // By doing this our code respects immutability
  return [...todos]
}

function getTodo(id) {
  const todo = todos.find((todo) => todo.id === id)

  // In case of not finding todo with the requested id we will return undefined
  if (todo == undefined) {
    return undefined
  }

  // We respect the immutability so we create a copy of the todo that we've found
  return { ...todo }
}

function addTodo(name) {
  // uuid is a function that creates a Universally Unique Identifier
  // wiki: https://en.wikipedia.org/wiki/Universally_unique_identifier
  const id = uuid()

  todos.push({
    id,
    name,
  })

  return id
}

function removeTodo(id) {
  // filter every todo but the one with the id in function argument
  todos = todos.filter((todo) => todo.id !== id)
}

function toggleTodo(id) {
  let todo = todos.find((todo) => todo.id === id)

  if (todo.isDone) {
    todo.isDone = false
  } else {
    todo.isDone = true
  }
}

module.exports = {
  getTodos,
  getTodo,
  addTodo,
  removeTodo,
  toggleTodo,
}
