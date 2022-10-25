// web storage is not part of the DOM
// avaliable to JS via global-var (window)

// alias window is not mandetory   ---->  window.alert === alert

const myObj = {
    name: "Sam",
    hobbies : ["fuck", "you", "man"],
    logName: function() {
        console.log(this.name);
    }
}

const myArr = ["fuck", "you", "man"];

// store while the session is active 
//leaving the browser or logout will delete the data
//stors both for session & local only string
// store as JSON like this
sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
sessionStorage.setItem("mySessionArrStore", JSON.stringify(myArr));
// retrieve data 
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
const mySessionArr = JSON.parse(sessionStorage.getItem("mySessionArrStore"));

// localStorage:
localStorage.setItem("myLocalStore", JSON.stringify(myObj));
// get item
const myLocalStore = JSON.parse(localStorage.getItem("myLocalStore"));

//remove item
sessionStorage.removeItem("mySessionArrStore");

// clear all data
// sessionStorage.clear() 
//localStorage.clear()


// get key by possion
const key0 = localStorage.key(0);
