// super =  Refers to the parent Class.
//          Commonly used to invoke constructor of a parent class

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{

    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.runSpeed = swimSpeed;
    }
}

class Hawk extends Animal{

    constructor(name, age, flySpeed){
        super(name, age);
        this.runSpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);