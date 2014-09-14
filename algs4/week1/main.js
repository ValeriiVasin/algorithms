// main
var fs = require('fs');
var file = fs.readFileSync(process.argv[2], { encoding: 'utf-8' });
var data = file.trim().split('\n');

var QuickFind = require('./quick_find');
var QuickUnion = require('./quick_union');
var WeightedQuickUnion = require('./weighted_quick_union');

var n = Number(data[0]);
var qf = new QuickFind(n);
var qu = new QuickUnion(n);
var wqu = new WeightedQuickUnion(n);

data.slice(1).forEach(function (line) {
  var numbers = line.split(' ').map(Number);

  qf.union(numbers[0], numbers[1]);
  qu.union(numbers[0], numbers[1]);
  wqu.union(numbers[0], numbers[1]);
});

console.log('Results (QF): ', qf.id);
console.log('Results (QU): ', qu.id);
console.log('Results (WQU): ', wqu.id);
