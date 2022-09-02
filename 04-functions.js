function sum(a, b){
    return a+b;
}

console.log(sum(10,10));

function product(a, b){
    return a*b;
}

console.log(product(12,12));

//Variable with the function "product"
const bigProduct = product(341,123);

//Anonymous Functions
//These are functions that have the same rules - they need an input, output and logic,** but the major difference here is that we don't give these functions a name**, hence anonymous.

//Callbacks
//In JavaScript, callbacks are functions that can be used as inputs to another function.

//setTimeout has two parameters, the function and 1000.
//The function is the behavior that should happen, and the time in milliseconds is how long we should wait for that behavior to happen.
//You could put a function name but it is not common in JS.
setTimeout(function () {
    console.log("Hey you rock!");
}, 1000);

//Arrow functions
//Arrow functions are just like standard functions, except for there's a bit of syntactic difference.
// In arrow functions, if you have one line of code, the arrow function assumes that is your return value.
// With arrow functions, if you want to use more than one line of code, you have to bring the curly braces {} back and then you will have to use the return keyword as well.
setTimeout(() => console.log("Hey you rock!"), 1000);