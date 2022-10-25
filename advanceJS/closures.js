
// immediately invoked function expresion (IIFE)
// 1.
const credits = ((num) => {
    let cred = num;
    console.log(`initial credits : ${cred}`);
    return () => {
        cred -= 1;
        if (cred > 0) {
            console.log(`${cred} credits remining`);
        }else{
            console.log("no more credits for you");
        }
    }
})(3);

credits();

// 2. 
const privateCounter = (() => {
    let counter = 0;
    console.log(`initial counter : ${counter}`);
    return () => {counter += 1; console.log(`counter : ${counter}`);}
})();

privateCounter();
privateCounter();


