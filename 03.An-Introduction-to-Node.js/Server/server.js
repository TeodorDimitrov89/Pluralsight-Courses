let http = require('http');
let fs = require('fs'); //For reading the html files
let file = JSON.stringify({"host":"localhost","port":"1555"});
fs.writeFileSync('./config.json',file,'utf-8',(error)=> {
    if(error){throw error}
    console.log("The file has been saved!");
});

let config = JSON.parse(fs.readFileSync('config.json'));
let host = config.host;
let port = config.port;

console.log("Starting");
//Create Server
let server = http.createServer((request, response) => {
    // console.log("Received request: " + request.url);
    //Reading the file
    fs.readFile('./public' + request.url, (error, data) => {
            if (error) {
                console.log(error);
                response.writeHeader(404, {"Content-type": "text/plain"});
                response.write('Page not Found');
                response.end();
            } else {
                response.writeHeader(200, {"Content-type": "text/html"});
                response.write(data);
                response.end();
            }
        }
    );
    //Write Headers
    // let headers = { "Content-type" : "text/plain" };
    // response.writeHeader(200,headers); // 200 Ok is the server status
    // response.write('Some content here'); // here we can write some text or passed data.
    // response.end(); //send the complete page to the user
});

server.listen(port, host, () => {
    console.log("Server is listening to port: " + port);
});

fs.watchFile('./config.json', () => {
    config = JSON.parse(fs.readFileSync('./config.json'));
    server.close();
    port = config.port;
    host = config.host;
    server.listen(port, host, () => {
        console.log("Server is now listening to new port: " + port);
    });
});
