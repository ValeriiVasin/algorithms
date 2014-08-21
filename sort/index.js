var arr = require('./common').arr;
var insertionSort = require('./insertion');
var selectionSort = require('./selection');
var bubbleSort = require('./bubble');
var quickSort = require('./quick');
var mergeSort = require('./merge');

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
run('Bubble sort', bubbleSort);
run('Quick sort', quickSort);
run('Merge sort', mergeSort);
