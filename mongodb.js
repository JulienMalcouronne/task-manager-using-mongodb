//learning CRUD in node

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongod.ObjectId

const { MongoClient, ObjectID, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'



MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to Database!')
  }

  const db = client.db(databaseName)

  // DELETE

  // Delete many
  // db.collection('users').deleteMany({
  //   age: 27
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // Delete one

  // db.collection('tasks').deleteOne({
  //   description: "study Node.js"
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })
  // SOME UPDATE EXEMPLE

  // update one could check update operators on MongoDB doc
  // db.collection('users').updateOne({
  //   _id: new ObjectId("61e2c978a250f9939aaf6c5d")
  // }, {
  //   $set: {
  //     name:'Mikeee'
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  // add one to a number
  // db.collection('users').updateOne({
  //   _id: new ObjectId("61e2c978a250f9939aaf6c5d")
  // }, {
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // })

  //update many
  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => {
  //   console.log(result.modifiedCount)
  // }).catch((error) => {
  //   console.log(error)
  // })

 // SOME READ EXAMPLE

  // db.collection('users').findOne( {_id: new ObjectID('61e2d0f22e0e3d6bbe50318e')}, (error, user) => {
  //   if (error) {
  //     console.log('Unable to fetch')
  //   }
  //   console.log(user)
  // })

  // db.collection('users').find({ age: 27 }).toArray((error, users) => {
  //   console.log(users)
  // })

  // db.collection('users').find({ age: 27 }).count((error, count) => {
  //   console.log(count)
  // })

  // db.collection('tasks').findOne({_id: new ObjectID('61e2ce4b661b68f55a290a6f')}, (error, task) => {
  //   console.log(task)
  // })

  // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
  //   console.log(tasks)
  // })

  // SOME CREATE EXAMPLES

  // db.collection('users').insertOne({
  //   name:"Joris",
  //   age: 25
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
  // db.collection('tasks').insertMany([
  //   {
  //     description:"study Node.js",
  //     completed: false
  //   }, {
  //     description:'study React',
  //     completed: false
  //   }, {
  //     description: 'study Ruby on Rails',
  //     completed: true
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert Document!')
  //   }
  //   console.log(result.insertedIds)
  // })
})
