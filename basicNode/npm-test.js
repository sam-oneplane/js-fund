/*
 npm : node package manager

 cli : https://docs.npmjs.com/cli/v8

 using npm to import packages 

 1. npm i package-name  
 2. npm i dev-package -D
 3. npm i package-name@10.2.3 (specific version name)
 4. npm update  (check for updates)
 5. npm i nodemon -g (global install run on cli) 
 6. npm rm/uninstall package-name [-D/-g]

*/

const {format} = require('date-fns');
const uuid = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const date = format(new Date(), 'yyyy/MM/dd-HH:mm:ss');

console.log(date)


// to activate nodemon under dev run : 
// >npm run dev

// LOG EVENTS
const logEvents = async (massage, fName) => {
    const dateTime = `${format(new Date(), 'yyyy/MM/dd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid.v4()}\t${massage}\n`; 
    console.log(logItem)
    try{
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', fName), logItem);
    }catch(err) {
        console.error(err)
    }
}

module.exports = logEvents;