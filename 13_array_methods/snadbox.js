const scores = [10, 30, 15, 25, 50, 40, 5];


const filteredScore = scores.filter(score =>{
    return score > 20;
});

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
];


const premiumUser = users.filter(user =>  user.premium);
console.log(scores);
console.log(filteredScore);
console.log(premiumUser);
