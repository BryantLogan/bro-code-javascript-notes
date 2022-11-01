
let prices = [5, 10, 15, 20, 25];

// iterate from beginning to end of list
// for(let i = 0; i < prices.length; i += 1){
//     console.log(prices[i]);
// } 


// iterate backwards
// for(let i = prices.length - 1; i >= 0; i -= 1){
//     console.log(prices[i]);
// } 

for(let price of prices){
    console.log(price);
}