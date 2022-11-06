// .firstElementChild
// .lastElementChild
// .parentElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// Array.from(.children)

let element = document.querySelector("#fruit");
let children = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "lightgreen");