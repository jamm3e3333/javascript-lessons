const request = require('request');
const chalk = require('chalk');
const fs = require('fs');
const weather = require('./app.js');
const args = process.argv[2].toString();

if(!args){
    console.log('You didn\'t put any parmetres for the location!');
}
weather.weather(args,(error,data) => {
    if(error){
        console.log(error);
        fs.writeFileSync('./weather.json','');
    }
    else if(data.body.cod != 200){
        console.log(chalk.red.inverse('City not found'));
        fs.writeFileSync('./weather.json','');
    }
    else{
        weatherObj = weather.infos(data);
        dataParsed = JSON.stringify(weatherObj);
        console.log(data);
        fs.writeFileSync('./weather.json',dataParsed);
    }
});