// immidiatly invoked function expresion 

/*
tamplates:

(() => {
    do staff 
})()

(function() {
    do staff 
})()

(function name() {
    do staff 
})()

*/

(function f() {
    num++;
    console.log(num);
    return num != 5 ? f(num) : console.log('done'); 
})(num = 1);


const increment = (() => {
    counter = 0; // init counter called once
    console.log(counter);
    return () => {
        counter++;
        console.log(counter);
    }
})();

increment();

const Score = (() => {
    count = 0;
    // private methods
    current = () => {return count;};
    inc = () => {count++ ;};
    reset = () => {count = 0;};

    return {
        current : current,
        inc : inc, 
        reset : reset,
    }
})() ;

Score.inc();
console.log(Score.current());
Score.inc();
console.log(Score.current());


// inject namespace
((namespace) => {
    namespace.count = 0;
    namespace.inc = function() {this.count++ ;};
    namespace.current =  function() {return this.count;};
    namespace.reset = function() {this.count = 0 ;};
})(window.App = window.App || {})

App.inc() ;
console.log(App.current());


// Hoisting 

const initApp = () => {
    console.log(stepOne);
    stepOne(); // anonimous func  not declared at this point 
}

// event listener for all content of initApp
document.addEventListener("DOMContentLoaded", initApp);

// anonimous func  declared stepOne initializid
const stepOne = () => {
    console.log("stepOne");
}
