// high order function is a function that receive a function as a parameter
// and can return a function


// compose function : Ramda.js and lodash.js (flow = pipe) lib

const mul5 = (x) => 5*x ;
const add2 = (x) => x+2 ;
const sub1 = (x) => x-1 ;

const divBy = (y,x) => x/y;

// compose using reduce on fn list and curring
// ************************************************       
const compose = (...fns) => val => 
        fns.reduceRight((prev, fn) => fn(prev), val);
// (in init stage prev = val)     
// ************************************************               

const composeRes = compose(mul5, sub1, add2)(4);
console.log(composeRes);

// use as pipe function with reduce reverse function order
// ************************************************
const pipe = (...fns) => val => 
        fns.reduce((prev, fn) => fn(prev), val);

// ************************************************

const pipeRes = pipe(add2, sub1, mul5)(4);
console.log(pipeRes);


const pipeWithDiv = pipe(add2, sub1, mul5, (x) => divBy(2,x))(6);
console.log(pipeWithDiv);


// smarter solution to replace divBy
const divByNum = (y) => (x) => x/y ;
const divBy2 = divByNum(2);   // divByNum(2)

const pipeRes3 = pipe(
    add2,
    sub1,
    mul5,
    divByNum(2),
)(6);
console.log(pipeRes3);


 // 2.
const text = "In academic writing, readers expect each paragraph to have a sentence or two that captures its main point. They’re often called “topic sentences,” though many writing instructors prefer to call them “key sentences.” There are at least two downsides of the phrase “topic sentence.” First, it makes it seem like the paramount job of that sentence is simply to announce the topic of the paragraph. Second, it makes it seem like the topic sentence must always be a single grammatical sentence. Calling it a “key sentence” reminds us that it expresses the central idea of the paragraph. And sometimes a question or a two-sentence construction functions as the key."

const splitSeq = (string) => string.split(' ');
const count = (arr) => arr.length;

// pipe
const wordCount = pipe(
    splitSeq,
    count
);
console.log(wordCount(text));



// 3.
/*
const pipe = (...fns) => val => 
        fns.reduce((prev, fn) => fn(prev), val);
*/

// clone an object before mutate it
const score = {home:0, away:0};
const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : {...obj};
const incObjHome = (obj) => {
    obj.home+=1;
    return obj;
}


// pipe 
const incHome = pipe(
    shallowClone,
    incObjHome,
)(score);
console.log(incHome);


//curry pure inc after shallow clone
let incHomeB = (cloneFn) => (obj) => {
    const newObj = cloneFn(obj);
    newObj.home += 1 ;
    return newObj;
}
const pipeRes5 = pipe(
    incHomeB(shallowClone),
)(score); 
console.log(pipeRes5); 


// pure function
let incHomeC = (obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1 ;
    return newObj;
} 
 const incField = (x) => incHomeC(x, shallowClone); 
const pipeRes6 = pipe(
    incField,
)(score);
console.log(pipeRes6); 


// optional chaining operator (?.)
let myArr = [];
console.log(myArr?.length ? true : false);

myArr = [{'id' : 1}];
console.log(myArr?.[0]?.id ? true : false); // check first element in array 

// using with null coalescing operator (??)
console.log(myArr?.[0]?.name ??  "Not a name property"); // check first element in array 
