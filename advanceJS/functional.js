const mul5 = (x) => 5*x ;
const add2 = (x) => x+2 ;
const sub1 = (x) => x-1 ;

const divBy = (y,x) => x/y;

// compose using reduce on fn list and curring
// ************************************************       
const compose = (...fns) => val => 
        fns.reduceRight((prev, fn) => fn(prev), val);
     
// ************************************************               

const composeRes = compose(mul5, sub1, add2)(4);
console.log(composeRes);

// use as pipe function with reduce reverse function oeder
// ************************************************
const pipe = (...fns) => val => 
        fns.reduce((prev, fn) => fn(prev), val);

// ************************************************

const pipeRes = pipe(add2, sub1, mul5)(4);
console.log(pipeRes);


const pipeRes2 = pipe(
    add2,
    sub1,
    mul5,
    (x) => divBy(2,x)
)(6);
console.log(pipeRes2);

// smarter solution to replace divBy
const divByNum = (y) => (x) => x/y ;
const divBy2 = divByNum(2);   // divByNum(2)

const pipeRes3 = pipe(
    add2,
    sub1,
    mul5,
    divBy2,
)(6);
console.log(pipeRes3);


// clone an object before mutate it
const score = {home:0, away:0};

const shellowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj};

//1. not pure inc
const incHome = (obj) => {
    obj.home += 1 ;
    return obj;


};
//2. curry pure inc after shellow clone
let incHomeB = (cloneFn) => (obj) => {
    const newObj = cloneFn(obj);
    newObj.home += 1 ;
    return newObj;
}

//3. 
let incHomeC = (obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1 ;
    return newObj;
} 


const pipeRes4 = pipe(
    shellowClone,
    incHome,
)(score);
console.log(pipeRes4);


incHomeB = incHomeB(shellowClone); // = (obj) => {}  where:cloneFn = shellowClone
const pipeRes5 = pipe(
    incHomeB,
)(score); 
console.log(pipeRes5); 


const pipeRes6 = pipe(
    (x) => incHomeC(x, shellowClone),
)(score);
console.log(pipeRes6); 


// optional chaining operator (?.)
let myArr = [];
console.log(myArr?.length ? true : false);

myArr = [{'id' : 1}];
console.log(myArr?.[0]?.id ? true : false); // check first element in array 

// using with null coalescing operator (??)
console.log(myArr?.[0]?.name ??  "No name prperty"); // check first element in array 
