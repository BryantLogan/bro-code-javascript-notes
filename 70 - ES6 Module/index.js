// The idea behind a module is that it's a file of reusable code
// Can import sections of pre-written code to use whenever
// Great for any general utility values and functions
// Helps make your code more reusable and maintainable
// Like seperate chapters of a book

// import {PI, getCircumference, getArea} from "./math_util.js"

import * as MathUtil from "./math_util.js"
console.log(MathUtil.PIPI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);