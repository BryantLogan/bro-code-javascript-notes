//  method chaining =  calling one method after another 
//                     in one continuous line of code

let userName = "bryant";

// let letter = userName.charAt(0);
// letter = letter.toUpperCase()

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter)