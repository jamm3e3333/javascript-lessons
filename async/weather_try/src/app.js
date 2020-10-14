const fs = require('fs');
const path = require('path');
const express = require('express');
const dataJSON = fs.readFileSync('./weather.json');
const data = JSON.parse(dataJSON);
console.log(data);
const app = express();


const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates');

app.set('view engine','hbs');
app.set('views', viewPath);

app.use(express.static(publicDirectoryPath));

app.listen(3000, () =>{
    console.log('Server is listening on port 3000');
});


app.get('',(req,res) => {
    res.render('index',{
        name: data.name,
        country: data.country,
        temp: data.temp,
        feelsLike: data.feels_like,
        pressure: data.pressure
    });
});