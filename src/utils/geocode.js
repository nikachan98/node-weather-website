const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoid2Vyb25pa2E5OCIsImEiOiJja2VicGdjdTcwMjA0MnFwbmQ5OGI1NGc2In0.PjILy3LoSG2nijjGqSGC5w&limit=1'

    request({url, json: true}, (error, {body})=> {
        if(error) {
            callback('unable to connect', undefined)
        }else if(body.message === "Not Found"){
            callback('invalid location, try a diffrent search', undefined)
        }else {
            console.log('body', body);
            callback(undefined, {
                latitude: body.features.length ? body.features[0].center[0] : '40.3916',
                longitude: body.features.length ? body.features[0].center[1] : '111.8508',
                location: body.features.length ? body.features[0].place_name : 'Lehi'
            })
        }

        
    })
}


module.exports = geocode;