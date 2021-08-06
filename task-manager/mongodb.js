const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect to database!")
  }

  const db = client.db(databaseName)

  db.collection('users').findOne({_id: new ObjectId("610d3365f4e66a3d524248c7")}, (error, user) => {
    if (error) {
      return console.log("Unable to fetch.")
    }

    console.log(user)
  })

  db.collection('users').find({ age: 27 }).toArray((error, users) => {
    console.log(users)
  })

  db.collection('users').find({ age: 27 }).count((error, count) => {
    console.log(count)
  })

  db.collection('tasks').findOne({_id: new ObjectId("610d216b984e7ce1d3cf939f")}, (error, task) => {
    console.log(task)
  })

  db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    console.log(tasks)
  })
})

