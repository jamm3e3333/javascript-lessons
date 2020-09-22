const request = require('request');
const apiKey = '107f1eed6767999491c3bdf3fe219d0d';

weather = (city,cb) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=${apiKey}&units=metric`;
    request({url: url, json: true},(error,response) => {
        if(error){
            cb('The url doesn\'t exist!',undefined);
        }
        else{
            cb(undefined,response);
        }
    });
}

infos = (data) => {
    if(!data){
        return '';
    }
    else{
        weatherInfo = {
            main: data.body.weather[1],
            temp: data.body.main.temp,
            feels_like: data.body.main.feels_like,
            pressure: data.body.main.pressure,
            humidity: data.body.main.humidity    
        }
    return weatherInfo;
    }
}

module.exports = {
                    weather,
                    infos
                }