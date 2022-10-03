const forecast = require('./utils/forecast')
const geoCode = require('./utils/geocode')

// taking input from user
const address = process.argv[2]

if (!address) {
    console.log('Please provide an address')
} else {
    //address --> latitude and longtiude
    geoCode(address, (error, {latitude, longtiude, location} = {}) => {
        if (error) {
            return console.log(error)
        }

        //latitude and longtiude --> forecast
        forecast(latitude, longtiude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}