const ids = [3,4,5,8,9,10];

const initApp = async () => {
    getPostConcurrently(ids);
    getPostSerialized(ids);
    getPostWithPromise(ids);
}

// when the DOM is loaded it will call initApp
document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
    return  await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json(); 
}

// don't use ids.forEach() it is not async iterator so await want work
const getPostSerialized = async (ids) => {
    for (const id of ids) {
        const data = await getPost(id);
        console.log(data);
    }
}

// faster solution using Promise and high order map function
// if one fail they all fail
const getPostConcurrently = async (ids) => {
    const posts = await Promise.allSettled(ids.map(async (id) => getPost(id)));
    console.log(posts);
}

const getPostWithPromise = async (ids) => {
    await ids.reduce( async (acc, id) => {
        // await for prev promise to resolve 
        await acc; // keep it serialize when acc resolve promise
        const post = await getPost(id);
        console.log(post);
    },Promise.resolve) // promise resolve for init stage 1st element
}
