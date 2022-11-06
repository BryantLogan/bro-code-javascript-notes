/*
let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";
*/

/*
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    if(fruit.checked){
        console.log(fruit.value)
    }
})
*/

/*
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";
*/

/*
let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";
*/

/*
let element = document.querySelector("#myTitle");
element.style.backgroundColor = "lightgreen";
*/

let elements = document.querySelectorAll("li");
elements.forEach(element => {
    element.style.backgroundColor = "lightgreen"
})