// Accessing events Modules
const EventEmitter = require('events');

// All event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:
const emitter = new EventEmitter();

// Register a listener with more arguments
emitter.on("movieStart", ({movieTime, moviePlace}) => {
    console.log(`Turn off the lights because it's ${movieTime} and ${moviePlace}!`);
});

// Initiate Events after 2sec
setTimeout(() => {
    emitter.emit("movieStart", {
        movieTime: "6 o'clock",
        moviePlace: "houseful",
    });
}, 2000);


// run "node index2.js" from terminal, which returns:
// Turn off the lights because it's 6 o'clock and houseful!