const chalk = require('chalk');
/*
console.log(Math.PI);
console.log(Math.E);

const pi = Math.PI;

console.log(Math.trunc(pi));
console.log(Math.trunc(Math.random()*10));
*/
let random = Math.random();

console.log(chalk.black.bgYellowBright(Math.round(random*100)));