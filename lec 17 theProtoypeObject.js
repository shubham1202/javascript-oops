'use strict';

/*** Whenever a function is created, a protype object is also created,
 * this prototype object is created using new Object(); 
 */

 function Employee () {}

 let emp = new Employee();

 /*******
  * Hierarchy of objectt references:
  * emp points to Employee prototype(dad)
  * Employee prototype points to Object protype(grandad)
  * Object prototype dunder's point to null (see images 17.1 17.2) 
  */

  emp.__proto__.__proto__.test = "This is grand parent property";
  console.log(emp.test);

  console.log(emp.__proto__.__proto__ === Object.prototype);

  Object.prototype.prop = "Global property"; // Sets a global prop. to every object
  console.log(emp.prop);

  console.log(emp.__proto__.__proto__.__proto__); // Main object prototype object points to null