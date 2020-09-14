const chalk = require('chalk');

/*const calcArea = (radius) => 3.14 * radius**2;

const Area = calcArea(5);
console.log(Area);

const greet = () => 'hello world';
const gr = greet();

console.log(gr);
*/
let products = new Array();
products = [1, 4 ,64, 4]
let people = ['mario','luigi','tony','shaun','deborah'];

const tax = 0.1;
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + (products[i] * tax);
    }
    return total;
}

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
}

myFunc((value) => {
    console.log(chalk.black.bgYellow(value));
});

console.log(chalk.whiteBright.bgCyan(Math.round(bill(products,tax)*100)/100));

const logPerson = (person, index) => {
    console.log(chalk.black.bgGreenBright(`${index} - hello ${person}`));
}

people.forEach(logPerson);


