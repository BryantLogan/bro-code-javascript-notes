//  slice() extracts a section of a string
//  and returns it as a new string,
//  withouth modifying the original string

let fullName = "Bryant Logan";
let firstName;
let lastName;

// firstName = fullName.slice(0, 6)
// lastName = fullName.slice(7);

lastName = fullName.slice(fullName.indexOf(" "));

console.log(firstName)