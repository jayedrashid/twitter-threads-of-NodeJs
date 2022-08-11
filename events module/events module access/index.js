// Accessing events Modules
const EventEmitter = require('events');

// All event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:
const emitter = new EventEmitter();

// Register a listener
emitter.on('movieStart', () => {
    console.log('Turn off the lights!');
});

// Initiate Events
// emitter.emit('movieStart');

// Or Initiate Events after 2sec
setTimeout(() => {
    emitter.emit('movieStart');
}, 2000);


// run "node index.js" from terminal, which returns:
// Turn off the lights!