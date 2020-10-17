const urlPage = '';
const loc = document.querySelector('.txtWeather');
const form = document.querySelector('form');
const place = document.querySelector('#location');
const weatherDat =document.querySelector('#weatherMsg');

form.addEventListener('submit', (e) => {
    const location = loc.value;
    place.textContent = 'Loading...';
    weatherDat.textContent = '';

    if(!location){
        console.log('Put some values!');
    }
    else{
        getWeather(`http://localhost:3000/weather?address=${location}`)
        .then(({body, address}) => {
            place.textContent= `Weather in ${address}, ${body.sys.country}:`;
            weatherDat.innerText = `${body.weather[0].description}\nTemperature: ${body.main.temp} °C\nFeels like: ${body.main.feels_like} °C\nPressure: ${body.main.pressure} hPa\nHumidity: ${body.main.humidity} %\n`;
        })
        .catch((err) => {
            place.textContent = 'Location not found.';
            weatherDat.textContent = '';
        });
    }
    e.preventDefault();
})


const getWeather = async (resource) => {
    const response = await fetch(resource);
    if(response.status != 200){
        throw Error('Data not fetched!');
    }
    const dataWeather = await response.json();
    return dataWeather;
}