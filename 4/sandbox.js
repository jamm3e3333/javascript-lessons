const para = document.querySelectorAll('p');
   /*
para.forEach(p => {
 
    let er = p.innerText.indexOf('error');
    let suc = p.innerText.indexOf('success');
    if(er >= 0){
        p.classList.add('error');
    }
    else if(suc >= 0){
        p.classList.add('success');
    }
})
*/
para.forEach(par => {
    if(par.textContent.includes('error')){
        par.classList.add('error');
    }
    else if(par.textContent.includes('success')){
        par.classList.add('success');
    }
})

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');
/*
para.classList.add('error');
para.classList.remove('error');
para.classList.add('success')
*/