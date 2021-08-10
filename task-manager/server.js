const express = require('express')

const app = express()

app.listen(3001, () => {
  console.log("Server started on ....")
})

app.use('/test', (req, res, next) => {
  try {
    throw new Error("New error")
  } catch (e) {
    next(e)
  }
})

// setTimeout(() => {
//   // process.exit(0)
//   throw new Error("Error")
// }, 3000)