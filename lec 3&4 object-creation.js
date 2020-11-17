'use strict';

/***** When a function */

// Method 1
function createObj1(firstName, lastName, age) {
    let newObject = {};
    newObject.firstName = firstName;
    newObject.lastName = lastName;
    newObject.age = age;
    return newObject;
};

let obj1 = createObj1('Shubham', 'Goel', 25); // Use of new keyword before function call will work fine
console.log(obj1);

// Method 2 - constructor mode (In this 'this' is initialized to {} and returned - hypothetically)
function createObj2(firstName, lastName, age) {
    // let this = {};
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // return this;
};

let obj2 = new createObj2('Mike', 'Carey', 30); // W/o new keyword execution will fail
console.log(obj2);
