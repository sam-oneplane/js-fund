
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
    // pizza parameters
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
const anotherPizza = createPizza("medium", "thin", "original");
const davesPizza = createStuffedButteredCrustPizza(anotherPizza);
// OR
//const davesPizza =
//    createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));
const davesSalad = createSalad("side", "ranch");

// 2.
davesPizza.bake();
console.log(davesPizza.bake().reverse()); //chaining
davesPizza.stuff();
davesSalad.prepare();
console.log(davesPizza);

// add topings to pizza without mutating original pizza 

/*
closure function
const shallowPizzaClone = (fn) => {
    // return anonimous func that return fn with cloned newObj and arr 
    return (obj, arr) => {
        const newObj = {...obj};
        return fn(newObj, arr);
    }
}
*/


//curry function
const shallowPizzaClone = (fn) => (obj, arr) => fn({...obj}, arr);

let addToppings = (pizza, tp_arr) => {
    pizza.toppings = [...pizza.toppings, ...tp_arr];
    return pizza;
}

addToppings = shallowPizzaClone(addToppings);
//we get addTooping(newPizza, tp_arr)


const timsPizza = createPizza("medium", "thin", "original");
const timsNewPizza = addToppings(timsPizza, ["olivs", "pepperoni"]);
console.log(timsPizza);
console.log(timsNewPizza);


