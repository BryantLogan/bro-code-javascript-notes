// nested functions =   Functions inside other functions.
//                      Outer functions have access to inner functions
//                      Inner functions are "hidden" from outside the outer function
//                      used in closures

let userName = "Bryant";
let userInbox = 0;

/*
displayUserName();
displayUserInbox();

function login(){
    displayUserName();
    displayUserInbox();
}

function displayUserName(){
    console.log(`Welcome ${userName}`);
}

function displayUserInbox(){
    console.log(`You have ${userInbox} new messages`)
}
*/

login();

function login(){
    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }

    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}



