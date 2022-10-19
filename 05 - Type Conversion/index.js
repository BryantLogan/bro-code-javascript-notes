// Type Conversion =    change the dataype of a value to another
//                      (strings, numbers, booleans) 

let age = window.prompt("How old are you?");

age = Number(age); //converts input string to Number datatype
age += 1

console.log("Happy Birthday! You are", age, "years old");

let x;
let y;
let z;

// Converts string to number
x = Number("3.14"); 

// Converts number to string
y = String(3.14);

// Converts string to boolean
z = Boolean("pizza");

// prints value of x to console, and datatype of x
console.log(x, typeof x)
// prints value of y to console, and datatype of y
console.log(y, typeof y)
// prints value of z to console, and datatype of z
console.log(z, typeof z)