const sub_1 = document.querySelector('.sign-up');
const name = document.querySelector('#name');
const feedback = document.querySelector('.feedback');

sub_1.name.addEventListener('onkeypress',e => {
    console.log(e)
});

sub_1.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(name.value);
    //console.log(sub_1.name.value);
    const username = sub_1.name.value;
    const patternName = /^[a-zA-Z]{6,12}$/;
    
    if(patternName.test(username)){
        //feedback good info
        feedback.innerHTML = `<p>${username}</p>`;
    }
    else{
        alert('The username is not in the correct form!');
    }
});

//testing RegEx
const usname = 'shaunbery';
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(usname);

if(result){
    console.log('regEx test passed');
}
else console.log('regEx test failed');

let res = usname.search(pattern);
console.log(res);

/*
const sub = () => {
    if(confirm('Do you wish to submit?')){
        return true;
    }
    else {
        return false;
    }
}
*/
