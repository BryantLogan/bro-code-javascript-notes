

const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

/*
function begin(){
    let timerId = null;
    let x = 0;
    let y = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(x >=200 || y >= 200){
            clearInterval(timerId);
        }
        else{
            x += 1;
            myAnimation.style.left = x + "px";
            y += 1;
            myAnimation.style.top = y + "px";
        }
    }
}
*/

/*
function begin(){
    let timerId = null;
    let degrees = 0;
    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360 || y >= 200){
            clearInterval(timerId);
        }
        else{
            degrees += 1;
            myAnimation.style.transform = "rotateX("+degrees+"deg)";
        }
    }
}
*/

function begin(){
    let timerId = null;
    let scaleX = 1; //100%
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX >= 2 || scaleY >= 2){
            clearInterval(timerId);
        }
        else{
            scaleX += 0.01;
            scaleY += 0.01;
            myAnimation.style.transform = "scale("+scaleX+","+scaleY+")";
        }
    }
}