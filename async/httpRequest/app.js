const getTodos = (cb) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)
            cb(undefined, data);
        }
        else if(request.readyState === 4){
            cb('could not fetch data',undefined);
        }
    });


    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
};


getTodos((err, data) => {

    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(3);
console.log(4);