// Convention to name constructor function start from capital letter -
// convention got from OOP based programming languages naming of classes
function Bicycle(cadence, speed, gear) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
}

// Constructor is not a property of function, it's done using new keyword
var bicycle = new Bicycle(50, 20, 4);