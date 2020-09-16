
const request = require("request");

    

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=868157da81943da5024b085aaebfa379&query=' + encodeURIComponent(longitude) + ',' + encodeURIComponent(latitude) + '&units=f'

    let temp;
    let cloud;
    let pressure;
    let humidity;
    request({url, json:true}, (error, {body}) =>{
        if(error){
            callback('unable to connect', undefined)
        }else if(body.error){
            console.log('error', body.error);
            callback('unable to find location, try again', undefined)
        }else {
            temp = body.current.temperature;
            cloud = body.current.cloudcover;
            pressure = body.current.pressure;
            humidity = body.current.humidity;
            callback(undefined, "Temperatura powietrza: " + temp + "C. Niebo jest pokryte chmurami w " + cloud + "procentach. Ciśnienie atmosferyczne wynosi " + pressure + "Hg. Wilgontość Powietrza to " + humidity + "%")
        }
    })
};


module.exports = forecast;