// **********************
// shallow and deep copy
// **********************

// shallow
const x = [1,2,3,4];
const y = Object.assign([], x);
console.log(x === y);

x.push([5,6]);
const z = [...x];
z[4].push(7);
console.log(z);
console.log(x); // nasted arrays share the same referance in shallow copy

// Array.from , slice() also create shallow cp

const scoreObj = {
    "1st" : 44,
    "2nd" : 52,
    "thrd" : { 
        "a" : 1, 
        "b" : 2,
    },
}

Object.freeze(scoreObj); // shallow
scoreObj.thrd.a = 8;
console.log(scoreObj);

// deep copy can be implamanted using libs like lodash & Ramda

// solution 1 without data type 
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);


// deep recirsive clone
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

// we can use deepClone to create pure functions


