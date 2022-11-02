
let count = 0;

document.getElementById("increaseButton").onclick = function(){
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}