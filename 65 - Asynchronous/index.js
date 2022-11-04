// synchronous code =   In an ordered sequence.
//                      Step-bystep linear instructions
//                      (start now, finish now)

// asynchronous code =  Out of sequence.
//                      Ex. Access a database
//                      Fetch a file
//                      Tasks that take time
//                      (start now, finish sometime later)

/*
console.log("Start");
console.log("This step is synchronous");
console.log("END");
*/

console.log("Start");
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("END");