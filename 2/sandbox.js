const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.seznam.cz');
link.innerText = 'the seznam page';
console.log(link.getAttribute('href'));
link.setAttribute('style','text-decoration: none');
link.setAttribute('style','color: pink');
console.log(link.getAttribute('style'));


const mssg = document.querySelector('p');
console.log(mssg.getAttribute('class'));

mssg.setAttribute('class','message');
console.log(mssg.getAttribute('class'));