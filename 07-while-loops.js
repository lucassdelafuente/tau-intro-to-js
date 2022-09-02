let password = "tomorrow";
let userGuess = "";

//So this means, as long as the condition is true, the loop will continue.
while (userGuess != password) {
    userGuess = prompt("Please enter your password: ");
}

alert("Login successful");

//While vs Do While
//The important difference is that the do while loop will run at least once, whereas with the while loop, there's no guarantee that it will run at least once.

// 5 * 4 * 3 * 2 * 1
let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number--
} while(number > 0);

console.log(original * " factorial is " + factorial);