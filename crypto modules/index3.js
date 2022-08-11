// Accessing crypto Modules
const crypto = require('crypto');

// Set few things
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'salt', 24);    // key length 24
const cipher = crypto.createCipher(algorithm, key);     // rules to encrypt data

// Cipher process
let encrypted = '';

// Event listener to get the readable events that occurs on cipher object
cipher.on('readable', () => {
    let chunk;
    while (null !== (chunk = cipher.read())) {
        encrypted += chunk.toString('hex');
    }
});
// Event listener when text received and value stored in encrypted variable
cipher.on('end', () => console.log(encrypted));
cipher.write('This is a confidential data');
cipher.end(); 

// run "node index3.js" from terminal, which returns:
// 4f773d633b654c476f693ddababb63e3572af58de4ad81fad0e65cc29a1982c0