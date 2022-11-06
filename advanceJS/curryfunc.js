// currying takes a function of 2 or more parameter 
// and brake it into a series of unary function
// so a curried  function takes one parameter at a time


// 1.
const curryMul = x => y => x * y;
console.log(curryMul(6)(7));
// partial applied functions
const tempFunc = curryMul(10);
console.log(tempFunc(5));

// 2.
const buildSami = g1 => g2 => g3 => `${g1}-${g2}-${g3}`;
console.log(buildSami('ham')('cheese')('bread'));


//3.
const updateElementText = id => content => 
    document.querySelector(`#${id}`).textContent = content;
const updateHeader = updateElementText('header')("fuck man it's working"); // updateElementText(id = 'header)
console.log(updateHeader);


// 4.
// function composition
const addOrder = (fn) => (...args) => {
    console.log(`saving customer ${args[0]}`);
    return fn(...args);
}

const processOrder = (fn) => (...args) => {
    console.log(`process customer ${args[0]}`);
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`order ${[...args].toString()} received.`);
}

completeOrder = processOrder(completeOrder);
console.log(completeOrder);
completeOrder = addOrder(completeOrder);
console.log(completeOrder);
completeOrder = completeOrder(1000);



// curry wrapper function
const curry = (fn) => {
    return curried = (...args) => {
        // args = [10] in 1st iter [10,20] in 2nd and [10,20,40] in third 
        if (fn.length !== args.length) {
            return curried.bind(null, ...args); // create a new func
        }
        // total(10,20,40)
        return fn(...args);
    }
}

const total = (x,y,z) => x + y + z;
const curryTotal = curry(total);
console.log(curryTotal(10)(20)(40));
console.log(curryTotal(10,20,40));



