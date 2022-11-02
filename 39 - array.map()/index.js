// array.map() =    executes a provided callback funtion
//                  once for each array element
//                  AND creates a new array

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print)
cubes.forEach(print)


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}

function print(element){
    console.log(element);
}