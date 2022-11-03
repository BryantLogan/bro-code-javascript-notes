// error =  object with a description of
//          something that went wrong

//          Can't open a fiel
//          Lose connection
//          User types incorrect input
//          TypeError

// throw =  Executes a user-defined error

try{
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "That wasn't a number!";

    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes");
}