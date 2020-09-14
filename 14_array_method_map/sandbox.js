const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const product = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
]


const salePrices = prices.map((price) => {
    return price / 2;
});

console.log(salePrices);

const halfPrice = product.map((prod) => {
    if(prod.price > 30){
        return {name: prod.name, price: prod.price/2};
    }
    else return prod;
});

console.log(halfPrice, product);