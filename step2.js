var argv = process.argv;

var n = argv.filter(function(el, i) { return (i > 1)}).reduce(function(prev, current) { return (+prev) + (+current)}, 0);
console.log(n);
