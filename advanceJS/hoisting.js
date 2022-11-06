// Hoisting 

stepTwo();

// this is a function declaration
// functions are hoisted so calling the function before 
// declaring it will work 
const initApp = () => {
    console.log(stepOne);
    stepOne(); // anonymous func  not declared at this point 
}

// event listener for all content of initApp
// must be declared after initApp not before  
document.addEventListener("DOMContentLoaded", initApp);

// anonymous func  declared stepOne initialized
function stepTwo() {
    console.log("stepTwo");
}

// stepOne initialized using anonymous function
// const & let are not hoisted so we need to use event listener
const stepOne = () => {
    console.log("stepOne");
}