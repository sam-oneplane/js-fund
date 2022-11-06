
// Create all of the methods as separate functions
const prepare = () => {
    return {
        prepare: () => console.log('Preparing...')
    }
}

const bake = () => {
    return {
        bake: () => { console.log('Baking...'); return [1, 2, 3] }
    }
}

const toss = () => {
    return {
        toss: () => console.log('Tossing...')
    }
}

const ready = () => {
    return {
        ready: () => console.log('Ready!')
    }
}

const stuff = () => {
    return {
        stuff() { console.log('Stuffing the crust...') }
    }
}

const butter = () => {
    return {
        butter() { console.log('Buttering the crust...') }
    }
}

// Use composition to add the methods to the objects 
// You are never defining the same method twice!
const createPizza = (size, crust, sauce) => {
    // pizza object
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }

    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
}



const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
}

// Compare to ES6 Class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter()
    }
}



// 1. 
const basicPizza = createPizza("medium", "thin", "original");
console.log(basicPizza);
const davesPizza = createStuffedButteredCrustPizza(basicPizza);
console.log(davesPizza);
console.log(davesPizza.bake().reverse()); //chaining
// OR nested call
//const davesPizza =
//    createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));
const davesSalad = createSalad("side", "ranch");


// 2.
// add toppings to pizza without mutating original pizza 

//shallow copy using decorator function (imperative)
/*
const shallowPizzaClone = (fn) => {
    // return anonymous func that return fn with cloned newObj and arr 
    return (obj, arr) => {
        const newObj = {...obj};
        return fn(newObj, arr);
    }
}
*/


//shallow copy using curry function (declarative)
const shallowPizzaClone = (fn) => (obj, arr) => fn({...obj}, arr);

let addToppings = (pizza, toppings) => {
    pizza.toppings = [...pizza.toppings, ...toppings];
    return pizza;
}

console.log(addToppings);

addToppings = shallowPizzaClone(addToppings);
//we get addTopping(newPizza, tp_arr)
console.log(addToppings(createPizza("medium", "thin", "original"), ["olives", "cheese", "pepperoni"]));

const timsPizza = createPizza("medium", "thin", "original");
const timsNewPizza = addToppings(timsPizza, ["olives", "pepperoni"]);
console.log(timsNewPizza);

// all together
const myPizza = shallowPizzaClone(addToppings)(createPizza("large", "thick", "tomato"), ["green olives", "mushroom", "pepperoni"]);
console.log(myPizza);

