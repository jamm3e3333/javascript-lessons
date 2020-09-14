const getTodos = (resource, cb) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            cb(undefined, data);
        }
        else if(request.readyState === 4){
            cb('could not fetch data', undefined);
        }
    });
    request.open('GET',resource);
    request.send();
};

getTodos('todos/luigi.json',(err, data) => {
    console.log(data);
    getTodos('todos/mario.json',(err,data) =>{
        console.log(data);
        getTodos('todos/pedro.json',(err, data) => {
            console.log(data);
        });
    });
});
