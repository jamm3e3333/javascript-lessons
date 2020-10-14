const request = require('request');
const key = require('./keys.js');
const mode = 'json';

const weather = (city,cb) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=${key}&units=metric&mode=${mode}`;
    request({url: url, json: true},(error,response) => {
        if(error){
            cb('The url doesn\'t exist!',undefined);
        }
        else{
            cb(undefined,response);
        }
    });
}

const infos = ({body} = {}) => {
    if(!body){
        return '';
    }
    else{
        weatherInfo = {
            name: body.name,
            main: body.weather[0],
            temp: body.main.temp,
            country: body.sys.country,
            feels_like: body.main.feels_like,
            pressure: body.main.pressure,
            humidity: body.main.humidity    
        }
    return weatherInfo;
    }
}

module.exports = {
                    weather,
                    infos
                }
