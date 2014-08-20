var arr = require('./data').arr;
var insertionSort = require('./insertion');
var selectionSort = require('./selection');
var bubbleSort = require('./bubble');

function run(label, sortFn) {
  var data = [].concat( arr );
  var result;

  console.time(label);
  result = sortFn(data);
  console.timeEnd(label);
  console.log('Result: ', result, '\n');
}

run('Insertion sort', insertionSort);
run('Selection sort', selectionSort);
run('Selection sort', bubbleSort);
