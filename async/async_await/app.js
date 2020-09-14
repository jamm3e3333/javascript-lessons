//async & await

const getTodos = async (resource) =>{
    const response = await fetch(resource); //await a promise (returns a promise)
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await response.json(); //await a promise (returns a promise)
    return data;
};

console.log(1);
console.log(2);
getTodos('/todos/luigi.json')
    .then(data => {
        console.log('resolved 1:',data);
        return getTodos('/todos/mario.json');
})
    .then((data) => {
        console.log('resolved 2:', data);
        return getTodos('/todos/pedro.json');
    })
    .then((data) => {
        console.log('resolved 3:', data);
    })
    .catch((err) => {
        console.log('rejected',err.message);
    });
console.log(3);
console.log(4);
/*
fetch('./todos/luigi.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('rejected', err);
});*/