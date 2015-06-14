var assert = require('assert');

function pythagoreanTriplet(_sum) {
  var squares = squaresLessThenOrEqual(_sum * _sum);
  var triplets = getPythagoreanTriplets(squares);

  triplets = triplets
    .map(function(triplet) {
      return triplet.map(Math.sqrt);
    })
    .filter(function(triplet) {
      return sum(triplet) === _sum;
    });

  return triplets[0];
}

function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

function product(arr) {
  return arr.reduce(function(a, b) {
    return a * b;
  });
}

function squaresLessThenOrEqual(number) {
  var result = [];
  var last = Math.floor(Math.sqrt(number));

  for (var i = 1; i <= last; i++) {
    result.push(i * i);
  }

  return result;
}

function toHash(numbers) {
  return numbers.reduce(function(hash, number) {
    hash[number] = true;
    return hash;
  }, {});
}

function getPythagoreanTriplets(numbers) {
  var results = [];
  var length = numbers.length;
  var hash = toHash(numbers);
  var a, b, c;

  for (var i = 0; i < length - 2; i++) {
    a = numbers[i];

    for (var j = i + 1; j < length - 1; j++) {
      b = numbers[j];
      c = a + b;

      if (hash[c]) {
        results.push([a, b, c]);
      }
    }
  }

  return results;
}

assert.deepEqual(squaresLessThenOrEqual(25), [1, 4, 9, 16, 25], 'squaresLessThenOrEqual');
assert.deepEqual(getPythagoreanTriplets([1, 4, 9, 16, 25]), [[9, 16, 25]], 'getTriplets');
assert.deepEqual(toHash([2, 3]), { 2: true, 3: true }, 'toHash');

console.log(
  product(
    pythagoreanTriplet(1000)
  )
);

