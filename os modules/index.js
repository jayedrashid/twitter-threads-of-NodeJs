// Accessing os Modules
const os = require('os');

// Returns my operating system CPU architecture
console.log(os.arch());
// Returns the total amount of system memory in gigabytes
const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);
// Returns the amount of free system memory in gigabytes
const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);
// Returns the string path of the current user's home directory.
console.log(os.homedir());
// Returns the information about each logical CPU core of the computer.
console.log(os.cpus());
// Returns the host name of the operating system as a string.
console.log(os.hostname());
// Returns an object containing network interfaces that have been assigned a network address.
console.log(os.networkInterfaces());
// Returns a string identifying the operating system platform
console.log(os.platform());
// Returns the operating system as a string.
console.log(os.release());
// Returns the operating system name ('Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows).
console.log(os.type());
// Returns the system uptime in number of seconds.
console.log(os.uptime());
// Returns a string identifying the kernel version.
console.log(os.version());

// run "node index.js" from terminal
