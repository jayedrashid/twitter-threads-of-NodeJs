// Accessing crypto Modules
const crypto = require('crypto');

// Set few things
const encryptionMethod = 'aes-192-cbc';
const secret_key = 'asdfgh123456';
const secret_iv = 'ghjkl';
const key = crypto.createHash('sha512').update(secret_key, 'utf-8').digest('hex').substr(0, 32);    
const iv = crypto.createHash('sha512').update(secret_iv, 'utf-8').digest('hex').substr(0, 16);  

// Call Encrypt function
const encryptedMessage = encrypt_string("hello", encryptionMethod, key, iv);
console.log(encryptedMessage);

// Add Encrypt function
function encrypt_string(plain_text, encryptionMethod, secret, iv) {
    let encryptor = crypto.createCipher(encryptionMethod, secret, iv);
    let aes_encrypted = encryptor.update(plain_text, 'utf8', 'base64') + encryptor.final('base64');
    return Buffer.from(aes_encrypted).toString('base64');
};

// Call Decrypt function
const decryptedMessage = decrypt_string("cE1pMUJ5eW1ZcHovMnZic1BjRGs2Zz09", encryptionMethod, key, iv);
console.log(decryptedMessage);

// Add Decrypt function
function decrypt_string(encryptedMessage, encryptionMethod, secret, iv) {
    const buff = Buffer.from(encryptedMessage, 'base64').toString('base64');
    encryptedMessage = buff.toString('utf-8')
    const decryptor = crypto.createDecipher(encryptionMethod, secret, iv);
    return decryptor.update(encryptedMessage, 'base64', 'utf8') + decryptor.final('utf8');
};

// run "node index5.js" from terminal, which returns:
// cE1pMUJ5eW1ZcHovMnZic1BjRGs2Zz09
// crypto.createCipher is deprecated.