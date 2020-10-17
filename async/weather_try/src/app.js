//importing npm packages
const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const weather = require('./utils/weather.js');

const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const hbsPartials = path.join(__dirname,'../templates/partials')

app.set('view engine','hbs');
app.set('views', viewPath);
hbs.registerPartials(hbsPartials);

app.use(express.static(publicDirectoryPath));


app.get('',(req,res) => {
    res.render('index',{
        title: 'Weather App',
        name: 'Jakub Vala'
    })
});

app.get('/weather',(req,res) => {
    if(!req.query.address){
        return res.send({
            error: 'You must provide the address location.'
        });
    }
    weather.weather(req.query.address,(error,{body} = {}) => {
        if(error){
            res.send({
                error
            });
        }
        else if(body.cod != 200){
            res.send({
                error: body.cod
            })
        }
        else{
            res.send({
                body,
                address: req.query.address
            });
        }
    })
});

app.listen(3000, () =>{
    console.log('Server is listening on port 3000');
});