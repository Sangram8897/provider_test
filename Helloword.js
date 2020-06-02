console.log('hello')
const items = [
    { name: 'bike', price: 2000 },
    { name: 'umbrella', price: 200 },
    { name: 'shirt', price: 1000 },
    { name: 'pant', price: 1200 },
    { name: 'laptop', price: 20000 },
    { name: 'shoes', price: 700 }
]

const lucky2 = items.filter((i) => {
    return i.price < 1000;
});
console.log(lucky2);