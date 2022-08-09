// Accessing path Modules
const path = require('path');

// Returns the directory name of a path
console.log(path.dirname("abcFolder/index.js"));
// Returns the extension of the path
console.log(path.extname("abcFolder/index.js"));
// Returns the last portion of a path or file name
console.log(path.basename("abcFolder/index.js"));
// Joins all given path segments together using the platform-specific separator
const joinName = path.join(__dirname + "/assets");
console.log(joinName);
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.join('Users', 'Refsnes', 'demo_path.js'));
// Returns an object whose properties represent significant elements of the path
console.log(path.parse(__filename));
console.log(path.parse("abcFolder/index.js"));
// Returns individual object properties of the path
const myPath = path.parse("abcFolder/index.js");
console.log(myPath.root);
console.log(myPath.dir);
console.log(myPath.base);
console.log(myPath.name);
console.log(myPath.ext);

const ourPath = "/Users/user/Documents/Web Development/Source Code/Expert Codes 03 Node Express MongoDB/Node 05 path module/index.js"
console.log(path.basename(ourPath));

// run "node index.js" from terminal, which returns:
// abcFolder
// .js
// index.js
// abcFolder/assets
// /foo/bar/baz/asdf
// Users/Refsnes/demo_path.js
// {
//     root: '/',
//     dir: '/user/abcFolder',
//     base: 'index.js',
//     ext: '.js',
//     name: 'index'
// }
// /
// /user/abcFolder
// index.js
// index
// .js
// index.js