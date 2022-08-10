// HTTP module allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP)
// The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. 

// the http.createServer method creates a server that calls requestListener whenever a request comes in. The next line, server.listen(8080), calls the listen method, which causes the server to wait for incoming requests on the specified port - 3000, in this case.
// There you have it - your most basic Node.js HTTP server.



// // Example: 1
// // Accessing http Modules
// const http = require('http');

// // Creates a server on port 3000
// http.createServer((req, res) => (res.end("Server is running!"))).listen(3000);

// // run "node index.js" from terminal
// // In browser http://localhost:3000/ shows Server is running!





// // Example: 2
// // Accessing http Modules
// const http = require('http');

// // Creates a server on port 3000
// const myServer = http.createServer((req, res) => (res.end("Server is running!")));

// // Show message on terminal
// myServer.listen(3000, () => {
//     console.log(`Server is running on port:3000!`);
// });

// // run "node index.js" from terminal, which returns:
// // Server is running on port:3000!
// // In browser http://localhost:3000/ shows Server is running!





// // Example: 3
// // Accessing http Modules
// const http = require('http');

// // Declare port
// const port = 3000;
// // Declare host
// const hostname = '127.0.0.1';
// // Creates a server on port 3000
// const myServer = http.createServer((req, res) => (res.end("<h1>Server is running!</h1>")));
// // Show message on terminal
// myServer.listen(port, hostname, () => {
//     console.log(`Server is running on http://${hostname}:${port}`);
// });

// // run "node index.js" from terminal, which returns:
// // Server is running on http://127.0.0.1:3000
// // In browser http://localhost:3000/ shows Server is running!







// // Example: 4
// // Accessing http Modules
// const http = require('http');

// // Creates a server
// const myServer = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write("<h1>Server is running!</h1>");
//         res.end();
//     }
//     // Handling different routes
//     if (req.url === '/api/example') {
//         res.write(JSON.stringify([1,2,3]));
//         res.end();
//     }
// });

// // Server on port 3000
// myServer.listen(3000);
// // Message on terminal
// console.log("listening on port 3000!");

// // run "node index.js" from terminal, which returns:
// // listening on port 3000!

// // In browser http://localhost:3000/ shows:
// // Server is running!
// // http://localhost:3000/api/example route shows:
// // [
// //     1,
// //     2,
// //     3
// // ]






// // Example: 5
// // Accessing http Modules
// const http = require('http');

// // Declare port
// const port = 3000;
// // Declare host
// const hostname = '127.0.0.1';
// // Creates a server with status code
// const myServer = http.createServer((req, res) => {
//     res.writeHead(202, {'Content-Type':'text/html'});
//     res.write("<h1>Server is running!</h1>");
//     res.end();
// });
// // Show message on terminal with port 3000 
// myServer.listen(port, hostname, () => {
//     console.log(`Server is running on http://${hostname}:${port}`);
// });

// // run "node index.js" from terminal, which returns:
// // Server is running on http://127.0.0.1:3000
// // In browser http://localhost:3000/ shows Server is running!







