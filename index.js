let element = document.querySelector("#fruit");
let children = Array.from(element.children);

children.forEach(child => child.style.backgroundColor = "lightgreen");