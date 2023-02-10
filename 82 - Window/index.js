// window = interface used to talk to the web browser
//          the DOM is a property of the window

const myButton = document.querySelector("#myButton");

// console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com"
// console.log(window.location.hostname);
// console.log(window.location.pathname);

// myButton.addEventListener("click", () => window.open("https://google.com"));
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());

// window.alert("Hello!");
// window.confirm("Press OK to continue!");

let age = window.prompt("Enter your age");
if (age < 18) {
    window.alert("You must be 18+ to visit this site");
    window.close();
}
