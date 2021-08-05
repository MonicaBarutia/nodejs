const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=c7c090f9923be6a9e8ca94dafb102757&query=' + latitude + ',' + longitude + '&units=m'

  request({url, json: true}, (error, { body } = {}) => {

    if (error) {
      callback("Unable to connect to weather service!")
    } else if (body.error) {
      callback("Unable to find location!")
    } else {
      const current = body.current
      callback(undefined, current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out. The humidity is " + current.humidity + "%.")
    }
  })
}

module.exports = forecast