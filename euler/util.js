var fs = require('fs');
var path = require('path');

function arraySum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

function arrayProduct(arr) {
  return arr.reduce(function(a, b) {
    return a * b;
  });
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  if (!factorial[n]) {
    factorial[n] = n * factorial(n - 1);
  }

  return factorial[n];
}

function combinations(n, k) {
  return (factorial(n) / factorial(k)) / factorial(n - k);
}

/**
 * Multiply number represented as digits array
 */
function multiply(arr, n) {
  arr = arr.map(function(value) {
    return value * n;
  });

  return _normalize(arr);
}

/**
 * Normalize digits in array after operations - proper borrowing etc
 */
function _normalize(arr) {
  // prevent mutations
  arr = arr.slice(0);

  var length = arr.length;
  var borrow = 0;

  for (var i = length - 1; i >= 0; i--) {
    arr[i] += borrow;
    borrow = 0;

    if (arr[i] >= 10) {
      borrow = Math.floor(arr[i] / 10);
      arr[i] = arr[i] % 10;
    }
  }

  while (borrow) {
    arr.unshift(borrow % 10);
    borrow = Math.floor(borrow / 10);
  }

  return arr;
}

function readFixture(filename) {
  return fs.readFileSync(
    path.resolve(__dirname, 'fixtures/' + filename),
    { encoding: 'utf8' }
  );
}

function fibonacci(n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 1;
  }

  if (!fibonacci[n]) {
    fibonacci[n] = fibonacci(n - 1) + fibonacci(n - 2);
  }

  return fibonacci[n];
}

module.exports = {
  arraySum: arraySum,
  arrayProduct: arrayProduct,

  factorial: factorial,
  combinations: combinations,
  fibonacci: fibonacci,

  multiply: multiply,

  readFixture: readFixture
};
