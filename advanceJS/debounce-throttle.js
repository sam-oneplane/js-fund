const initApp = () => {
    const btn = document.querySelector("button");
    // btn.addEventListener("click",  debounce(clickLog, 1500));
    btn.addEventListener("click",  () => {
        clickLog() ;
        btn.disabled = true;
        setTimeout(() => {
            btn.disabled = false;
        }, 1500);
    });
    window.addEventListener('scroll', throttle(scrollLog, 400));
}

const clickLog = () => console.log("clicked");
const scrollLog = () => console.log("scrolling bitch");

document.addEventListener("DOMContentLoaded", initApp);

// usses 1. closure (private vars) and 
//       2. decorators (recive a function as a parametes) 
// concepts
/*
* example : 
*  new repstory in github checked if exits or not 
*  after some delay. if user continue typing it will reset the delay
*  and will be checked again when delay expired without clicking
*  good for action in the end of clicking, typing , ...
*/ 
const debounce = (fn ,delay) => {
    let id; // id is private  :  set up to undefined at 1st call
    return (...args) => {
        console.log(`prev id : ${id}`);
        // if invoked it will reset timeout (if(id)) and set it again 
        // only if we stop clicking the fn() will be invoked
        if (id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

// enable click after a delay in time
// good for action at specific interval
const throttle = (fn, delay) => {
    let lastTime = 0;
    let id = 0;
    // event handler
    return (...args) => {
        const now = new Date().getTime();
        id++;
        if (now - lastTime < delay) return;
        lastTime = now;
        console.log(`id: ${id}`);
        fn(...args);
    }
}
