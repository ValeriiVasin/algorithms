var assert = require('assert');
var getPrimes = require('../problems/primes').getPrimes;
var arraySum = require('./util').arraySum;
var TWO_MILLIONS = 2 * Math.pow(10, 6);

var primes = getPrimes(TWO_MILLIONS);
var sum = arraySum(primes);

assert.equal(sum, 142913828922, 'Answer');
