// Accessing url Modules
const url = require('url');

const myUrl = 'http://localhost:3000/user?country=usa&city=ny';
const myObj = url.parse(myUrl, true);

console.log(myObj.host);            // returns localhost:3000
console.log(myObj.pathname);        // returns /user
console.log(myObj.search);          // returns ?country=usa&city=ny

const queryData = myObj.query;      // makes an object = { country: 'usa', city: 'ny' }
console.log(queryData.country);     // returns usa
console.log(queryData.city);        // returns ny

// run "node index.js" from terminal