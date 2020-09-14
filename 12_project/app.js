const correctAnswers = ['A', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const res = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check answers
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += (1/correctAnswers.length)*100;
    }
    
  });
  //scroll to the top
  window.scrollTo(0,0);
  
  //remove the class for hiding 
  res.classList.remove('d-none');

  //animate the output
  let output = 0;
  const timer = setInterval(() => {
    res.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    }
    else{
      output++;
    }
  },5);

});

