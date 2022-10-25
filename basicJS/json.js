"use strict";

export const myObj = {
    name : "Sam",
    hobbies : ["eat", "sleep", "fuck"],
    sayHi: function () {
        return this.name + " Says fuck you";
    },
    // this does not work on anonimous functions
    hello : () => {
        const greetings = "greetings from " + myObj.name;
        return greetings;
    },
}

const sendJSON = JSON.stringify(myObj);

const receivedJSON = JSON.parse(sendJSON);
receivedJSON.hello = function() {
    const greetings = "Hello from " + this.name + " after parsing";
    return greetings;
};

export const sayHi = function() {
    return myObj.name + " Says fuck you after parsing";
};

export {receivedJSON};
