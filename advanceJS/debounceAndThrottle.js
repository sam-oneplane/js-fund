// debounce used in final events (act after finish typing with delay)
// throttle used for intermediate event like scroll with delay   


// debounce prevent event to be called to soon
const initApp = () => {
    const btn = document.querySelector("button");
    btn.addEventListener("click",  delayBtn(btn, 1500));
    //btn.addEventListener("click",  debounce(clickLog, 1500));
    window.addEventListener('scroll', throttle(scrollLog, 1500));
}

const clickLog = () => console.log("clicked");
const scrollLog = () => console.log("scrolling bitch");

document.addEventListener("DOMContentLoaded", initApp);

// uses 1. closure (private vars) and 
//       2. decorators (receive a function as a parameters) 
// concepts
/*
* example : 
*  new repository in github checked if exits or not 
*  after some delay. if user continue typing it will reset the delay
*  and will be checked again when delay expired without clicking
*  good for action in the end of clicking, typing , ...
*/ 

// uses closure (lexical scope of id) and decorator( fn as parameter to decorator)
const debounce = (fn ,delay) => {
    let id ; // id is undefined private 
    return (...args) => {
        // if invoked it will reset timeout and set it again with settTimeout 
        // only if we stop clicking the fn() will be invoked
        if (id) clearTimeout(id);
        id = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}
// 2nd version using button enable/disable
const delayBtn = (btn, delay) => {
        btn.addEventListener("click",  () => {
            clickLog() ;
            btn.disabled = true;
            setTimeout(() => {
                btn.disabled = false;
            }, delay);
        });
}



// enable click after a given delay in time
// good for action at specific interval
const throttle = (fn, delay) => {
    let lastTime = new Date().getTime();
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
