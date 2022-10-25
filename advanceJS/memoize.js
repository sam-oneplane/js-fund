const mulBy10 = (x) => {
    return x * 10 ;
}

const add3 = (x1,x2,x3) => { 
   return  x1 + x2 + x3;
}

const tooMany = (...args) => {
    return args.reduce((acc ,x) => acc + x); 
}

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
    const mem1 = memoize(tooMany);
    console.log(mem1(1,3,4,5,8));
    console.log(mem1(1,3,4,5,8));
    console.log(mem1(1,3,4,5,8));
    console.log(mem1(4,5,8));
    console.log(mem1(4,5,8));
}

document.addEventListener("DOMContentLoaded", initApp);
// initApp is a sallback function