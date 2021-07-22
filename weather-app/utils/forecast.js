const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=c7c090f9923be6a9e8ca94dafb102757&query=' + longitude + ',' + latitude + '&units=m'

  request({url: url, json: true}, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!")
    } else if (response.body.error) {
      callback("Unable to find location!")
    } else {
      const current = response.body.current
      callback(undefined, current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out.")
    }
  })
}

module.exports = forecast