let myNum = 123456.789;

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});


console.log(myNum);