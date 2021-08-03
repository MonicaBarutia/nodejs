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
  if(!req.query.address) {
    return res.send({
      error: "You must provide an address!"
    })
  }
  
  res.send({
    forecast: "Mostly sunny, temperature 25 degrees, real feel 23 degrees",
    location: "Cluj Napoca",
    address: req.query.address
  })
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provide a search term!"
    })
  }

  console.log(req.query.search)
  res.send({
    products: []
  })
})

app.get('/help/*', (req,res) => {
  res.render('404', {
    error: "Help article not found.",
    title: "404 - Not found",
    name: "Monica"
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    error: "Page not found",
    title: "404 - Not found",
    name: "Monica"
  })
})

app.listen(3000, () => {
  console.log("Server is up on port 3000.")
})