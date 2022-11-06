// **********************
// shallow vs deep copy (clone)
// **********************

// shallow copy do nor share the same reference in memory (like y = x do)
// 
// shallow copy using Object.assign()
const x = [1,2,3,4];
const y = Object.assign([], x);
// shallow copy using spread operator:
const w = [...x];
w.push(5);
console.log(y === x); // false
console.log(w);
console.log(x);
console.log(w === x); // false

// rem: nested structure data type still share shallow copy [...[]] 
//      because it is a shallow copy
//      Array.from , Array.slice() also create nested shallow copy



const scoreObj = {
    "first" : 44,
    "second" : 52,
    "third" : { 
        "a" : 1, 
        "b" : 2,
    },
}

Object.freeze(scoreObj); 
scoreObj.third.a = 8;    // after freeze we still can muted third.a value
console.log(scoreObj);


// DEEP COPY - can be implemented using libs like lodash & Ramda
// libraries like Ramda, lodash ...
// solution 1 : deep copy without data type 
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(scoreObj === newScoreObj);   


// deep recursive clone
const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj ;
    const newObj = Array.isArray(obj)? [] : {} ;

    for (let key in obj) {
        const val = obj[key];
        newObj[key] = deepClone(val);
    }

    return newObj;
}

myScoreObj = deepClone(scoreObj); 
console.log(myScoreObj);
console.log(scoreObj === myScoreObj);

// we can use deepClone of object parameter to create pure functions 
const pureAddToScore = (array, score, cloneF) => {
    const newArray = cloneF(array); // we deep copy the array to newArray 
    newArray.push(score); // add element to newArray and return it. 
    return newArray;
}

newX = pureAddToScore(x, 7, deepClone);
console.log(newX);

// examples of pure function :
const pureAddToArray = (array, data) => [...array, data];

const arr = [1, 2, 3, 5, 6 ,7 ,8];
const odd = (arr) => arr.filter(e => e % 2 !== 0);
console.log(odd(arr))

const doubled = (arr) => arr.map(e => e*2);
console.log(doubled(arr))

const summed = (arr) => arr.reduce((acc, e) => acc + e);
console.log(summed(arr))