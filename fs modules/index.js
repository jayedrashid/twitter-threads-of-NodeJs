// // Accessing fs Modules
// const fs = require('fs');


// // Checking a file named test2
// fs.writeFile('test1.txt', "I'm newly created as test1!", (err) => {(err) ? console.log(err) : console.log("everything okay")});

// // run "node index.js" from terminal, which returns:
// // everything okay







// // Accessing fs Modules
// const fs = require('fs');


// // Adding contents to test1
// fs.appendFile('test1.txt', " This is a new text.", (err) => {(err) ? console.log(err) : console.log("everything okay")});

// // run "node index.js" from terminal, which returns:
// // everything okay





// // Accessing fs Modules
// const fs = require('fs');


// // Read contents to test1
// fs.readFile('test1.txt', 'utf-8', (err, data) => {(err) ? console.log(err) : console.log(data)});

// // run "node index.js" from terminal, which returns:
// // I'm newly created as test1! This is a new text.







// // Accessing fs Modules
// const fs = require('fs');


// // Rename the file from to test1 to test2
// fs.rename('test1.txt', 'test2.txt', (err) => {(err) ? console.log(err) : console.log("file renamed")});

// // run "node index.js" from terminal, which returns:
// // file renamed






// // Accessing fs Modules
// const fs = require('fs');


// // Delete the file from to test1 to test2
// fs.unlink('test2.txt', (err) => {(err) ? console.log(err) : console.log("file deleted")});

// // run "node index.js" from terminal, which returns:
// // file deleted








// // Accessing fs Modules
// const fs = require('fs');


// // Checking a file named test2
// fs.exists('test2.txt', (result) => {(result) ? console.log("file exists") : console.log("file missing")});

// // run "node index.js" from terminal, which returns:
// // file missing