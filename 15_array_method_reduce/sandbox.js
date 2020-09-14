const scores = [10, 20, 60, 40, 70, 90, 30];

const scores_0 = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60},
    {player: 'yoshi', score: 10}
];

const marioTotal = scores_0.reduce((acc, curr) => {
    if(curr.player === 'mario'){
        acc += curr.score;
    }
    return acc;
},0);

console.log(marioTotal);

const result = scores.reduce((acc, curr) =>{
    if(curr > 50){
        acc++;
    }
    return acc;
}, 0);





console.log(result);

