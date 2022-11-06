// immediately invoked function expression 

/*
templates:

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

// iife in global scope with recursion immediately invoked when saving file running on browser 
(function f() {
    num++;
    console.log(num);
    return num < 5 ? f(num) : console.log('done'); 
})(num = 2);


// iife to reset counter with closure counter
const increment = (() => {
    let counter = 0; // init counter is reset once when function is initiated
    console.log(counter); 
    const credits = (num) => console.log(`num of credits ${num}`);
    return () => {
        counter++ ;
        credits(counter);
    }
})();
// increment = () => {counter++; credits(counter)} 
// the lexical scope enables access to counter and credits by increment()
// counter & credits are private to increment (not accessible in the global scope)
increment();
increment();


// module pattern with iife
const Score = (() => {
    // private var
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


// inject namespace object
((namespace) => {
    namespace.count = 0;
    // using  function() so we can use this.
    namespace.inc = function() {this.count++ ;};
    namespace.current =  function() {return this.count;};
    namespace.reset = function() {this.count = 0 ;};
})(window.App = window.App || {}) // injecting a namespace (window.App) into iife
//window : root object in the global scope  

App.inc() ;
console.log(App.current());
App.reset();
console.log(App.current());

