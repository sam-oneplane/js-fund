// promesis help to simplefied the callback function
//  has 3 states : pending , fulfilled , rejected

const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve(7);
    }else {
        reject("The promise was rejected!!!");
    }
});

myPromise
.then((x) => {return x+3;})
.then((x) => {console.log(`promise was fulfilled! with ${x}`);})
.catch((err) => {console.error(err);})


// fatch return promise

/*
const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach(user => {
            console.log(user);
        })        
    })
    .catch((err) => {console.error(err);});
*/

const listOfUsers = {
    users: [],
};

// async await solves the .then chain of a promise

async function usersPost(path,id) {
    const postIdUrl = `${path}/${id}`;
    const post = await fetch(postIdUrl);
    const data = await post.json();
    return data
};

// or this is the same :

const usersPostF2 = async (path, id) => {
    const postIdUrl = `${path}/${id}`;
    const post = await fetch(postIdUrl);
    const data = await post.json();
    return data
}

// test no-1
// 
const usersF2 = async (path) => {
    const post = await fetch(path); // return a promise we wait for it to resolve
    const usersList = await post.json(); // same 
    const emailList = usersList.map(user => {
        return user.email;
    })
    postToWebPage(emailList);
    return emailList; // returs a list
}

const postToWebPage = (emails) => console.log(emails);

const getUsers = async (path) => {
    const myUsers = await usersF2(path); 
    listOfUsers.users = myUsers; 
}

getUsers("https://jsonplaceholder.typicode.com/users");


// test no-2
// featch with second param
const getDadJoke = async (path) => {
    const response = await fetch(path, {
        method: "GET",  // POST 
        headers: {
            Accept: "application/json",  // /text ....
        }
    });
    const dataObj = await response.json();
    return dataObj;
}

const getJokeId = async (path) => {
    joke = await getDadJoke(path);
    console.log(joke);
    return joke;
}

const getDataJoke = getJokeId("https://icanhazdadjoke.com/");

// test no-3
// POST with response 
/*
const jokeObj = {
    id: "some id",
    joke: "some joke",
}

const postDadJoke = async (path) => {
    const response = await fetch(path, {
        method: "POST",  // POST 
        headers: {
            "Contant-type": "application/json",  // /text ....
        },
        body: JSON.stringify(jokeObj),
    });

    const dataObj = await response.json();
    console.log(dataObj);
    return dataList;
};

const postDataJoke = postDadJoke("https://httpbin.org/post");
*/


// Lets make it orgenized 

const dataFromForm = (first, last , catList) => {
    const formObj = {
        firstName: first,
        lastName: last,
        categories: catList,
    };
    return formObj;
}

const buildReqUrl = (url, reqData) => {
    console.log(reqData);
    // return `${url}/random?firstName=${reqData.firstName}&lastName=${reqData.lastName}&limitTo=${reqData.categories}`;
    return url;
}


const reqJoke = async (url) => {
    const response = await fetch(url, {
        method: "GET", 
        headers: {
            Accept: "application/json",  // /text ....
        }
    });
    const dataObj = await response.json();
    //const joke  = dataObj.value.joke;
    postObjToPage(dataObj);
    return joke;
}

const postObjToPage = (obj) => {
    console.log(obj.id, ",", obj.joke);
}

const processJokeReq = async (url, first = "Bruce", last="Lee", categories=["nerdy"]) => {
    const formObj = dataFromForm(first, last, categories);
    const fUrl = buildReqUrl(url, formObj);
    const responseObj = await reqJoke(fUrl);
    return responseObj;  
} 

// processJokeReq("http://api.icndb.com/jokes"); 
const data = processJokeReq("https://icanhazdadjoke.com/"); 
