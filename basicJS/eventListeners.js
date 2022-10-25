"use strict";


//1.  define event listener : click
// syntax : addEventListener(event, function, useCapture);

const f  = () => {
    alert("click is activated");
}
// h2.addEventListener("click", f, false);
// h2.removeEventListener("click", f, false);


// 2.

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("page is ready!!!");
        initApp();
    }
})

const initApp = () => {
    const view = document.getElementById("view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "green";
    })

    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "red";
        //other option is to taggle classList:
        div.classList.toggle("brown");  
        event.stopPropagation();
    })

    // this event bubbled up to --> div
    // if useCapture 
    h2.addEventListener("click", (event) => {
        const txt = event.target.textContent ;
        txt === "my 2nd view" ? 
        event.target.textContent = "Clicked" : 
        event.target.textContent = "my 2nd view";
    })
}