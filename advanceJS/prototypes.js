const person = {
    alive : true,
    age: 52,
}
const musician = {
    plays : true,
}

const musician2 = {
    sing : "solo",
    plays : "guitar",
}

//1. object inheritance :  musician inherits from person

musician.__proto__ = person; // {alive: true, plays: true}
console.log(musician.alive); // true

// ********************************
// no circular inheritance allowed
// __proto__ must be Object or Null
// Object can inherit only from other Object
// ********************************  


// 2. using get/setPrototypeOf methods

Object.setPrototypeOf(musician2, person); // musician2 inherits from person
console.log(Object.getPrototypeOf(musician2)); // {alive: true, plays: true}
console.log(musician2); // true

// 3. extend the prototype chain 

const guitarist = {
    strings : 6,
    // __proto__ : musician  example of old code 
}
Object.setPrototypeOf(guitarist, musician2);
console.log(Object.getPrototypeOf(guitarist));
console.log(Object.getPrototypeOf(guitarist) == guitarist.__proto__); // true

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

const newCar = {};
Object.setPrototypeOf(newCar, Car);
console.log(newCar);
newCar.seatMaterial = "leather"; // use get  to get new Car.seats and update newCar.seats
console.log(newCar);

// walking up the chain from child to origin object 
// props snd methods are not copied
Object.keys(newCar).forEach((key) => {
    console.log(key);  // one key created by:    newCar.seatMaterial = "leather";
})
// if we use for (let in) it is include the inherited objects 
// from car (doors, seats, seatMaterial)
for (let key in newCar) {
    console.log(key);
}


5. // Object constructor function
function Animal(species) {
    this.species = species;
    this.eats = true;
}

// add inherited function to Animal object using prototype
// prototype store method that can be inherited
Animal.prototype.walks = function () {
    return `the ${this.species} is walking`;
}

// create an Object from function
const Bear = new Animal("bear");
// this 2 are the same :
console.log(Bear); // Bear proto is inherited from Animal prototype
console.log(Animal.prototype === Bear.__proto__); 
// the Bear __proto__  is mat he has inherits from Animal.prototype 
// which is store method that can be inherited (walks) 


// ES6 class inherit

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
        super() ; // referer to this 
        this.wheels = 2;
        this.motorCCsize = 850;
        this.bikeType = "road";
    }

    ride () {
        return "my motor is hot";
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.ready());