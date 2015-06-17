var assert = require('assert');

var readFixture = require('./util').readFixture;
var parse = require('./18').parse;
var maxSequenceSum = require('./18').maxSequenceSum;

var numbers = parse(readFixture('67.txt'));

assert.equal(maxSequenceSum(numbers), 7273, 'Answer');
