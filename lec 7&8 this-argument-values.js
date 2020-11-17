/**** Methods to call function *****/

/***
 * There are 2 arguments to a function call -> arguments and this
 */

/******** 
 * Method 1 - Calling standalone functions directly
 * this reference: The global object
********/ 
function foo() {
    console.log(this);
    console.log('Hello World');
}

foo();

/******** 
 * Method 2 - Calling functions as property of an object reference
 * this reference: The object reference
*********/ 
let obj = {'prop': 'This is the object itself'};

obj.foo = function() {
    console.log('Hello');
    console.log(this);
}

obj.foo();

/******** 
 * Method 3 - Calling standalone functions using `new` keyword
 * this refernce: The newly created object
********/ 
function foo1() {
    console.log('Constructor way of calling function');
    console.log(this);  
}

new foo1();

/********
 * Method 4 -
 * call method(property of function object)
 * is used to call a function and has an optional argument and
 * the reference of this binds to the argument object
 ********/

foo.call({});

