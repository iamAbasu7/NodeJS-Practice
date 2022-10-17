var validator = require('validator');
let chalk = require('chalk');

let a = validator.isEmail('antae@b.in'); //=> true
console.log(a ? chalk.green.inverse(a) : chalk.red.inverse(a));