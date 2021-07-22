const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=c7c090f9923be6a9e8ca94dafb102757&query=37.8267,-122.4233&units=m'

request({url: url, json: true}, (error, response) => {
  if (error) {
    console.log("Unable to connect to weather service!")
  } else if (response.body.error) {
    console.log("Unable to find location!")
  } else {
    const current = response.body.current
    console.log(current.weather_descriptions[0] + ". It is currently " + current.temperature + " degrees out. It feels like " + current.feelslike + " degrees out.")
  }
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibW9uaWI1IiwiYSI6ImNrcmV4MjI5OTBzZ2MzMW9lNGdzNTQ2dngifQ.nHNbhdm-GjPzyzRIhYQasQ&limit=1'

request({url: geoUrl, json: true}, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service!")
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Please try again with another search term!")
  } else {
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log("Latitude: " + latitude + " Longitude: " + longitude)
  }
})