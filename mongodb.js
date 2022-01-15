//learning CRUD in node

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to Database!')
  }

  const db = client.db(databaseName)

  // db.collection('users').insertOne({
  //   name:"Julien",
  //   age: 27
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }
  //   console.log(result.insertedId)
  // })
  // db.collection('users').insertMany([
  //   {
  //     name:"josh",
  //     age: 20
  //   }, {
  //     name:"rio",
  //     age:30
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert Document!')
  //   }
  //   console.log(result.insertedIds)
  // })
  db.collection('tasks').insertMany([
    {
      description:"study Node.js",
      completed: false
    }, {
      description:'study React',
      completed: false
    }, {
      description: 'study Ruby on Rails',
      completed: true
    }
  ], (error, result) => {
    if (error) {
      return console.log('Unable to insert Document!')
    }
    console.log(result.insertedIds)
  })
})
