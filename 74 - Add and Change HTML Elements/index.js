// add/change HTML elements
// .innerhHTML (vulnerable to XSS attacks)
// .textContent (more secure)


// const nameTag = document.createElement("h1");
// nameTag.innerHTML = window.prompt("Enter your name");
// document.body.append(nameTag);

const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "mango";
// myList.append(listItem);
// myList.prepend(listItem);
myList.insertBefore(listItem, myList.getElementsByTagName("li")[2])