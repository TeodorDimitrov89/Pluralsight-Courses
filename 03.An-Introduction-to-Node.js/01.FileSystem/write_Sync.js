//Writing a file Sync

let fs = require('fs');

let contents = fs.readFileSync('./config.json');

console.log("Contents: " + contents);

let config = JSON.parse(contents);
config.IPName = '192.168.1.1';

fs.writeFileSync('./config.json',JSON.stringify(config));
contents = fs.readFileSync('./config.json');
console.log("Contents: " + contents);
