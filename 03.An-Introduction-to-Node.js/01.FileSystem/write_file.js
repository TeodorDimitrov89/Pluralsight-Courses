let fs = require('fs');

console.log("Starting");
fs.writeFile('./write_file.txt',"Hello World",'utf-8',(error)=> {
    if(error){throw error}
    console.log("The file has been saved!");
});

console.log('Finished!');

