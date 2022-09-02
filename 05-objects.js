//Where do you store objects? In variables
//How can objects be created? Using objects literals and classes
//Object literal
const cookie = {
    //You can use "" if the name of the property has more than one word
    name: "Chocolate Chip",
    isGlutenFree: false,
    "+Yummy": true,
    eatCookie: function() {
        console.log("I'm eating " + this.name);
    }
};

//To get or set a object property
cookie.name = "Chip Chocolate";

//If the property has a special character, you need to use []
console.log(cookie["+Yummy"]);

//When should you use a Class vs Object literal?
//Object literals are great for representing unique structures but when we need to repeat that structure Classes are better.
//It is very similar to creating an object, but in the console you will see a special word to tell you what is the name of the class that created the object 
class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name;
        this.isGlutenFree = isGlutenFree;
    }

    //Inside of the class, you don't need the function keyword.
    eatCookie() {
        console.log("I'm eating " + this.name);
    }
}

// Which of these best describes the use of a constructor?
//Constructors allow you to set the values for the properties of an object during creation.

//Create a copy of the class cookie
const myCookie = new Cookie("Iced oatmeal", false);