const fs = require('fs');

const file = fs.readFileSync('C:\\Users\\Uzivatel\\Desktop\\API\\key_weather.json');
const keyJSON = JSON.parse(file.toString());
const key = keyJSON.key;
module.exports = key;