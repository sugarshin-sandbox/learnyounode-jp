var argv = process.argv;
var fs = require('fs');

var handler = function(err, file) {
  if (err) return;
  console.log(file.toString().split('\n').length - 1);
};

fs.readFile(argv[2], handler);
