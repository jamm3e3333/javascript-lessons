const button = document.querySelector('button');
const html = document.querySelector('html');
const ul = document.querySelector('ul');
const mouse = document.querySelector('.mouse');
const items = document.querySelectorAll('li');
const text = document.querySelector('.txtAdd_1');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = text.value;
    ul.append(li);
});

/*
items.forEach(it => {
    it.addEventListener('click', e => {
        console.log('clicked the LI element');
        e.stopPropagation();

    });
});
*/

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});

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