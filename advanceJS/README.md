# optional chaining operator (?.)

let myArr = [];
console.log(myArr?.length ? true : false);

myArr = [{'id' : 1}];
console.log(myArr?.[0]?.id ? true : false); // check first element in array 

# using with null coalescing operator (??)
console.log(myArr?.[0]?.name ??  "Not a name property"); // check first element in array 


# replace case/switch in js with Object or Map:

const ext = '.css' 
const extObj = {
    '.css': 'text/css',
    ... 
}

const res = extObj[ext] || 'text/html'

const extMap = new Map();
extMap.set('.css', 'text/css')
...

const res = extMap.get(ext) || 'text/html'


# check with array/json/Object

const isObj = myObj && myObj.length ? true : false

# optional chaining (same as above)

const isObj = myObj?.length ? true : false

const isObj = myObj?.[0]?.id ? true : false    // for [{"id" : 1234}] answer is true

# adding null coalescing operator

const isObj = myObj?.[0]?.id ?? "no id property"  // return the value of id property if true else the massage

# check if obj is an array

const isObj = Array.isArray(myObj) && myObj.length ? true : false

const isObj = Array.isArray(myObj) && myObj?.[0].id ? true : false


# innerHTML is bad 

it needs to re-parse re-create  all the DOM nodes in the document every time we call it
which take some time
use fragment 

const main = document.querySelector('main')  // grab main element
const fragment = document.createDocumentFragment();

## update document

const p = document.createElement('p')
p.textContent = `my value is ${x}'
fragment.append(p)

main.append fragment // main is part of the DOM

## create security issues