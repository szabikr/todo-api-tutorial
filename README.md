# Todo REST API Tutorial

- `practice` folder contains the project scaffolding but it leaves the actual implementation of the todos functionality blank
- `complete` folder contains the full solution

### Project setup and run

Navigate to either of the folders and run

- `npm i` to install all dependencies
- `npm run dev` to run the development environment

The server will be listening on `http://localhost:3000`

### Project instructions

#### Build out the functions that handle the following requests

- Welcome page: `GET /`
  <br />**Returns** a Welcome message for the Client
- Get all Todos: `GET /todos`
  <br />**Returns** the `todos` in an array
- Get one Todo by its `id`: `GET /todo/:id`
  <br />**Returns** a JSON object with the properties of the requested todo or `undefined` if there's no todo with that `id`
- Add Todo by providing its name: `POST /todo` Body contains a JSON object with the `name` of the todo
  <br />**Returns** the `id` of the newly created todo entry or `undefined` if the operation wasn't successful
- Toggle Todo: `PUT /todo/:id` which changes the `isDone` property of the todo to the opposite that it was previously
  <br />**Returns** a JSON object with the properties of the updated todo or `undefined` if there's no todo with that `id`
- Remove Todo by ID: `DELETE /todo/:id`
  <br />**Returns** a boolean indicating wether the delete was successful or not

#### Data structure for todos:

```
[
  {
    id: string,
    name: string,
    isDone?: boolean,
  },
  ...
]
```

- For `id` we are using **UUID**s that gives us the certainty that all of them will be unique
- Notice that `isDone` property is optional so `undefined` would also mean that the todo is incomplete

#### Technical details

- For the purpose of this tutorial we want the todos to be an inmemory array
- The operations performed on `todos` array must be immutable
- The request body (where applicable) should be validated and in case of an invalid data structure a `Status Code 400` should be returned with the message of `Invalid Request`
- All requests should result in a `Status Code 200` if no `Invalid Reqest`s were made

### Tech that we use

- [node](https://nodejs.org/en/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - package manager
- [prettier](https://prettier.io/) - code formatting
- [uuid](https://www.npmjs.com/package/uuid) - generate unique ids [more info](https://en.wikipedia.org/wiki/Universally_unique_identifier)
- [express](https://expressjs.com/en/starter/hello-world.html) - RESTful API engine
- [nodemon](https://github.com/remy/nodemon#nodemon) - Watching file changes and refreshing the app automatically
- [postman](https://www.postman.com/) - sending API requests to the server
