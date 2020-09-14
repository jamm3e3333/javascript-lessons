const chalk = require('chalk');

const ul = document.querySelector('.people');

people = ['mario','luigi','ryu','shaun','chun-li'];

let html = ``;

people.forEach((person) => {
    html += `<li style="color: purple">${person}</li>`
})

console.log(chalk.black.bgGreenBright(html));

ul.innerHTML = html;