
const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

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