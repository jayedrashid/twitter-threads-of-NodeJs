// Accessing http Modules
const http = require('http');
const fs = require('fs');

// Declare port
const port = 3000;
// Declare host
const hostname = '127.0.0.1';
// Creates a server with status code
const myServer = http.createServer((req, res) => {

    // Declare variables for clean code
    const handleFunc = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (err, data) => {
            if (err) {
                res.end("<h1>Not Found!</h1>");
            }
            res.writeHead(statusCode, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }

    if (req.url === '/') {
        handleFunc(200, 'index.html');
    }
    else if (req.url === '/about') {
        handleFunc(200, 'about.html');
    }
    else if (req.url === '/projects/services') {
        handleFunc(200, './projects/services.html');
    }
    else if (req.url === '/projects/serviceOne') {
        handleFunc(200, './projects/serviceOne.html');
    }
    else if (req.url === '/projects/serviceTwo') {
        handleFunc(200, './projects/serviceTwo.html');
    }
    else if (req.url === '/contact') {
        handleFunc(200, 'contact.html');
    }
    else {
        handleFunc(404, 'error.html');
    }
});

// Show message on terminal with port 3000 
myServer.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

// run "node index.js" from terminal, which returns:
// Server is running on http://127.0.0.1:3000
// So, in browser, different routes shows on http://localhost:3000/
