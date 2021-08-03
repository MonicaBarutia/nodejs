const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Monica'
  })
})

app.get('/about', (req, res) => {
  res.render('about',{
    title: 'About',
    name: 'Monica'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    msg: 'For any problems visit this page.'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forecast: "Mostly sunny, temperature 25 degrees, real feel 23 degrees",
    location: "Cluj Napoca"
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000.")
})