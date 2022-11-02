// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

// store.get("t-shirt");
// store.set("hat", 40);
// store.delete("hat");
// console.log(store.has("underwear"));
// console.log(store.size);


store.forEach((value, key) => console.log(`${key} $${value}`))