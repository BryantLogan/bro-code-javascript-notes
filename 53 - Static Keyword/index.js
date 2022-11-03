// static = belongs to the Class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods:    useful for utility functions

class Car{

    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");
const car4 = new Car("Ferrari");
const car5 = new Car("Lambo")

console.log(Car.numberOfCars);
Car.startRace();