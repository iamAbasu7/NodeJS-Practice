const fs = require('fs');
// To create a file
fs.writeFileSync('test.txt','Hi, My name is Antar');

//To append
fs.appendFileSync('test.txt', ' I am a good boy');

//To read file
let a = fs.readFileSync('test.txt');
let b=a.toString()
console.log(b);

fs.mkdirSync('Antar');

fs.writeFileSync('Antar/bio.txt', 'filemodule ');