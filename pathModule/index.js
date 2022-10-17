const path = require('path');

console.log(path.dirname("/home/antar/Projects/Personal-project/NodeJS/pathModule/index.js"));
console.log(path.extname("/home/antar/Projects/Personal-project/NodeJS/pathModule/index.js"));
console.log(path.basename("/home/antar/Projects/Personal-project/NodeJS/pathModule/index.js"));
// console.log(path.parse("/home/antar/Projects/Personal-project/NodeJS/pathModule/index.js"));
let obj = path.parse("/home/antar/Projects/Personal-project/NodeJS/pathModule/index.js")
console.log(obj.ext);