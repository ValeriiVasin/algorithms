var fs = require('fs');

//
// Sorts
//
var insertion = require('../../../sort/insertion');
var selection = require('../../../sort/selection');
var shell = require('../../../sort/shell');

var file = fs.readFileSync('./elementarySorts.txt', { encoding: 'utf-8' });

var words = file.split(/\s+/).filter(Boolean);

// apply dictionary of sort
var dictionary = {
  insertion: 1,
  selection: 2,
  shell: 3
};

var rowsCount = 8;
var rows = words.reduce(function (result, word, index) {
  var row = index % rowsCount;

  if ( !result[row] ) {
    result[row] = [];
  }

  result[row].push(word);

  return result;
}, []);

function toHash(arr) {
  return arr.join(';');
}

var _byHash = rows.reduce(function (result, row, index) {
  result[toHash(row)] = index;
  return result;
}, {});

function stepCallback(sortType, arr) {
  var hash = toHash(arr);
  var result = _byHash[hash];

  if ( typeof result !== 'undefined' ) {
    if ( !__results[sortType] ) {
      __results[sortType] = [];
    }
    __results[sortType].push(result);
  }
}

var __results = {};
function doSort(sort, type) {
  var arr = rows[0].slice(0);

  sort(arr, stepCallback.bind(null, type));
}

doSort(insertion, 'insertion');
doSort(selection, 'selection');
doSort(shell, 'shell');

/**
 * Mapping according to order
 * 1 - selection
 * 2 - insertion
 * ...
 */
var mapping = Object.keys(__results).reduce(function (mapping, sortType) {
  var results = __results[sortType];

  results.forEach(function (order) {
    mapping[order] = sortType;
  });

  return mapping;
}, {});

// remove result column
delete mapping[7];

// Print answers
Object.keys(mapping).sort().forEach(function (key) {
  console.log(
    'Order: %s; Sort type: [%s] %s',
    key,
    dictionary[mapping[key]],
    mapping[key]
  );
});
