const fs = require('fs');
const {join} = require('path');
const fsPromises = require('fs').promises;

// use async / await 
const fileOps = async () => {
    try {
        // no callback function needed;
        const data = await fsPromises.readFile(join(__dirname, 'files', 'test.json'), 'utf8');
        console.log(`read with async/await : ${data}`);
        //await fsPromises.unlink(join(__dirname, 'files', 'completeJson.txt'));
        await fsPromises.writeFile(join(__dirname, 'files', 'writeJson.txt'), data);
        await fsPromises.rename(join(__dirname, 'files', 'writeJson.txt'),
                                join(__dirname, 'files', 'completeJson.txt'));
    }catch(err) {
        console.error(err);
    } 
}

fileOps();

// async function
fs.readFile(join(__dirname, 'files', 'test.json') , 'utf8', (err, data) => {
    if (err) throw err;
    console.log(`read with callback : ${data}`);
})

// callback hell 

fs.writeFile(join(__dirname, 'files', 'greet.txt') , 'nice to meet you man.', (err) => {
    if (err) throw err;
    console.log('complete writing to file');

    fs.appendFile(join(__dirname, 'files', 'greet.txt') , '\n\nhow are you ?', (err) => {
        if (err) throw err;
        console.log('complete append to file');
    })
})


// exit on uncaught errors 
process.on('uncaughtException', err => {
    console.error(`uncaught error : ${err}`);
    process.exit(1);
})