//1. using closure to log how many times func is called

let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num);
}

// func decorator 
const callCounter = (fn) => {
    let count=0;
    // closure decorator using inc counter
    return (...args) => {
        console.log(`fn has been could : ${count += 1} times`);
        return fn(...args);
    }
}

sum = callCounter(sum);
console.log(sum(1,4,5));
console.log(sum(3,5));
console.log(sum(14,5, 7, 0));


//2. checking valdity of func params 

let rectArea = (height, width) => {
    return height*width ;
}

const countParams = (fn) => {
    return (...params) => {
        if(params.length != fn.length) {
            throw new Error(`incorrect number of params for ${fn.name}`);
        }
        return fn(...params);
    }
}

const requireInteger = (fn) => {
    return (...params) => {
        params.forEach((param) => {
            if (! Number.isInteger(param)) {
                throw new TypeError(`param for function must be int`);
            }
        });
        return fn(...params);
    }
}

rectArea = countParams(rectArea);
rectArea = requireInteger(rectArea);
console.log(rectArea(8, 15));
//console.log(rectArea(10));
//console.log(rectArea(10, "ten"));
 
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

const dataResponseTime = (fn) => {
    return async (url) => {
        // write on consol the time it takes to fetch url data
        console.time('fn');
        const data = await fn(url) ;
        console.timeEnd('fn');
        return data ;
    }
}

const testFync = async () => {
    requestData = dataResponseTime(requestData);
    const data = await requestData('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
}

testFync();