var assert = require('assert');
var readFixture = require('./util').readFixture;
var fixture = readFixture('22.txt').trim();
var arraySum = require('./util').arraySum;

var names = fixture.split(',').map(function(name) {
  return name.slice(1, -1);
}).sort();

function alphabeticalValue(name) {
  return name.split('').reduce(function(sum, letter) {
    // 65 - uppercased A code
    return sum + (letter.charCodeAt(0) - 65 + 1);
  }, 0);
}

function nameScore(name, index) {
  return alphabeticalValue(name) * (index + 1);
}

function getTotalNamesScore(names) {
  return arraySum(
    names.map(nameScore)
  );
}

assert.equal(alphabeticalValue('COLIN'), 53);
assert.equal(getTotalNamesScore(names), 871198282, 'Answer');
