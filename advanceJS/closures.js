// lexical scope and closure 

//1,  cred is a private var of credits initialized once when 
//    (credits())(3) is immediately invoked by (num = 3)
//2,  it return a function () => {}  into const credits
//3,  when credits is called it is activating the returned function
//4.  cred is updated every call to credits() , it is in the scope 
//    of credits even if the original credits initiated by iife is not active  

// immediately invoked function expr. (IIFE)
// 1.
const credits = ((num) => {
    let cred = num; // private local scope
    console.log(`initial credits : ${cred}`);
    return () => {
        if (cred > 0) {
            cred -= 1;
            console.log(`${cred} credits remining`);
        }else{
            console.log("no more credits for you");
        }
    }
})(3);

credits();
credits();
credits();

// 2. 
const privateCounter = (() => {
    let counter = 0;
    console.log(`initial counter : ${counter}`);
    return () => {
        counter += 1; console.log(`counter : ${counter}`);
    }
})();

privateCounter();
privateCounter();


