//const clock = document.querySelector('.clock');
const now = new Date();
console.log(dateFns.isToday(now));
console.log(dateFns.format(now, 'YY'));
console.log(dateFns.format(now,'dddd'));
console.log(dateFns.format(now,'Do'));
console.log(dateFns.format(now, 'dddd, Do, MMMM, YYYY'));

// comparing dates
const before = new Date('February 1 2019 12:00:00');
console.log(dateFns.distanceInWords(now, before));
/*
const tick  = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
   
    const html = `
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>
    `;
    clock.innerHTML = html;
    console.log(h, m, s);
};


setInterval(tick, 1000);
*/