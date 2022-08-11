// Accessing events Modules
const EventEmitter = require('events');

// Create Class template to avoid multiple objects from modules
class Movie extends EventEmitter {

    // Create constructor function inside Class
    movieWatch() {
        console.log("Watching movie.");

        // Initiate Events after 2sec
        setTimeout(() => {
            this.emit("movieStart", {
                movieTime: "6 o'clock",
                moviePlace: "houseful",
            });
        }, 2000);
    }
};

module.exports = Movie;