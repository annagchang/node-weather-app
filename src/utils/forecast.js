const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2dec353885aa1841d34cb71644ea7cee&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json: true}, (error, {body}) => { //used to be (error, response) but refactoring
        if (error) {
            callback('Unable to connect.', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '.')
        }
    })
}

module.exports = forecast