//html DOM : document object model

const view1 = document.getElementById("view1");
const view2 = document.querySelector("#view2");

const views = document.getElementsByClassName("view");
const sameViews = document.querySelectorAll(".view");

const divs = view1.querySelectorAll("div");
const sameDivs = view1.getElementsByTagName("div");

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

// alter our page
for (let d of evenDivs) {
    d.style.backgroundColor = "darkgreen"; 
} 

const newText = document.querySelector("nav h1");
//newText.textContent = "hello fuckers";
const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hi There</h1>  <p>this is my text fuckers</p>`;
navbar.style.justifyContent = "space-evenly";

//DOM tree navigating
const parent = evenDivs[0].parentElement;
const childNodes = parent.childNodes; // list of all nodes in document (text, div, ...)


// create/remove elements

view1.style.display = "flex";
view2.style.display = "none";

//remove
viewLastChild = view1.lastChild
viewLastChild.remove();

// add
const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "#433";
    newDiv.style.height = "100px";
    newDiv.style.width = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
createDivs(view1, 13);


// event listeners :



