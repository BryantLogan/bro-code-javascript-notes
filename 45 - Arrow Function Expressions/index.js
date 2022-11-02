// arrow function = compact alternative to a traditional function
//      =>

/*
const greeting = (userName){
    console.log(`hello ${userName}`)
}

OR

const greeting = userName => console.log(`Hello ${userName}`);

greeting("Bryant");
*/

/*
const percent = function(x,y){
    return x / y *100;
}

OR 

const percent = (x, y) => x / y * 100;

console.log(`${percent(75,100)}%`);

*/

let grades = [100, 50, 90, 60, 80, 70];

// grades.sort(function (x, y){
//     return y - x;
// });
// grades.forEach(function (element){
//     console.log(element);
// });

grades.sort((x, y) =>  y - x);

grades.forEach((element) => console.log(element));



