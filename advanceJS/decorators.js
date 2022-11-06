// decorator function cover and returns other function with additional functionality



//1. core function
let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

let max = (...args) => {
    return Math.max(...args);
}

// func decorator for fn using lexical scope when inc count 
const callCounter = (fn) => {
    let count=0;
    // closure decorator using inc counter
    return (...args) => {
        console.log(`fn has been could : ${count += 1} times`);
        return fn(...args);
    }
}

const f = callCounter(sum);  // f = (...args) => {console.log(count+1); return sum(...args)}
console.log(f(1,4,5));
console.log(f(3,5));
console.log(f(14,5, 7, 0));
const m = callCounter(max);
console.log(m(14,5, 7, 0));


//2. checking validity of func params 
let rectArea = (height, width) => {
    return height*width ;
}
// decorator for rectArea
const countParams = (fn) => {
    return (...params) => {
        if(params.length != fn.length) {
            throw new Error(`incorrect number of params for ${fn.name}`);
        }
        return fn(...params);
    }
}

// decorator for rectArea
const requireInteger = (fn) => {
    return (...params) => {
        params.forEach((param) => {
            if (! Number.isInteger(param)) {
                throw new TypeError("param for function must be int");
            }
        });
        return fn(...params);
    }
}

rectArea = requireInteger(countParams(rectArea));
console.log(rectArea(8, 16));
//console.log(rectArea(10, "ten")); // yield error "param of function must be int"
 


// 3. async await decorator
let requestData = async (url) => {
    try{
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }catch(err) {
        console.error(err);
    }
}
// decorator for requestData
const dataResponseTime = (fn) => {
    return async (url) => {
        // write on consol the time it takes to fetch url data
        console.time('fn');
        const data = await fn(url) ;
        console.timeEnd('fn');
        return data ;
    }
}

const testF = async () => {
    requestData = dataResponseTime(requestData); 
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}

testF();