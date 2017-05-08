let fs = require('fs');
console.log("Started!");
let config = JSON.parse(fs.readFileSync('./config.json'));
console.log("Initial config: ",config);

//fs.watchFile(filename[, options], listener) // Update the file and its cool!
fs.watchFile('./config.json',(curr,prev)=> {
    console.log("Config changed!");
    config = JSON.parse(fs.readFileSync('./config.json'));
    console.log("New config file:",config);
});
