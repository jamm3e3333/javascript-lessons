//fetch api

fetch('./todos/luigi.json').then((response) => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch((err) => {
    console.log('rejected',err);
})