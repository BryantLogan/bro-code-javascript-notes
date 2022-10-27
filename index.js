let userName = "bryant";
let items = 3;
let total = 75;

let text =
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;

// console.log(text);
document.getElementById("myLabel").innerHTML = text;