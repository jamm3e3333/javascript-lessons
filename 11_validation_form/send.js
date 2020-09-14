const form = document.querySelector('.sign-up');
const username = document.querySelector('#name');

username.addEventListener('keyup', e => {
    console.log(e);
    const pattern = /^[a-zA-Z0-9]{6,}$/;
    const nm = e.target.value;
    if(pattern.test(nm)){
        e.target.setAttribute('class','ok');
    }
    else e.target.setAttribute('class','wrong');
})