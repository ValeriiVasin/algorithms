var assert = require('assert');

function nextSequenceNumber(number) {
  return number % 2 ? 3 * number + 1 : number / 2;
}

function sequenceLength(number) {
  if (number === 1) {
    return 1;
  }

  var cached = sequenceLength[number];
  if (cached) {
    return cached;
  }

  return sequenceLength[number] = sequenceLength(nextSequenceNumber(number)) + 1;
}

function getMaxSequence(n) {
  var maxSequenceLength = 1;
  var maxSequenceStart = 1;
  var length;

  for (var i = 2; i < n; i++) {
    length = sequenceLength(i);

    if (length > maxSequenceLength) {
      maxSequenceLength = length;
      maxSequenceStart = i;
    }
  }

  return maxSequenceStart;
}

assert.equal(nextSequenceNumber(10), 5);
assert.equal(nextSequenceNumber(11), 34);
assert.equal(sequenceLength(13), 10);

assert.equal(getMaxSequence(Math.pow(10, 6)), 837799, 'Answer');
