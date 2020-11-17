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