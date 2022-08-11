// Accessing crypto Modules
const crypto = require('crypto');

// Set few things
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scryptSync(password, 'salt', 24);    // key length 24
const decipher = crypto.createDecipher(algorithm, key);     // rules to encrypt data

// Decipher process
let decrypted = '';

// Event listener to get the readable events that occurs on cipher object
decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
});
// Event listener when text received and value stored in encrypted variable
decipher.on('end', () => console.log(decrypted));

const encrypted = '4f773d633b654c476f693ddababb63e3572af58de4ad81fad0e65cc29a1982c0';
decipher.write(encrypted, 'hex');
decipher.end();

// run "node index4.js" from terminal, which returns:
// This is a confidential data