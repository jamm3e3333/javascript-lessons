const products = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'red shell', price: 5},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
];

/*
const saleProduct = products.filter((product) => {
    return product.price > 20;
});

console.log(saleProduct);


const promos = saleProduct.map(product => {
    return `the ${product.name} is ${product.price / 2}`;
});

console.log(promos);
*/
const promos = products
    .filter(product => {
        return product.price > 20;
    })
    .map(product => {
        return `the ${product.name} is ${product.price / 20}`;
    });

console.log(promos);

const saleProduct = products
    .filter(product => {
        return product.price > 20;
    })
    .map(product => {
        return {name: product.name, price: product.price/2};
    });
const sortedProduct = saleProduct.sort((a,b) => {
    return -b.price + a.price;
})

console.log(sortedProduct);
