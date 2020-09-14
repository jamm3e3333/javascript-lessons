const button = document.querySelector('button');
const html = document.querySelector('html');
const ul = document.querySelector('ul');
const mouse = document.querySelector('.mouse');

button.addEventListener('click', () =>{
    console.log('you clicked me');
});

const items = document.querySelectorAll('li');

items.forEach(it => {
    it.addEventListener('click', e => {
        console.log('item clicked');
        console.log(e.target);
        console.log(it);
        it.classList.toggle('line');
    })
})

html.addEventListener('mousemove', e => {
    mouse.innerText = (`mouse position\nx: ${e.clientX}, y: ${e.clientY}`);
})

/*
html.addEventListener('click', e => {
    console.log(`x: ${e.clientX}, y: ${e.clientY}`);
    const li = document.createElement('li');
    const txtNode = document.createTextNode(`the mouse was clicked on the axis x: ${e.clientX}, and on the axis y: ${e.clientY}`);
    li.appendChild(txtNode);
    ul.appendChild(li);
})
*/