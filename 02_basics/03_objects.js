const mySymbol = Symbol("key1")

const jsUser = {
    [mySymbol] : "myKey1",
    name : "Nikhil",
    surname : "Rawat",
    age : 21,
    location : "Delhi",
    isLoggedIn : false
}

// console.log(jsUser.name)
// console.log(jsUser["name"]);


// console.log(typeof jsUser.mySymbol); // string type
//console.log(typeof jsUser[mySymbol]);

jsUser.email = "csh23050@gmail.com" // to change values
//Object.freeze(jsUser)  // no further change can be happen after freeze

jsUser.email = "nr@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`); // This is string interpolation
}

console.log(jsUser.greeting); 

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());