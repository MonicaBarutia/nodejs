const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath  = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setuop handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
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
    msg: 'For any problems visit this page.',
    name: 'Monica'
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