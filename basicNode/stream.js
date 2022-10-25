const fs = require('fs');

const rs = fs.createReadStream('./files/completeJson.txt', {encoding: 'utf8'});
const ws = fs.createWriteStream('./files/newJson.txt');

/* method 1
rs.on('data', (data) => {
    ws.write(data);
})
*/

// method 2 
rs.pipe(ws) ;


// directory
if (!fs.existsSync('./newDir')) {
    fs.mkdir('./newDir', (err) => {
        if(err) {throw err;}
        console.log('dir created')
    });
}
