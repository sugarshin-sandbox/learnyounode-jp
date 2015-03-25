var argv = process.argv;
var fs = require('fs');

var n = fs.readFileSync(argv[2]).toString().split('\n').length - 1;
console.log(n);
