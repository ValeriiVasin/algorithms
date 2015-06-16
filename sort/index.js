var arr = require('./common').arr;
var lowToHigh = require('./common').lowToHigh;

var insertionSort = require('./insertion');
var selectionSort = require('./selection');
var bubbleSort = require('./bubble');
var quickSort = require('./quick');
var mergeSort = require('./merge');
var heapSort = require('./heap');
var shellSort = require('./shell');

function run(label, sortFn) {
  var data = [].concat(arr);
  var result;

  console.time(label);
  result = sortFn(data, lowToHigh);
  console.timeEnd(label);
  console.log('Result: ', result, '\n');
}

run('Insertion sort', insertionSort);
run('Shell sort', shellSort);
run('Selection sort', selectionSort);
run('Bubble sort', bubbleSort);
run('Quick sort', quickSort);
run('Merge sort', mergeSort);
run('Heap sort', heapSort);
