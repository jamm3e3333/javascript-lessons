const mouse = document.querySelector('.box');
const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () => {
    console.log('copying');
});

mouse.addEventListener('mousemove', e => {
    mouse.textContent = `the mouse is here \nx: ${e.offsetX}, y: ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX,  e.pageY);
});