function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = () => {
        this.tirePressure+=3; 
    }
}

let bicycle = new Bicycle(50, 20, 4, 28);
bicycle.inflateTires(); // In inflate tire function, this is referred to object on which inflateTires() is called
console.log(bicycle);

function Mechanic(name) {
    this.name = name;
}

let Mike = new Mechanic('mike');
Mike.inflateTires = bicycle.inflateTires;
/******** 
 * call method(property of function object)
 * is used to call a function and has a optionl argument and
 * the reference of 'this' binds to the argument object
 ********/  
Mike.inflateTires.call(bicycle); // here inflate tires will be called on this keyword of bicycle
console.log(Mike);
console.log(bicycle);