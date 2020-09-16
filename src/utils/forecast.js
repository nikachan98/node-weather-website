
const request = require("request");

    

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=868157da81943da5024b085aaebfa379&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '&units=f'

    let temp;
    let cloud;
    request({url, json:true}, (error, {body}) =>{
        if(error){
            callback('unable to connect', undefined)
        }else if(body.error){
            console.log('error', body.error);
            callback('unable to find location, try again', undefined)
        }else {
            temp = body.current.temperature;
            cloud = body.current.cloudcover;
            callback(undefined, "The temperature is " + temp + "C and the sky is " + cloud + "% covered by clouds." )
        }
    })
};


module.exports = forecast;