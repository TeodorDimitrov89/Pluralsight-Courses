//Reading a File from file system

//fs.readFile(file[, options], callback)
//Async Reading File
let fs = require('fs'); //loading file system module
console.log('Starting');
fs.readFile('./FileSystem/sample.txt',function (error, data) {
    console.log("Content of file: " + data);
});
console.log("Carry on executing");

//fs.readFileSync(file[, options])

let content = fs.readFileSync('./FileSystem/sample.txt');
console.log("Content " + content);

console.log("Carry on executing");