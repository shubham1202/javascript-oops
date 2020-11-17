'use strict';

function Employee(name) {
    this.name = name;
};

let emp1 = new Employee('Shubham');
let emp2 = new Employee('Mike');

console.log(emp1);

// Add property to all objects created using constructor mode of Employee function
Employee.prototype.greet = () => console.log('Hello');

// Here greet() is added to both emp1 and emp2
console.log(emp2.greet());

// Using this method the objects created from same function can share 
// the properties without duplicacy

/****
 * Difference between class and protype is that in class we have to upfront declare all 
 * members and methods, but in prototype this is dynamic (means at runtime) we can add 
 * methods as properties to prototype and those are allocated to all other objects 
 * at runtime
 ****/