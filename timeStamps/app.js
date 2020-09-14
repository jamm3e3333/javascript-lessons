const now = new Date();
const before = new Date('September 1 2020 7:30:59');
const diff = now.getTime()-before.getTime();
const mins = Math.round(diff /(1000*60));
const hours = Math.round(mins /60);
const days = Math.round(hours/24);
console.log(`${mins} mins`);
console.log(`${hours} hours`);
console.log(`${days} days`);
console.log(now.getTime());
console.log(before.getTime());
console.log(`This site was created ${days} days ago`);

//converting timestamps
const timestamp = 167593847990;
console.log(new Date(timestamp));