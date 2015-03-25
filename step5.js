var argv = process.argv;
var fs = require('fs');

var readdirHandler = function(err, list) {
  if (err) return;
  var s = list.filter(function(el, i) {return el.indexOf(argv[3]) >= 0});
  console.log(s);
};

fs.readdir(argv[2], readdirHandler);
