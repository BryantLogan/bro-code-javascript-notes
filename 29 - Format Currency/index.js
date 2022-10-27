// toLocaleString() = returns a string with a language 
//                    sensitive representation of this number

// number.toLocaleString(locale, {options});
// 'locale' = specify that language (undefined = default)
// 'options' = object with formatting options

// myNum = myNum.toLocaleString("en-US"); US English
// myNum = myNum.toLocaleString("hi-IN"); Hindi
// myNum = myNum.toLocaleString("de-DE");
let myNum = 100;


myNum = myNum.toLocaleString(undefined, {style: "percent"})
console.log(myNum);