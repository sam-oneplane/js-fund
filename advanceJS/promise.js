const userLeft = false;
const userWatching = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft || userWatching) {
            reject({
                name: 'Sam left',
                massage: ':-(',
            });
        }else {
            resolve('Sam Subscribed :-) ');
        }
    });
}

watchTutorialPromise().then((massage) => {
    console.log(massage)
}).then(() => {
    console.log("Sam is a motherfucker ");
}).catch( (error) => {
    console.log(`${error.name} ${error.massage}`);
})

const recVideo1 = new Promise((resolve, reject) => {
    resolve('video 1 finish recording');
})

const recVideo2 = new Promise((resolve, reject) => {
    resolve('video 2 finish recording');
})

const recVideo3 = new Promise((resolve, reject) => {
    resolve('video 3 finish recording');
})

Promise.allSettled([ 
    recVideo1,
    recVideo2,
    recVideo3,
]).then((msgs) => console.log(msgs)); // return array of resolve massages
// Promise.race will end when the first promise resole