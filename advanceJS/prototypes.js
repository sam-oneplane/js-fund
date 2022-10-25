const person = {
    alive : true,
}

const musician = {
    plays : true,
}

//1.  this is object inheretence :  musician inherets from person

musician.__proto__ = person;
console.log(musician.alive); // true
console.log(musician);

// 2. using get/setPrototypeOf methods

Object.setPrototypeOf(musician, person);
console.log(Object.getPrototypeOf(musician));
console.log(musician.alive);

// 3. extend the prototyoe chain 

const guitarist = {
    strings : 6,
    // __proto__ : musician  example of old code 
}
Object.setPrototypeOf(guitarist, musician);
console.log(Object.getPrototypeOf(guitarist));
console.log(guitarist.__proto__);
console.log(Object.getPrototypeOf(guitarist) == guitarist.__proto__);

// 4,Object setter & getter

const Car = {
    doors : 2,
    seats : "vinyl",
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const laxuryCar = {};
Object.setPrototypeOf(laxuryCar, Car);
laxuryCar.seatMaterial = "leather";
console.log(laxuryCar);
console.log(Car);
console.log(laxuryCar.valueOf());

// walking up the chain from child to origin object 
// props snd methods are not copied
Object.keys(laxuryCar).forEach((key) => {
    console.log(key);
})
// if we use for (let in) it is iclude the inherited objects 
// from car (doors, seats, seatMaterial)

5. // Object constractor

function Animal(species) {
    this.species = species;
    this.eats = true;
}
// add inherited function to Animal object 
Animal.prototype.walks = function () {
    return `the ${this.species} is walking`;
}

const Bear = new Animal("bear");
// this 2 are the same :
console.log(Bear); // Bear proto is inherited from Animal prototype
console.log(Animal.prototype == Bear.__proto__);

console.log(Bear);


// ES6 class inheritence

class Vehicle {
    constructor() {
        this.wheels = 4 ;
        this.motorCCsize = 2000;
    }
    ready () {
        return "ready to go !";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super() ; // refferer to this of Vehicle
        this.wheels = 2;
        this.motorCCsize = 850;
    }

    ride () {
        return "my motor is hot";
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.ready());