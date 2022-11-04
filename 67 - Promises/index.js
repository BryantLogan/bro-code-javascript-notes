// promise =    object that encapsulates the result of an asynchronous operation
//              let asynchronous methods return values like synchronous methods
//              "I promies to return something in the future"

//              the STATE is 'pending' then: 'filfilled' or 'rejected'
//              the RESULT is what can be returned
//              2 parts: producting & consuming

/*
const promise = new Promise((resolve, reject) => {

    let fileLoaded = false;

    if(fileLoaded){
        resolve("File loaded");
    }
    else{
        reject("File not loaded");
    }
});

promise.then(value => console.log(value))
        .catch(error => console.log(error));
*/

const wait = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

wait(3000).then(() => console.log("Thanks for waiting"))