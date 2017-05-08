let fs = require('fs');

console.log("Starting");

let contents = fs.readFileSync('./config.json');
console.log("Contents " + contents);
let config = JSON.parse(contents);
console.log(config);
console.log("Carry on executing");