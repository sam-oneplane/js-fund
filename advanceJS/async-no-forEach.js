const ids = [1,2,3,4,5,6,7,8,9,10];

const initApp = async () => {
    getPostSerialized2(ids);
}

// when the DOM is loaded it will call initApp
document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log(post);
    const data = await post.json();
    return data; 
}

// don't use ids.forEach() it is not async iterator so await want work
const getPostSerialized = async (ids) => {
    for (const id of ids) {
        const data = await getPost(id);
        console.log(data);
    }
}

// faster solution using Promise and high order map function
const getPostConcurrently = async (ids) => {
    const posts = await Promise.allSettled(ids.map(async (id) => getPost(id)))
    console.log(posts);
}

const getPostSerialized2 = async (ids) => {
    await ids.reduce( async (acc, id) => {
        // await for prev promise
        await acc; // keep it serialize when acc resolve promise
        const post = await getPost(id);
        console.log(post);
    },Promise.resolve) // promise resolve is the init promise
}
