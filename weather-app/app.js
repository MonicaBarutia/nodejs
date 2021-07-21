const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c7c090f9923be6a9e8ca94dafb102757&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})