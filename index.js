let firstName = "Bryant"; 
let age = 33;
let student = true;

age = age + 1;

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student)

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are  " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

//This is a comment

/*

    This
    is
    a
    multiline
    comment
*/