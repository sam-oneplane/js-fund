// memoize caching function result for reuse like recursion
// good for pure function 


const mulBy10 = (x) => {
    return x * 10 ;
}

const add3 = (x1,x2,x3) => { 
   return  x1 + x2 + x3;
}

const sumByReduce = (...args) => {
    return args.reduce((acc ,x) => acc + x); 
}

const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2);
}

// decorator and closure function 
// **************************************
// good for pure function
const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if (args.toString() in cache) {
            console.log(cache);
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}
// **************************************


const initApp = async () => {
    //const mem1 = memoize(mulBy10);
    const mem1 = memoize(sumByReduce);
    console.log(mem1(1,3,4,5,8));
    console.log(mem1(1,3,4,5,8));
    console.log(mem1(1,3,4,5,));
    console.log(mem1(4,5,8));
    console.log(mem1(4,5,8));
    const mem2 = memoize(fib);
    console.log(mem2(30));
    console.log(mem2(30));
    console.log(mem2(30));

}

document.addEventListener("DOMContentLoaded", initApp);
// initApp is a callback function