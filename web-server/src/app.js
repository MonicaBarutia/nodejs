const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
  res.send({
    forecast: "Mostly sunny, temperature 25 degrees, real feel 23 degrees",
    location: "Cluj Napoca"
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000.")
})