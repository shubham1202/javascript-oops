'use strict';

// __proto__ a.k.a "dunder" proto (dunder -> __)

// Prototype object has a property called constructor that points to the function of prototype itself

function Foo () {}

let obj = new Foo();

console.log(obj.__proto__.constructor);

let obj1 = new obj.__proto__.constructor();
console.log(obj1);

// Note: Do not use __proto__ property, we use prototype to define behaviour of objects

// dunder proto, protypes are just references, we can change them also
obj.__proto__.constructor = function bar() {};
let obj2 = new obj.__proto__.constructor;
console.log(obj2.__proto__.constructor);
console.log(obj1.__proto__.constructor);