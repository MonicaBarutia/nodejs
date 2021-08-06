const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!")
  }

  const db = client.db(databaseName)

//   db.collection('users').insertOne({
//     name: 'Monica',
//     age: 25
//   }, (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user.")
//     }
//
//     console.log(result.insertedId)
//   })

  // db.collection('users').insertMany([
  //   {
  //     name: "Jen",
  //     age: 28
  //   },
  //   {
  //     name: "John",
  //     age: 27
  //   },
  // ], (error, result) => {
  //   if (error) {
  //     return console.log("Unable to insert documents")
  //   }
  //
  //   console.log(result.insertedIds)
  // })

  db.collection('tasks').insertMany([
    {
      description: 'Clean the house',
      completed: true
    },
    {
      description: 'Go grocery shopping',
      completed: false
    },
    {
      description: 'Do the dishes',
      completed: true
    }
  ], (error, result) => {
    if (error) {
      return console.log("Unable to insert tasks.")
    }

    console.log(result.insertedIds)
  })
})

