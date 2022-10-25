
// 1. global object in node againest window object in  browser
// 2. node has a core  modules using require()
const os = require('os');
const path = require('path');
const math = require('./math');

//console.log(os.version())
console.log(os.homedir(), __dirname)
console.log(path.dirname(__filename))
console.log(path.parse(__filename))

console.log(math.mod(math.mul(3,6), 10))