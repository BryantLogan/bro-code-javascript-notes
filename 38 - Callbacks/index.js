//  callback =  a funtion passed as an argument
//              to another function

/*
let total = sum(2, 3);
displayDom(total)

function sum(x, y){
    let result = x + y;
    return result
}

function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById("myLabel").innerHTML = output;
}
*/

sum(2, 3, displayDom);

function sum(x, y, callBack){
    let result = x + y
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}

function displayDom(output){
    document.getElementById("myLabel").innerHTML = output;
}