// The directory name of current module.
// This is the same as the path.dirname() of the __filename.

console.log(__dirname);

// Prints:      /Users/abcFolder



// The file name of the current module.
// This is the current module file's absolute path with symlinks resolved.

console.log(__filename);

// Prints:      /Users/abcFolder/index.js



// run "node index.js" from terminal