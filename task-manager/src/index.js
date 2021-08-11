const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routers/task')
const userRouter = require('./routers/user')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled')
//   } else {
//     next()
//   }
// })

// app.use((req, res, next) => {
//   res.status(503).send('The site is currently under maintenance. Please try again soon.')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
  const task = await Task.findById('6113a1c15d01a24cec529634')
  await task.populate('owner').execPopulate()
  console.log(task.owner)

  const user = await User.findById('61139fe6d978f02d68a8e618')
  await user.populate('tasks').execPopulate()
  console.log(user.tasks)
}

main()