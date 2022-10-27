// Function =   Define code once, and use it many times.
//              To perform some code, call the function name.

startProgram();

function startProgram(){
    let userName = "Bryant"
    let age = 33
    
    happyBirthday(userName, age);
    
}

function happyBirthday(userName, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear", userName);
    console.log("Happy birthday to you!");
    console.log("You are", age,"years old!");
}
