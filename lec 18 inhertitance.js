'use strict';

function Employee (name) {
    this.name = name;
}

let emp = new Employee('Shubham');

Employee.prototype.getName = function () { return this.name };

console.log(emp.getName());

function Manager (name, dept) {
    this.name = name;
    this.dept = dept;
}

let mgr = new Manager('Pankaj', 'IT');

Manager.prototype.getDepartment = function () { return this.dept; }

console.log(mgr.getDepartment());

// mgr.getName() does not work

// Refer images
console.log(mgr.__proto__.__proto__ === Object.prototype);
// mgr.__proto__ = emp.__proto__; // Visualize this

// Manager get properties of Employee prototype (inherits prop. of emp)
mgr.__proto__.__proto__ = Employee.prototype;
console.log(mgr.getName());
    