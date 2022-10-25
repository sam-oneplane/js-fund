const curryMul = x => y => x * y;

console.log(curryMul(6)(7));

const tempFunc = curryMul(10);
console.log(tempFunc(5));

// partialy applied functions
const updateElementText = id => content => 
    document.querySelector(`#${id}`).textContent = content;
const updateHeader = updateElementText('header'); // updateElementText(id = 'header)
updateHeader("fuck man it's working");


// function composition
const addOrder = (fn) => (...args) => {
    console.log("saving customer info...");
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`order ${[...args].toString()} recieved.`);
}

completeOrder = addOrder(completeOrder);
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



