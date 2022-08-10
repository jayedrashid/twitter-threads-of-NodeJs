// Accessing http Modules
const http = require('http');
const fs = require('fs');

// Declare port
const port = 3000;
// Declare host
const hostname = '127.0.0.1';
// Creates a server with status code
const myServer = http.createServer((req, res) => {

    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(202, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(202, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/projects/services') {
        fs.readFile('./projects/services.html', (err, data) => {
            res.writeHead(202, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/projects/serviceOne') {
        fs.readFile('./projects/serviceOne.html', (err, data) => {
            res.writeHead(202, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/projects/serviceTwo') {
        fs.readFile('./projects/serviceTwo.html', (err, data) => {
            res.writeHead(202, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            res.writeHead(202, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
    else {
        fs.readFile('error.html', (err, data) => {
            res.writeHead(404, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }
});

// Show message on terminal with port 3000 
myServer.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

// run "node index.js" from terminal, which returns:
// Server is running on http://127.0.0.1:3000
// So, in browser, different routes shows on http://localhost:3000/
