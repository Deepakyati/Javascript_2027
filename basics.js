console.log("Hello, World!");

// this is a single line comment

/*
This is a multi-line comment
that spans multiple lines.
*/


var name = "Deepak yati"; // variable declaration and initialization
var a = 30; // variable declaration and initialization

console.log(name);
console.log(a);


/* After ES6, 
we have two new ways to declare variables: let and const.
let and const are used to declare variables in JavaScript. 
The main difference between them is that variables declared with let can be reassigned, 
while variables declared with const cannot be reassigned after their initial assignment.  
*/

console.log(typeof name); // string
console.log(typeof age); // number

let b=34.6
console.log(typeof b); // number

let isStudent = true; // boolean
console.log(typeof isStudent); // boolean


//operators

let c=a+b
console.log(c); // 64.6

/* var vs let vs const

// var is function-scoped, while let and const are block-scoped. 
// This means that variables declared with var are accessible throughout the entire function in 
// which they are declared, 
// while variables declared with let and const are only accessible within the block in which they 
// are declared.

*/

