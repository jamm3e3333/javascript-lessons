const now = new Date();


console.log(now);
console.log(typeof now);
console.log('Year: ', now.getFullYear());
console.log('Month: ', now.getMonth());
console.log('Date: ', now.getDate());
console.log('Date: ', now.getHours());
console.log('Date: ', now.getMinutes());
console.log('Date: ', now.getSeconds());

//TimeStamps
console.log('milliseconds: ', now.getTime());


//data strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());