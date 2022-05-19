const {
  getTodos,
  getTodo,
  addTodo,
  removeTodo,
  toggleTodo,
} = require('./todos')

const id = addTodo('Prepare dinner')

const newTodo = getTodo(id)
console.log('newly added todo', newTodo)

toggleTodo(id)
toggleTodo(id)

removeTodo('6fa7ab28-65ed-42e0-9408-5d8755c4c57c')

console.log(getTodos())
