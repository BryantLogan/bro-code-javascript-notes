// The Date object is used to work with dates & times


// let date = new Date(0);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date("January 1, 2023 00:00:00");

/*
let year = date.getFullYear();
let dayOfMonth = date.getDate();
let dayofWeek = date.getDay();
let month = date.getMonth();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ms = date.getMilliseconds();
*/

/*
date.setFullYear(2024);
date.setMonth(11);
date.setDate(31);
date.setHours(23);
date.setMinutes(1);
date.setSeconds(30);
date.setMilliseconds(0);
*/

let date = new Date();

// date.toLocaleString();

document.getElementById("myLabel").innerHTML = formatDate(date)
document.getElementById("timeLabel").innerHTML = formatTime(date)
function formatDate(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

function formatTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amOrPm = hours >= 12 ? "PM" : "am"

    hours = (hours % 12) || 12;

    return `${hours}:${minutes}:${seconds} ${amOrPm}`
}