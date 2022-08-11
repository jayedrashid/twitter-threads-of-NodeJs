// Accessing crypto Modules
const crypto = require('crypto');

// Key provides another level of security on sha algorithm
const secret = 'secret-key';

// Create hash with chained functions
const hash = crypto.createHash('sha256', secret).update('password').digest('hex');

console.log(hash);

// run "node index2.js" from terminal, which returns:
// 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8