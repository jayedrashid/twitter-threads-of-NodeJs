// Accessing Modules
const url = require('url');
const http = require('http');
const fs = require('fs');

const port = 3000;

// Creates a server with status code
const myServer = http.createServer((req, res) => {

    const myObj = url.parse(req.url, true);
    const fileName = "." + myObj.pathname;      // turns into ./henry.html

    fs.readFile(fileName, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end("<h1>404 Not Found!</h1>");
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h2>Everything seems okay 😊</h2>");
        res.write(data);
        res.end();
    });
});

// Show message on terminal with port 3000 
myServer.listen(port, () => {
    console.log(`Server is running on ${port}`);
});

// run "node myFile.js" from terminal, which returns:
// Server is running on 3000
// Browser shows: 
// 404 Not Found! on http://localhost:3000/ 
// Everything seems okay 😊 on Tom Cruise page at http://localhost:3000/tom.html
// Everything seems okay 😊 on Henry Cavill page at http://localhost:3000/henry.html