
const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

let shoppingCart = 0;

shoppingCart += store.get("t-shirt");
console.log(shoppingCart)

store.forEach((value, key) => console.log(`${key} $${value}`))