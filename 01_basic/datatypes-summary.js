// primitive 

// 7 types : String, Number, Boolean, null, undefined , BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false 

const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234567888n    
// Refrence (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "farhan",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}



// ++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap (Non-primitive)

let myYoutubename = "MFK VLOGS"

let anothername = myYoutubename
anothername = "farhankhan"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "farhan@google.com"

console.log(userOne.email);
console.log(userTwo.email);