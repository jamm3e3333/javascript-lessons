const para = document.querySelector('p');

//console.log(para.innerText);

//para.innerText += ', ahoj ja jsem carovny';
const par = document.querySelectorAll('p');

par.forEach(paras => {
    paras.innerText += ', this is a para bitch';
})

const content = document.querySelector('.content');
//console.log(content.innerHTML);
//content.innerHTML += '<h2> This is a new element &quot;h2&quot; <h2/>';

const people = ['mario','luigi','pedro'];


people.forEach(pep => {
    content.innerHTML += `<p>person: ${pep}</p>`;
})