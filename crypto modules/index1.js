// Accessing crypto Modules
const crypto = require('crypto');

// Create hash with chained functions
const hash = crypto.createHash('md5').update('password').digest('hex');

console.log(hash);

// run "node index1.js" from terminal, which returns:
// 5f4dcc3b5aa765d61d8327deb882cf99

// Note: Algorithm 'md5' is vulnerable