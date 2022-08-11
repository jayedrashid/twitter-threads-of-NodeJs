// Accessing the Class of test.js Modules
const Movie = require('./test');

const movie = new Movie();  // movie instance of Movie obj to call func

// Register a listener
movie.on("movieStart", ({movieTime, moviePlace}) => {   // 'movie.on' in place of 'emitter.on'
    console.log(`Turn off the lights because it's ${movieTime} and ${moviePlace}!`);
});

movie.movieWatch();

// run "node index.js" from terminal, which returns:
// Watching movie.
// Turn off the lights because it's 6 o'clock and houseful!
