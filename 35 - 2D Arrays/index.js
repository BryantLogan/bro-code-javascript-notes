// 2D array = An array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

// for(let list of groceryList){
//     console.log(list)
// }

groceryList[0][0] = "mangoes"; // replaces apples with mangoes
groceryList[2][2] = "steak"; // replaces fish with steak 

for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
}