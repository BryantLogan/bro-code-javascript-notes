// Canvas API =     a means for drawing graphics
//                  used for animations, games, data visualization

let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

/*
// Draw lines
context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.lineTo(250, 250);
context.lineTo(500, 0);
context.lineTo(250, 250);
context.stroke();
*/

/*
// Draw Triangle
context.strokeStyle = "grey";
context.fillStyle = "yellow";
context.lineWidth = 10;
context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.stroke();
context.fill();
*/

/*
// Draw Rectangle
context.fillStyle = "black"
context.fillRect(0, 0, 250, 250);
context.strokeStyle = "black"
context.strokeRect(0, 0, 250, 250);

context.fillStyle = "red"
context.fillRect(0, 250, 250, 250);
context.strokeStyle = "black"
context.strokeRect(0, 250, 250, 250);

context.fillStyle = "green"
context.fillRect(250, 250, 250, 250);
context.strokeStyle = "black"
context.strokeRect(250, 250, 250, 250);

context.fillStyle = "blue"
context.fillRect(250, 0, 250, 250);
context.strokeStyle = "black"
context.strokeRect(250, 0, 250, 250);
*/

/*
// Draw Circle
// (x, y, r, sAngle, eAngle, counterclockwise)
context.fillStyle = "lightblue";
context.strokeStyle = "darkblue";
context.lineWidth = 10
context.beginPath();
context.arc(250, 250, 200, 0, 2 * Math.PI);
context.stroke();
context.fill();
*/

// Draw text
context.font = "50px MV Boli";
context.fillStyle = "grey";
context.textAlign = "center";
context.fillText("YOU WIN!", canvas.width / 2, canvas.height / 2);