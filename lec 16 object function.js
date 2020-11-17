'use strict';

// Object function - global function that is present in global environment
console.log(Object);

// Both are same things
let obj = {};
let simple = new Object(); // Calling global object function in constructor mode

console.log(obj.__proto__); // Points to Object function proto
console.log(simple.__proto__); // ""

// Proves both objects are made using same global Object function
console.log(obj.__proto__.constructor);
console.log(simple.__proto__.constructor);

/*** When we do not create object using new keyword,
 implicitly it is created using new Object() only ***/